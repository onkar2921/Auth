const express=require("express")
const app=express()
const cors=require("cors")
require("dotenv").config()

app.use(express.json())
app.use(cors())

const port=process.env.PORT || 8080
const ConnectDb=require("./Connections/DB")
ConnectDb()


const UserRoutes=require("./Routes/User")

app.use(UserRoutes)


app.listen(port,()=>{
    console.log(`listening on the port ${port}`)
})