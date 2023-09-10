const nodemailer= require("nodemailer")
const SendMail=async(options)=>{
    const transporter =nodemailer.createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        service: process.env.SMPT_SERVICE,
        auth:{
            user: process.env.SMPT_MAIL,
            pass: process.env.SMPT_PASSWORD,
        }
    })
    const mailoptions ={
        from: process.env.SMPT_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
    }
    await transporter.sendMail(mailoptions,(error,info)=>{
        if(error){
            console.log(error)
        }
        else{
        console.log("mail send successfully")
}})
}
module.exports =SendMail