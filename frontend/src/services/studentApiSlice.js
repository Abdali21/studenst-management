import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentSliceApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/students",
  }),
  tagTypes: ["Students"],
  endpoints: (builder) => ({
    //get all students
    getAllStudents: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["Students"],
    }),

    //create student
    createStudent: builder.mutation({
      query: (data) => ({
        url: "/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Students"],
    }),

    //get one student
    getOneStudent: builder.query({
      query: (id) => ({
        url: `/details/${id}`,
        method: "GET",
      }),
    }),

    //delete student
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Students"],
    }),
  }),
});

export const {
  useGetAllStudentsQuery,
  useCreateStudentMutation,
  useGetOneStudentQuery,
  useDeleteStudentMutation,
} = studentSliceApi;
