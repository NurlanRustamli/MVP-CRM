import { useState } from 'react'

import './App.css'
import Register from './pages/Register'
import { Route, Routes } from 'react-router'
import UserLayout from './layout/UserLayout'
import Login from './pages/Login'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route element={<Register />} index />
          <Route element={<Login />} path='login' />
        </Route>
      </Routes>
    </>
  )
}

export default App
