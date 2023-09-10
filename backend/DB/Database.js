const mongoose=require("mongoose")
const connectdatabase =()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,//use the Mongodb connection string parser
        useUnifiedTopology:true,// use the new server discovery and monitoring engine
    })
    .then((date)=>{
        console.log(`mongodb connected with Server `)
    })
}
module.exports= connectdatabase