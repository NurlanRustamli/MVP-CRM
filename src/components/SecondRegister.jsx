import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const SecondRegister = () => {
    const [eye, setEye] = useState(false)

    const checkPassword = (e) => {
        e.preventDefault()
        const pass1 = document.querySelector("#password")
        const pass2 = document.querySelector("#password2")
        if (pass1.innerHTML === pass2.innerHTML) {
            nav("/email-confirmation/detail")

        } else {
            alert("You wrote different passwords in both fields")
        }
    }

    const nav = useNavigate()
    return (
        <>
            <div className="flex h-screen">
                {/* Left side - Gmail login form */}
                <div className=" flex items-center justify-center slide-in-left">
                    <form id="loginForm" className="bg-white p-8 rounded-lg shadow-md w-80" onSubmit={checkPassword}>
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
                            <h2 className="text-2xl font-bold text-gray-800">Enter Your Password</h2>
                        </div>
                        <div className="mb-4 " style={{ position: "relative" }}>
                            <input
                                type={eye ? "text" : "password"}
                                id="password"
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <div onClick={() => setEye(!eye)} style={{ position: "absolute", top: "25%", right: "5%", fontSize: "22px" }}>

                                {eye ? <FaEye /> : <FaEyeSlash />}
                            </div>
                        </div>
                        <div className="mb-6" style={{ position: "relative" }} >
                            <input
                                type={eye ? "text" : "password"}
                                id="password2"
                                placeholder="Repeat your password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required

                            />
                            <div onClick={() => setEye(!eye)} style={{ position: "absolute", top: "25%", right: "5%", fontSize: "22px" }}>

                                {eye ? <FaEye /> : <FaEyeSlash />}
                            </div>



                        </div>
                        <button
                            id="loginButton"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 hover-scale"
                            type="submit"

                        >
                            Next
                        </button>
                        <Link to={"/login"}>Login</Link>
                    </form>
                </div>

            </div>
        </>
    )
}

export default SecondRegister