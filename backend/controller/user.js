const express=require("express")
const path= require("path")
const router=express.Router()
const User=require("../model/user")
const {upload}=require("../multer")
const Errorhandlers = require("../utils/Errorhandlers")

router.post("/create-user",upload.single("file"),async(req,res,next)=>{
    const {name,email,password} =req.body
    const useremail=await User.findOne({email})
    if(useremail){
        return next(new Errorhandlers("User already exists",400))
    }
    const filename= req.file.filename
    const fileurl=path.join(filename)
    const user={
        name:name,
        email:email,
        password:password,
        avatar:fileurl,
    }
    console.log(user)
    const newuser= await User.create(user)
    res.status(201).json({
        success:true,
        newuser,
    })
})
module.exports =router