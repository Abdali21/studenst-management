import studentModel from "../models/student.model.js";

//create a student
export const createStudent = async (req, res) => {
  try {
    const student = req.body;
    const newStudent = await studentModel.create(student);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await studentModel.find();
    if (students.length > 0) return res.status(200).json(students);
    return res.status(404).json({ message: "there is no student" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get one student
export const getOnestudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findById(id);
    if (!student) return res.status(404).json({ message: "student not found" });
    return res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete a student
export const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findByIdAndDelete(id);
    if (!student) return res.status(404).json({ message: "student not found" });
    res.status(200).json({ message: "student deleted successfuly" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update  a student
export const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const { fullName, age, gender, departement, email, adress } = req.body;

    //check if student is existing
    const student = await studentModel.findById(id);
    if (!student) return res.status(404).json({ message: "student not found" });

    const updateStudent = await studentModel.findByIdAndUpdate(
      id,
      { fullName, age, gender, departement, email, adress },
      { new: true }
    );
    res.status(200).json(updateStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
