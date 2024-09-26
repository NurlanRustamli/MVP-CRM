import { useState } from 'react'

import './App.css'
import Register from './pages/Register'
import { Route, Routes } from 'react-router'
import UserLayout from './layout/UserLayout'
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import RegisterDetail from './pages/RegisterDetail'
import RegisterPassword from './pages/RegisterPassword'
import ResetPassPage from './pages/ResetPassEmailPage'
import ForgotPassPage from './pages/ForgotPassPage'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route element={<HomePage />} index />
          <Route element={<Register />} path='register' />
          <Route element={<Login />} path='login' />
          <Route element={<RegisterDetail />} path='email-confirmation/detail' />
          <Route element={<RegisterPassword />} path='email-confirmation/' />
          <Route element={<ResetPassPage />} path='forgot-password/' >
          </Route>
            <Route element={<ForgotPassPage />} path='new-password' />
        </Route>
      </Routes>
    </>
  )
}

export default App
