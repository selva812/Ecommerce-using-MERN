const express= require("express")
const Errorhandlers = require("./middleware/error")
const app=express()
const cors=require("cors")
const cookieparser= require("cookie-parser")
const bodyparser =require("body-parser")
app.use(cors())
app.use(express.json())
app.use(cookieparser())
app.use(bodyparser.urlencoded({extended:true}))
app.use("/",express.static("uploads"))
//config
if(process.env.MODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })
}

//import routes
const user= require("./controller/user")
app.use("/api/v2/user",user)
//it's for handling error
app.use(Errorhandlers)
module.exports = app