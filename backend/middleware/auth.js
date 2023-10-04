const catchAsyncerror =require("./catchAsyncerror")
const Errorhandlers =require("../utils/Errorhandlers")
const jwt = require("jsonwebtoken")
const User = require("../model/user")

exports.isAuthenticated = catchAsyncerror(async(req,res,next)=>{
    const {token} =req.cookies
    if(!token){
        return next(new Errorhandlers("please login to continue",401))
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
    req.user = await User.findById(decoded.id)
    next()
})
