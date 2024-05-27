import express from "express";
 import router from "./Router/product.js";
 import userRouter from "./Router/user.js";
 import { fileURLToPath } from 'url';
import 'dotenv/config'
import cors from "cors"
import mongoose from 'mongoose'
import path from "path"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database Connected");

}

//  console.log('env',process.env.DB_PASSWORD);

const server=express();
server.use(express.json());
server.use(cors());
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use('/products',router);
// server.use(express.static())
server.use('/users',userRouter);
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'dist','index.html'))
})

// liOkL4MLE6wWc2UX  ===> Admin password


// server.get("/products",getProducts)
// .get("/products/:id",getProduct)
// .post('/products',createProduct)
// .put('/products/:id',updateProduct)
// .patch('/products/:id',updatePatch)
// .delete('/products/:id',deleteProduct);


server.listen(8080,()=>{
    console.log("server started");
})


