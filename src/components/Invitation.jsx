import React from 'react'
import { useNavigate } from 'react-router'

const Invitation = () => {
    const nav = useNavigate()

    const inviteUsers = ()=>{

    }

    const addInput = ()=>{
        const relativeDiv = document.createElement("div")
        relativeDiv.className="relative"
        const input = document.createElement("input")
        input.className ="input-field w-full px-4 py-1 lg:px-5 lg:py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 text-base lg:text-lg"
        input.placeholder= "Add email here"
        relativeDiv.append(input)
        const inviteInputs = document.querySelector(".invite-inputs")
        inviteInputs.append(relativeDiv)
    }
    return (
        <section id='invitation'>
            <div className="container">
                <div className="row">
                    <div className="left-side-inv col-lg-6 col-xl-6 col-md-6 col-sm-12">
                        <div className="logo"><h1>Lead2B</h1></div>
                        <h2>Who else is on your team?</h2>
                        <div className="invite-list">
                            <div className="invite-inputs">
                                <div className="relative" >
                                    <input
                                        type="email"
                                        placeholder="Add email here "
                                        className="input-field w-full px-4 py-1 lg:px-5 lg:py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 text-base lg:text-lg"
                                        required
                                    />
                                </div>
                            </div>
                            <button onClick={addInput}><span>+</span> Add Another</button>
                        </div>
                        <div className="side-inv">
                            <button className="skip" onClick={()=>nav("/dashboard")}>
                                Skip
                            </button>
                            <button className="invite-btn" onClick={inviteUsers}>
                                Invite your team
                            </button>
                        </div>
                    </div>
                    <div className="right-side-inv">
                        <img src="" alt="" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Invitation