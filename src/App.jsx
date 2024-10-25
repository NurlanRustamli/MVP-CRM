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
import Invitation from './components/Invitation'
import Dashboard from './components/Dashboard'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route element={<HomePage />} index />
          <Route element={<Register />} path='register' />
          <Route element={<Login />} path='login' />
          <Route element={<RegisterDetail />} path='email-confirmation/detail' />
          <Route element={<RegisterPassword />} path='email-confirmation' />
          <Route element={<ForgotPassPage />} path='forgot-password' />

            <Route element={<ResetPassPage />} path='reset-password' />
          <Route element={<Invitation/>} path='invitation'/>
          <Route element={<Dashboard/>} path='dashboard'/>
        </Route>
      </Routes>
    </>
  )
}

export default App
