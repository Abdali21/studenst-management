import express from "express";
import dotenv from "dotenv";
import { connectionWithDB } from "./config/db.js";
import cors from "cors"
import studentRouter from "./routes/route.student.js";

//port
dotenv.config();
const port = process.env.PORT;

//middelware
const app = express();
app.use(express.json());
app.use(cors())

// student route
app.use("/api/students", studentRouter)

//connection with mongoDB
connectionWithDB();

app.listen(port, ()=>{
    console.log(`server is running in PORT ${port}`);
})

