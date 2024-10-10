import React, { useEffect, useRef, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { changePass } from '../redux/passSlice'
import { changeToken } from '../redux/counterSlice'

const SecondRegister = () => {
    const [eye, setEye] = useState(false)
    const [eye1, setEye1] = useState(false)



    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    // Create a new URLSearchParams instance to parse the query string
    const queryParams = new URLSearchParams(location.search);
  
    // Extract the 'token' parameter
    const token = queryParams.get('token');
    // Select password from the Redux store state
console.log(token)
    const pass1 = useRef();
    const pass2 = useRef();
    const checkPassword = (e) => {
        e.preventDefault();
        
        const pass1Value = pass1.current.value;
        const pass2Value = pass2.current.value;
        
        if (pass1Value === pass2Value) {
            // Dispatch the action with the password value
            dispatch(changePass(pass1Value));
            dispatch(changeToken(token))
            
            navigate('/email-confirmation/detail'); // Assuming you have set up this route
            
        } else {
            alert('You wrote different passwords in both fields');
        }
    };

    
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
                                ref={pass1}
                            />
                            <div onClick={() => setEye(!eye)} style={{ position: "absolute", top: "25%", right: "5%", fontSize: "22px" }}>

                                {eye ? <FaEye /> : <FaEyeSlash />}
                            </div>
                        </div>


                        <div className="mb-6" style={{ position: "relative" }} >
                            <input
                                type={eye1 ? "text" : "password"}
                                id="password2"
                                placeholder="Repeat your password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                ref={pass2}

                            />
                            <div onClick={() => setEye1(!eye1)} style={{ position: "absolute", top: "25%", right: "5%", fontSize: "22px" }}>

                                {eye1 ? <FaEye /> : <FaEyeSlash />}
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