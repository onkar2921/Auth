const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        default:"user"
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    password:{
        type:String,
        trim:true
    }
},{timestamps:true})

const user=mongoose.model("user",UserSchema)

module.exports=user