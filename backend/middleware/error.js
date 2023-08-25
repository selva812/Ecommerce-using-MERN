const Errorhandlers =require("../utils/Errorhandlers")

module.exports = (err,req,res,next)=>{
    err.statuscode= err.statuscode || 500
    err.message = err.message || "internal server error"
     
    //wrong mongodb id error
    if(err.name === "CastError"){
        const message = "Resource not found with this id .."
        err= new Errorhandlers(message,400)
    }

    //Duplicate key error
    if(err.code === 11000){
        const message=`Duplicate key ${Object.keys(err,keyvalue)} Entered`
        err= new Errorhandlers(message,400)
    }

    //wrong jwt token
    if(err.name === "JsonWebTokenError"){
        const message= `your url is invalid please try again later`
        err=new Errorhandlers(message,400)
    }

    //jwt is expired
    if(err.name === "TokenExpiredError"){
        const message=`your url is expired please try agian later`
        err=new Errorhandlers(message,400)
    }
    res.status(err.statuscode).json({
        success :false,
        message:err.message
    })
}