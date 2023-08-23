const express= require("express")
const app=express()
const PORT = process.env.PORT || 5000
const cors=require("cors")
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Server running successfully")
})
app.listen(PORT,()=>{
    console.log(`Server is running in port ${PORT}`)
})