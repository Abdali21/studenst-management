import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const database = process.env.DATABASE

export const connectionWithDB = async() =>{
    try {
        await mongoose.connect(database);
        console.log("connection with mongoDB successfuly");
         
    } catch (error) {
        console.log("failled to connect with mongoDB");
        
    }
}