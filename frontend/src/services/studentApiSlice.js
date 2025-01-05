import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { build } from "vite"
export const studentApiSlice = createApi({
   reducerPath:"studentApi",
   baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5000/api/students"}),
   tagTypes:["Students"],
   endpoints:(builder)=>({
    
    //getAll students
    getAllStudents:builder.query({
      query:()=>({
         url:"/",
         method:"GET",
      }),
      providesTags:["Students"]
    })
    
   })
});

export const {useGetAllStudentsQuery} = studentApiSlice;