import { useState } from 'react'

import './App.css'
import Register from './pages/Register'
import { Route, Routes } from 'react-router'
import UserLayout from './layout/UserLayout'
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import RegisterDetail from './pages/RegisterDetail'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<UserLayout />}>
        <Route element={<HomePage/>} index/>
          <Route element={<Register />} path='register' />
          <Route element={<RegisterDetail/>} path='email-confirmation'/>
          <Route element={<Login />} path='login' />
        </Route>
      </Routes>
    </>
  )
}

export default App
