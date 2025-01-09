import React from "react";
import { useParams } from "react-router-dom";
import { useGetOneStudentQuery } from "../services/StudentApiSlice";

const StudentDetails = () => {
  const { id } = useParams();
  const {
    data: student,
    isError,
    isLoading,
    isSuccess,
  } = useGetOneStudentQuery(id);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {isLoading && <h2 className="text-xl font-semibold text-blue-600">Loading...</h2>}
      {isError && <h2 className="text-xl font-semibold text-red-600">Something went wrong!</h2>}
      {isSuccess && student ? (
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Details</h2>
          <ul className="space-y-2">
            <li className="text-gray-700">
              <span className="font-medium text-gray-900">Full Name:</span> {student.fullName}
            </li>
            <li className="text-gray-700">
              <span className="font-medium text-gray-900">Age:</span> {student.age}
            </li>
            <li className="text-gray-700">
              <span className="font-medium text-gray-900">Gender:</span> {student.gender}
            </li>
            <li className="text-gray-700">
              <span className="font-medium text-gray-900">Class:</span> {student.departement}
            </li>
            <li className="text-gray-700">
              <span className="font-medium text-gray-900">Email:</span> {student.email}
            </li>
            <li className="text-gray-700">
              <span className="font-medium text-gray-900">Address:</span> {student.adress}
            </li>
          </ul>
        </div>
      ) : (
        <p className="text-gray-700 mt-4">Student not found</p>
      )}
    </div>
  );
};

export default StudentDetails;
