// data.js (ES module)
import fs from 'fs';
import Product from "../modal/product.js"
import mongoose from 'mongoose';

// Read data from 'data.json'
// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const products = data.products;

// export { products };

//productController.js (ES module)
export const createProduct =(req,res) => {
  const product=new Product(req.body);
  product.save().
    then (savedProduct=>{
    console.log(savedProduct);
    res.status(201).json(savedProduct); })
    .catch(error => {
    res.status(400).json(error);
    console.error('Error saving product:', error);
  })
};

export const getAllProducts = async (req, res) => {
  const products= await Product.find({price:{$gt:2}});
  res.status(201).json(products);
}

export const getProduct = async(req, res) =>{
  const id = req.params.id;
  const product = await Product.findById(id);
  res.json(product);
};

export const replaceProduct = async(req, res) => {
  const id = req.params.id;
  try{
       const update=await Product.findOneAndReplace({_id:id},req.body,{new:true});
       res.status(201).json(update);
  }
  catch(err){
    console.log(err);
         res.status(400).json(err);
  }
};

export const updateProduct = async(req, res) => {
  const id = req.params.id;
  try{
       const update=await Product.findOneAndUpdate({_id:id},req.body,{new:true});
       res.status(201).json(update);
  }
  catch(err){
    console.log(err);
         res.status(400).json(err);
  }
};

export const deleteProduct = async(req, res) => {
  const id = req.params.id;
  try{
       const update=await Product.findOneAndDelete({_id:id},req.body,{new:true});
       res.status(201).json(update);
  }
  catch(err){
    console.log(err);
         res.status(400).json(err);
  }
};