const mongoose=require("mongoose")
require("dotenv").config()
const ConnectDb=async()=>{
    try {
        
        const response=await mongoose.connect(process.env.MONGO_URI)
        if(response){
            console.log("connected to the database")
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports=ConnectDb