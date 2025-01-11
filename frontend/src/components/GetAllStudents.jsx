import React, { useState } from "react";
import { useDeleteStudentMutation, useGetAllStudentsQuery } from "../services/StudentApiSlice";
import { Link } from "react-router-dom";

const GetAllStudents = () => {
  const { data: students, isLoading, isError, isSuccess } = useGetAllStudentsQuery();
  const [deleteStudent] = useDeleteStudentMutation();
  
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered students based on search query
  const filteredStudents = students?.filter((student) =>
    student.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id).unwrap();
      console.log("Student deleted successfully");
    } catch (error) {
      console.error("Failed to delete student:", error);
    }
  };

  const buttonClass = "px-4 py-2 rounded text-white";

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-bold">
          Number of Students:{" "}
          <span className="px-3 py-1 bg-blue-600 text-white rounded-full">
            {filteredStudents ? filteredStudents.length : 0}
          </span>
        </div>
        <Link to="/create">
          <button className={`${buttonClass} bg-blue-500 hover:bg-blue-700`}>
            Add a new student
          </button>
        </Link>
      </div>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <hr className="my-4" />

      {/* Loading state */}
      {isLoading && <div className="text-blue-500 font-medium">Loading...</div>}

      {/* Error state */}
      {isError && (
        <div className="text-red-500 font-medium">Error fetching data</div>
      )}

      {/* No Students Found */}
      {isSuccess && filteredStudents?.length === 0 && (
        <div className="text-gray-500">No students found matching your search.</div>
      )}

      {/* Success state with table */}
      {isSuccess && filteredStudents?.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-center">Full Name</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Age</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Gender</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student._id} className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 text-center">{student.fullName}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{student.age}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{student.gender}</td>
                  <td className="border border-gray-300 px-4 py-2 flex items-center justify-center space-x-3">
                    <button
                      onClick={() => handleDelete(student._id)}
                      className={`${buttonClass} bg-red-500 hover:bg-red-700`}
                    >
                      Delete
                    </button>
                    <Link to={`/update/${student._id}`}>
                      <button className={`${buttonClass} bg-green-600 hover:bg-green-700`}>
                        Update
                      </button>
                    </Link>
                    <Link to={`/details/${student._id}`}>
                      <button className={`${buttonClass} bg-blue-500 hover:bg-blue-700`}>
                        Details
                      </button>
                    </Link>
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
