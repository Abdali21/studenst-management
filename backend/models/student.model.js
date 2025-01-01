import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    departement: {
      type: String,
      enum: ["class A", "class B", "class C"],
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const studentModel = mongoose.model("student", studentSchema);

export default studentModel;
