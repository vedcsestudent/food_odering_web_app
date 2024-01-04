const productController=require("express").Router()
const Product= require("../models/Product")
const verifymiddleware= require("../middleware/verifyToken");

//get all
productController.get("/", verifymiddleware.verifyToken, async(req,res)=>
{
    try
    {
        const products= await Product.find(req.query)
        return res.status(200).json(products);
        console.log(products)
        console.log(req.query)
    }
    catch( error)
    {
        console.log(error +"error occured in the product controller get all prodduct path")
    }
})
//create product

productController.post("/",verifymiddleware.verifyTokenAdmin,async(req,res)=>
{
    try
    {
        const newProduct= await Product.create({...req.body})
        return res.status(201).json(newProduct);
    }
    catch(error)
    {
        console.log(error+"  error occured during the insertion of the product");
    }
})

//get one

productController.get("/find/:id",verifymiddleware.verifyToken, async(req, res)=>
{
    try
    {
        const productId=req.params.id;
        const product=await Product.findById(productId)
        if(!product)
        {
            return res.status(505).json({msg:"No product with such id"})
        }
       return res.status(200).json(product)
    }
    catch( error)
    {
        console.log(error+"Error occured in get single product ");
    }
})





module.exports=productController

