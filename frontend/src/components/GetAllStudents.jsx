import React from "react";
import { useGetAllStudentsQuery } from "../services/StudentApiSlice";

const GetAllStudents = () => {
  const {
    data: students,
    isLoading,
    isError,
    isSuccess,
  } = useGetAllStudentsQuery();

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="text-lg font-bold mb-4">
          Number of Students: <span className="px-3 py-1 bg-blue-600 text-white rounded-full"> {students && students.length}</span>
        </div>
        <div>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-md text-white">
            Add a new student
          </button>
        </div>
      </div>

      <hr className="my-4" />
      {/* Loading state */}
      {isLoading && <div className="text-blue-500 font-medium">Loading...</div>}

      {/* Error state */}
      {isError && (
        <div className="text-red-500 font-medium">Error fetching data</div>
      )}

      {/* Success state with table */}
      {isSuccess && students && (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Full Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Age
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Gender
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student._id} className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {student.fullName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {student.age}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {student.gender}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 flex items-center justify-center space-x-3">
                    <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 ">
                      Delete
                    </button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 ">
                      Update
                    </button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GetAllStudents;
