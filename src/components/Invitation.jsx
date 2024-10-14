import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Invitation = () => {
    const [emailList, setEmailList] = useState([""]); // Initial state with one empty input field
    const nav = useNavigate();

    // Function to add a new input field
    const addInput = () => {
        setEmailList([...emailList, ""]); // Add an empty string to create a new input field
    };

    // Function to handle changes in input fields
    const handleInputChange = (index, value) => {
        const updatedEmailList = [...emailList];
        updatedEmailList[index] = value; // Update the input at the specific index
        setEmailList(updatedEmailList);
    };

    // Function to handle form submission
    const inviteUsers = async (e) => {
        e.preventDefault();
        console.log(emailList); // Logs all the email inputs in the array
        const response = await fetch('https://2f2d-62-217-156-173.ngrok-free.app/api/admin/user/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailList), // emails dizisini JSON formatına çeviriyoruz
          });
        
          if (response.ok) {
            alert('Emails sent successfully');
            nav("/dashboard")
          } else {
            const errorMessage = await response.text();
            console.error('Error sending emails:', errorMessage);
          }
       
    };

    return (
        <section id='invitation'>
            <div className="container">
                <div className="row">
                    <div className="left-side-inv col-lg-6 col-xl-6 col-md-6 col-sm-12">
                        <div className="logo"><h1>Lead2B</h1></div>
                        <h2>Who else is on your team?</h2>
                        <form onSubmit={inviteUsers}>
                            <div className="invite-list">
                                <div className="invite-inputs">
                                    {emailList.map((email, index) => (
                                        <div className="relative" key={index}>
                                            <input
                                                type="email"
                                                placeholder="Add email here"
                                                className="input-field w-full px-4 py-1 lg:px-5 lg:py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 text-base lg:text-lg inviteListItem"
                                                value={email} // Bind the input value to the email list
                                                onChange={(e) => handleInputChange(index, e.target.value)} // Handle input change
                                                required
                                            />
                                        </div>
                                    ))}
                                </div>
                                <button type="button" onClick={addInput}>
                                    <span>+</span> Add Another
                                </button>
                            </div>
                            <div className="side-inv">
                                <button type="button" className="skip" onClick={() => nav("/dashboard")}>
                                    Skip
                                </button>
                                <button type="submit" className="invite-btn">
                                    Invite your team
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="right-side-inv">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Invitation;