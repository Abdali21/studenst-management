import React from "react";
import {
  useGetOneStudentQuery,
  useUpdateStudentMutation,
} from "../services/StudentApiSlice";
import { useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";

const UpdateStudent = () => {

  //operation
  const { id } = useParams();
  const { data: student} = useGetOneStudentQuery(id);
  const [updateStudent] = useUpdateStudentMutation();
  const { register, handleSubmit, reset } = useForm();

  //navigate
  const navigate = useNavigate();

  //handle form
  const updateForm = async (student) => {
    try {
      await updateStudent({ id, ...student }).unwrap();
      reset();
      navigate("/");
      alert("student was updated  succefully");
    } catch (error) {
      alert("some thing is wrong", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(updateForm)}
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md space-y-4"
    >
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Full Name
        </label>
        <input
          defaultValue={student?.fullName || ""}
          type="text"
          {...register("fullName")}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Age</label>
        <input
          type="number"
          {...register("age")}
          defaultValue={student?.age || ""}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Class</label>
        <select
          {...register("departement")}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select your class</option>
          <option value="classA">Class A</option>
          <option value="classB">Class B</option>
          <option value="classC">Class C</option>
        </select>
        <label className="block text-gray-700 font-medium mb-2">Gender</label>
        <select
          {...register("gender")}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          {...register("email")}
          defaultValue={student?.email || ""}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Address</label>
        <input
          type="text"
          {...register("adress")}
          defaultValue={student?.adress || ""}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default UpdateStudent;
