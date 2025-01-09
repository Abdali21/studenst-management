import React from 'react'
import GetAllStudents from './components/GetAllStudents'
import {Routes, Route, Link } from "react-router"
import AddStudent from './components/AddStudent'
import Navbar from './components/Navbar'
import StudentDetails from './components/StudentDetails'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
         <Route path="/" element={<GetAllStudents/>}/>
         <Route path="/create" element={<AddStudent/>}/>
         <Route path="/details/:id" element={<StudentDetails/>}/>
     </Routes>
    </div>
  )
}

export default App
