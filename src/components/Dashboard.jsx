import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const nav = useNavigate()
  const logOut = ()=>{
nav("/login")
  }
  return (
    <section id='dashboard'>
        <Link to={"/invitation"}>Invite People</Link>
        <form onSubmit={logOut}>
          <button>Log Out</button>
        </form>
    </section>
  )
}

export default Dashboard