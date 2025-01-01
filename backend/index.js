import express from "express";
import dotenv from "dotenv";
import { connectionWithDB } from "./config/db.js";
import studentRouter from "./routes/route.student.js";

//port
dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());

// student route
app.use("/api/students", studentRouter)

//connection with mongoDB
connectionWithDB();

app.listen(port, ()=>{
    console.log(`server is running in PORT ${port}`);
})

