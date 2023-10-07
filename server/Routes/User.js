const express=require("express")
const route=express.Router()
const {SigunUpController,signInController,getUserInfoController}=require("../Controller/User")
const {AuthMiddleware}=require("../Middlewares/Auth")


route.post("/api/SignUp",SigunUpController)
route.post("/api/signIn",signInController)
route.post("/api/getUserInfo",AuthMiddleware,getUserInfoController)

module.exports=route