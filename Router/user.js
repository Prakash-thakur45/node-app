import express from "express";
import {getAllUsers,getUser,createUser,updateUser,replaceUser,deleteUser} from "../controller/userController.js";
const userRouter=express.Router();


userRouter
.get("/",getAllUsers)
.get("/:id",getUser)
.post('/',createUser)
.put('/:id',updateUser)
.patch('/:id',replaceUser)
.delete('/:id',deleteUser);

export default userRouter;