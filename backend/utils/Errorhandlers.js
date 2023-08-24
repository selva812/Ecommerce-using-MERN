class Errorhandlers extends Error{
    constructor(message,statuscode){
        super(message)
        this.statuscode=statuscode
        Error.captureStackTrace(this,this.constructor)
    }
}
module.exports=Errorhandlers