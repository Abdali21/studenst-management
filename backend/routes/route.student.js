import express from "express";
import { createStudent, deleteStudent, getAllStudents, getOnestudent, updateStudent } from "../controllers/student.controller.js";

const studentRouter = express.Router();

studentRouter
.get("/", getAllStudents)
.post("/create", createStudent)
.get("/details/:id", getOnestudent)
.delete("/delete/:id", deleteStudent)
.put("/update/:id", updateStudent)
export default studentRouter