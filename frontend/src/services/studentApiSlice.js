import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const studentSliceApi = createApi({
    reducerPath:"studentApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:5000/api/students"
    }),
    tagTypes:["Students"],
    endpoints:(builder) => ({

        //get all students
        getAllStudents:builder.query({
            query:() =>({
                url:"/",
                method:"GET"
            }),
            providesTags:["Students"]
        }),

        //add student
        createStudent:builder.mutation({
            query:(data)=>({
                url:"/create",
                method:"POST",
                body:data,
            }),
           invalidatesTags:["Students"]
        })
    })
});

export const {useGetAllStudentsQuery, useCreateStudentMutation} = studentSliceApi;