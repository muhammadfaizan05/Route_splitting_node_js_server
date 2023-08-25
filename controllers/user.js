const UserSchema= require("../models/user");


// get all users 
const allusers = async (req,res)=>{
    console.log(req.query);
    let users=await UserSchema.find({});
    res.json({
        success:"true",
        users
    })
}
exports.allusers=allusers;

// register new user 
const register = async(req,res)=>{
    const {name,email,password}=req.body;
     await UserSchema.create({
        name,email,password
     });
     res.cookie("abc_cookie","cookieforpostman",{maxAge:2000})
     res.json({
         success:"true User Registered",
     })
 }
 exports.register=register;

// find specific user through id in parameter 
 const finduser = async(req,res)=>{
    const {id}=req.params;
    console.log(id);
    const user=await UserSchema.findById(id);
    res.json({success:true,
        user,
    })  }
    exports.finduser=finduser;