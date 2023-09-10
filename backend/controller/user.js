const express=require("express")
const path= require("path")
const router=express.Router()
const User=require("../model/user")
const {upload}=require("../multer")
const Errorhandlers = require("../utils/Errorhandlers")
const fs =require("fs")
const jwt=require("jsonwebtoken")
const SendMail = require("../utils/Sendmail")
const catchAsyncerror=require("../middleware/catchAsyncerror")
const sendToken=require("../utils/jwtToken")
//create new user
router.post("/create-user",upload.single("file"),async(req,res,next)=>{
   try{
    const {name,email,password} =req.body
    const useremail=await User.findOne({email})
    
    if(useremail){
        const filename= req.file.filename
        const filepath =`../uploads/${filename}`
        fs.unlink(filepath,(err)=>{
            if(err){
                console.log(err.response.message);
            }
            else{
                console.log("file deleted")
            }
        })
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
    const activationtoken= createActivationtoken(user)
    const activaitonUrl=`http://localhost:3000/activation/${activationtoken}`
     try {
        await SendMail({
            email:user.email,
            subject:"Activate your account",
            message:`Hello ${user.name} , please click on this link to activate your account: ${activaitonUrl}`
        })
        res.status(201).json({
            success:true,
            message:`please check your email:-${user.email} to activate your account`
        })
     } catch (err) {
        return next(new Errorhandlers(err.message,500))
     }   
}
    catch(err){
        return next(new Errorhandlers(err.message,400))
    }
})

//activate user
 router.post("/activation",catchAsyncerror(async(req,res,next)=>{
    try {
        const {activation_token}=req.body
        const newuser= jwt.verify(activation_token,process.env.ACTIVATION_SECRET)
        if(!newuser){
            return next(new Errorhandlers("Invalid token",400))
        }
        const {name,email,password,avatar}=newuser
        let user=await User.findOne({email})
        if(user){
            return next(new Errorhandlers("user already exists",400))
        }
        user= await User.create({name,email,password,avatar})
        sendToken(user,201,res)
    } catch (error) {
        
    }
 }))

 //login-user
 router.post("/login-user",catchAsyncerror(async(req,res,next)=>{
    try {
        const {email,password}=req.body
        if(!email || !password){
            return next(new Errorhandlers("please provide all fields ",400))
        }
        const user= await User.findOne({email}).select("+password")
        if (!user){
            return next(new Errorhandlers("user doesn't exists",400))
        }
        const isvalid= await user.comparePassword(password)
        if(!isvalid){
            return next(new Errorhandlers("Please provide the correct password",400))
        }
        sendToken(user,201,res)
    } catch (error) {
        return next(new Errorhandlers(error.message,500))
    }
 }))
const createActivationtoken=(user)=>{
   return jwt.sign(user, process.env.ACTIVATION_SECRET ,{
    expiresIn:"5m"
   })
}

module.exports =router