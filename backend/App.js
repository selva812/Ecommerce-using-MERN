const express= require("express")
const app=express()

if(process.env.MODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })
}
module.exports = app