import express from "express";
import dotenv from "dotenv";
import { connectionWithDB } from "./config/db.js";

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());

//connection with mongoDB
connectionWithDB();

app.listen(port, ()=>{
    console.log(`server is running in PORT ${port}`);
})

