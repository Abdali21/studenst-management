import React from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
import { useCreateStudentMutation } from "../services/StudentApiSlice";

const AddStudent = () => {
  //operation
  const [createStudent] = useCreateStudentMutation();

  //handle form
  const { register, handleSubmit, reset } = useForm();

  //navigate 
  const navigate = useNavigate();

  const submitForm = async  (data) => {
     try {
       await createStudent(data).unwrap();
       reset();
       navigate("/")
       console.log("Student created successfully");
     } catch (error) {
      console.error("Error creating student:", error);
     }
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md space-y-4"
    >
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Full Name
        </label>
        <input
          type="text"
          {...register("fullName")}
          placeholder="Enter your full name"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Age</label>
        <input
          {...register("age")}
          type="number"
          placeholder="Enter your age"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Class</label>
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("departement")}
        >
          <option value="">Select your class</option>
          <option value="classA">Class A</option>
          <option value="classB">Class B</option>
          <option value="classC">Class C</option>
        </select>
        <label className="block text-gray-700 font-medium mb-2">Gender</label>
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("gender")}
        >
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Address</label>
        <input
          {...register("adress")}
          type="text"
          placeholder="Enter your address"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddStudent;
