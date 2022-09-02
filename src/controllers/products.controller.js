import Product from "../models/Product";

export const createProducts = async(req,res)=>{
    const {name, price, category, img} = req.body
    const newProduct = new Product({name,category,price,img})
    const productSaved = await newProduct.save();
    res.status(201).json(productSaved)
}

export const getProducts = async (req,res)=>{
    const products = await Product.find();
    res.json(products)
}

export const getProductByID = async (req,res)=>{
    const {productID} = req.params
    const product = await Product.findById(productID)
    res.status(200).json(product)
}
export const updateProductByID = async (req,res)=>{
    const {productID} = req.params
    const productUpdated = await Product.findByIdAndUpdate(productID, req.body,{
        new:true
    })
    res.status(200).json(productUpdated)
    
}

export const deleteProductByID = async (req,res)=>{
    const {productID}= req.params
    await Product.findByIdAndDelete(productID)
    res.status(200).send("The product was removed")
}