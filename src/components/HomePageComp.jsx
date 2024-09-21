import React from 'react'
import { useNavigate } from 'react-router'

const HomePageComp = () => {
    const nav = useNavigate()
  return (
    <>
    <div className="container" >
        <div className="row align-items-center justify-content-center">
            <h1 style={{
                fontSize:"30px",
                fontWeight:"500",marginBlock:"20px"
            }}>Hello,Lead2B</h1>
            <p style={{
               marginBlock:"20px"
            }}>Streamline workflows and gain clear visibility across teams</p>
        </div>
        <div className="row align-items-center justify-content-center">
        <button
          id="loginButton"
          className="w-1/4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 hover-scale"
          type="submit"
          style={{
            marginBlock:"20px"
         }}
         onClick={()=>nav("/register")}
        >
          Register
        </button>
        </div>
    </div>
    </>
  )
}

export default HomePageComp