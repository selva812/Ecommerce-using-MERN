const app= require("./App")
const connectdatabase = require("./DB/Database")
const PORT=process.env.PORT || 5000
//Handling uncaught error
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`)
    console.log("Shutting down the server for handling uncaught error")
})
 
//config
if(process.env.MODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })
}

//connect to mongodb database
connectdatabase()
// Creating server
const Server=app.listen(PORT,()=>{
    console.log(`Server running successfully in port ${PORT}`)
})

//unhandled promises rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Shutting down the server for ${err.message}`)
    console.log(`Shutting down the server for unhandled promises rejection`)
    Server.close(()=>{
        process.exit(1)
    })
})