const express =require("express");
const User = require("./routes/Users");
const  connectodb  = require("./DB/dbconnection");
const bodyParser = require("body-parser");
const {config}= require('dotenv')

config({
    path:"./config.env"
})


const app =express();
app.use(bodyParser.json())
app.use("/user",User);

  // DataBase Connecting function 
  connectodb();


app.get('/',async(req,res)=>{
    res.send("Working Goodly");
})


app.listen(process.env.PORT,()=>{
  
    console.log("Server Start");
}) 