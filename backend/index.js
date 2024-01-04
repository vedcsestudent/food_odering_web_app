const express=require("express")
const cors=require("cors")
const dotenv= require("dotenv").config()
const mongoose=require("mongoose");
const authController = require("./controller/authController");
const productController=require("./controller/productController");
const uploadController = require("./controller/uploadController");
const app=express();
 
//connect to db 
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Db connection successful")).catch((err)=>{console.log(err +"error occur at the time of db connection")})

//middleware and routes
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/images",express.static("public/images"))
app.use("/auth",authController)
app.use("/product",productController)
app.use("/upload",uploadController)



//start our server
app.listen(process.env.PORT, ()=>
{
    console.log("Server is started successfully")
    
})  
