import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './component/Login'
import SignUp from './component/SignUp'
import Dashboard from './component/Dashboard'
import AddTask from './component/AddTask'
import UpdateTask from './component/UpdateTask'

const App = () => {
  return (
    <>
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/addtask" element={<AddTask/>}/>
      <Route path="/update/:id" element={<UpdateTask/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App