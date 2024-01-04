const authController=require("express").Router()
const User=require("../models/User")
const bcrypt= require("bcrypt")
const jwt= require("jsonwebtoken")

//register

authController.post("/register", async(req, res)=>
{
    try
    {
        console.log(req.body);
        const isExisting=await User.findOne({email:req.body.email})
        if(isExisting)
        {
            throw new Error("Already such an account with  this email exist")

        }
        const hashPassword=  await bcrypt.hash(req.body.password, 10);
        
        const newUser= await User.create({...req.body, password:hashPassword})
        
        const {password, ...others}= newUser._doc

        const token= jwt.sign({id:newUser._id,isAdmin:newUser.isAdmin},process.env.JWT_Secret,{expiresIn:"5h"})
        
        return res.status(201).json({others,token})
    }
    catch(error)
    {
        return res.status(500).json(error.message)
    }
})

//login
authController.post("/login",async(req,res)=>
{
    try
    {
        const user=  await User.findOne({email:req.body.email})
        if(!user)
        {
            throw new Error("Users Credentials are wrong")
        }

        const comparePass= await bcrypt.compare(req.body.password,user.password)
        if(!comparePass)
        {
            throw new Error("Users Credentials are wrong");
        }
        const {password,...others}=user._doc
        const token= jwt.sign({id:user._id, isAdmin:user.isAdmin},process.env.JWT_Secret, {expiresIn:"5h"})

        return res.status(200).json({others, token})

    }
    catch(error)
    {
        return res.status(500).json( "error during login "+ error.message)
    }
})

module.exports=authController;