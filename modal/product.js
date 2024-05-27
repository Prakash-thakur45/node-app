import mongoose from 'mongoose'
import {Schema} from 'mongoose';


const productSchema=new Schema({
    title:{type:String,required:[true,'title required']},
    description:String,
    price:{type:Number,required:[true,'why no price ?'],min:[1,'type valid price'],max:[100,'price out of the range']},
    discountPercentage:Number,
    ratings:{type:Number,required:[true,'why no ratings ?'],default:0},
    stock:Number,
    brand:{type:String,required:[true,'brand required']},
    category:String,
    thumbnail: String,
    images: [String]
 });

 const Product = mongoose.model('Product',productSchema);
 export default Product; 
