import React from 'react'
import GetAllStudents from './components/GetAllStudents'
import {Routes, Route, Link } from "react-router"
import AddStudent from './components/AddStudent'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
         <Route path="/" element={<GetAllStudents/>}/>
         <Route path="/create" element={<AddStudent/>}/>
     </Routes>
    </div>
  )
}

export default App
