import React from 'react'
import { useGetAllStudentsQuery } from '../services/StudentApiSlice'

const GetAllStudents = () => {
    const {data:students, isLoading, isError} = useGetAllStudentsQuery();
  return (
    <div>
       <div>number of students: {students &&  students.length}</div>
       <hr />
        {isLoading && <div>loading....</div>}
        {isError && <div>error</div>}
        <div>
            {students?.map((student)=>(
                <ul key={student._id}>
                    <li>name:{student.fullName}</li>
                    <li>age:{student.age}</li>
                    <li>gender:{student.gender}</li>
                    <li>class:{student.class}</li>
                    <li>email:{student.email}</li>
                    <li>adress:{student.adress}</li>
                    <br />
                    <hr />
                </ul>
            ))}
        </div>
    </div>
  )
}

export default GetAllStudents
