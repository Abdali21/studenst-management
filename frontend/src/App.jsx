import React from 'react'
import GetAllStudents from './components/GetAllStudents'
import {Routes, Route } from "react-router"

const App = () => {
  return (
     <Routes>
         <Route path="/" element={<GetAllStudents/>}/>
     </Routes>
  )
}

export default App
