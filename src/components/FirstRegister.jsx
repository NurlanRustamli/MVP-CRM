import axios from 'axios'
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const FirstRegister = () => {
    const nav = useNavigate()
    const email = useRef("")

    const emailSend = async (e)=>{
      e.preventDefault()
      console.log(email.current.value)
      // if (email.current.value !="") {
      //   try {
        
      //     await axios.post("http://constructionasp-001-site1.ctempurl.com/api/admin/user",{email:email.current.value})
      //   } catch (error) {
      //     console.log(error)
      //   }
      // }

      nav("/email-confirmation")
    

    }
  return (
   <div className="flex h-screen">
    {/* Left side - Gmail login form */}
    <div className=" flex items-center justify-center slide-in-left">
      <form id="loginForm" className="bg-white p-8 rounded-lg shadow-md w-80" onSubmit={emailSend}>
        <div className="flex items-center justify-center mb-6">
          <svg
            className="text-red-500 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={24}
            height={24}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 12l-4-4m0 0l-4 4m4-4v12"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800">Enter Your Email</h2>
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required=""
            ref={email}
          />
        </div>
     
        <button
          id="loginButton"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 hover-scale"
          type="submit"
          
        >
          Send
        </button>
  
      </form>
    </div>
 
  </div>
  )
}

export default FirstRegister