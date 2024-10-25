import React from "react"
import { useNavigate } from "react-router"
import Logo from "./Logo"
import 'typeface-poppins'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <HomePageComp />
    </div>
  )
}

export default function HomePageComp() {
  const nav = useNavigate()


  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white font-['Poppins',sans-serif]">
    <div className="flex-1 p-4 sm:p-6 flex flex-col justify-center items-center space-y-4">
    <a href="#">
              <Logo />
            </a>

  <h1 className="text-2xl sm:text-3xl font-light text-center text-black hover:text-[#1971F6] transition duration-300 ease-in-out transform hover:scale-110">
    Welcome to <span className="font-semibold">Lead2B</span>!
  </h1>
  <p className="mt-4 text-[#031225] leading-relaxed text-base sm:text-lg font-normal text-center max-w-md">
    Streamline workflows and gain clear visibility across teams.
  </p>
  
  <div className="flex items-center justify-center gap-2 mt-5 w-full max-w-sm">
    <hr className="flex-grow h-px bg-[#D2D2D5] transition duration-300 transform hover:scale-x-110" />
    <span className="text-[#031225] px-2">or</span>
    <hr className="flex-grow h-px bg-[#D2D2D5] transition duration-300 transform hover:scale-x-110" />
  </div>

  {/* Input */}
  <div className="w-full max-w-sm">
    <input
      className="border-[#D2D2D5] w-full h-11 mt-6 rounded-md border px-4 focus:outline-none focus:ring-4 focus:ring-[#1971F6] transition-all duration-300 ease-in-out hover:border-[#1971F6] hover:bg-[#F0F4FF] transform hover:scale-105"
      type="email"
      placeholder="name@example.com"
    />
  </div>

  {/* Continue */}
  <div className="w-full max-w-sm">
    <button className="mt-5 bg-[#1971F6] w-full h-11 rounded-md text-white border px-4 hover:bg-gradient-to-r from-[#1971F6] to-[#00C6FF] hover:shadow-lg transition-transform duration-300 transform hover:scale-105 hover:rotate-7">
      Continue
    </button>
  </div>

  <div className="flex items-center justify-center gap-2 mt-5">
    <p className="text-base sm:text-lg text-center text-[#031225] leading-relaxed font-normal">
      Already have an account?
    </p>
    <a href="#" className="text-[#1971F6] hover:underline hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105 hover:rotate-1">
      Log in
    </a>
  </div>

  <p className="text-[#686868] text-sm text-center max-w-sm">
    By signing up, you agree to our
    <a
      className="text-[#031225] underline hover:text-blue-600 mx-1 transition duration-300 ease-in-out transform hover:scale-105 hover:rotate-1"
      href="#"
    >
      Terms
    </a>
    &
    <a
      className="text-[#031225] underline hover:text-blue-600 mx-1 transition duration-300 ease-in-out transform hover:scale-105 hover:rotate-1"
      href="#"
    >
      Privacy
    </a>
    .
  </p>
</div>.




<div className="flex-1 p-6 items-center justify-center bg-[#F9FAFB] rounded-[40px]  sm:rounded-[40px]  flex my-6 ">
        <div className="text-center ">
          <img src="./src/assets/img/sidepic.svg" alt="Side illustration" className="max-w-full h-auto animate-slideInDown transition duration-300 ease-in-out transform hover:scale-105" />
        </div>
        </div>

    </div>
  )
}