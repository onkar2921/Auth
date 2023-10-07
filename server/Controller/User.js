const user=require("../Models/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const SigunUpController=async(req,res)=>{

    const {name,email,password}=req.body

    const HashPwd=bcrypt.hashSync(password,12)

    try {
        const DBdata=await user.create({name,email,password:HashPwd})

        if(DBdata){
            return res.status(200).json({message:"signUp sucessfully",DBdata})
        }
        return res.status(403).json({message:"unable to signUp"})

    } catch (error) {
        console.log(error)
    }
}


const signInController=async(req,res)=>{
    const {email,password}=req.body

    try {

        const existUser=await user.findOne({email})
        if(existUser){
            const ValidPwd=bcrypt.compareSync(password,existUser.password)

            if(ValidPwd){
                let token=jwt.sign(existUser.email,process.env.SECREATE)

                return res.status(200).json({message:"signIn sucessfully",existUser,token})
            }else{
                return res.status(401).json({message:"Unauth user"})
            }
        }

        return res.status(401).json({message:"Unauth user"})
        
    } catch (error) {
        console.log(error)
    }
}


const getUserInfoController=async(req,res)=>{
    const {userId}=req.body
    try {

        const existUser=await user.findById(userId,{
            password:0
        })
        if(existUser){
            return res.status(200).json({message:"getting user data",existUser})
        }
        return res.status(500).json({message:"unable to get user data"})
        
    } catch (error) {
        console.log(error)
    }
}


module.exports={SigunUpController,signInController,getUserInfoController}