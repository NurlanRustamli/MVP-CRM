import React, { useState } from "react";
import { useNavigate } from "react-router";
import Logo from "./Logo";
import { Link } from "react-router-dom";

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
    const response = await fetch(
      "https://2f2d-62-217-156-173.ngrok-free.app/api/admin/user/emails",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailList), // emails dizisini JSON formatına çeviriyoruz
      }
    );

    if (response.ok) {
      alert("Emails sent successfully");
      nav("/dashboard");
    } else {
      const errorMessage = await response.text();
      console.error("Error sending emails:", errorMessage);
    }
  };

  return (
    <section id="invitation">
      <div className="container ">
        <div className="row">
          <div className="left-side-inv col-lg-6 col-xl-6 col-md-6 col-sm-12">
            <div className="flex items-center ">
              <div className="">
                <Link to="HomePageComp">
                  <Logo />
                </Link>
              </div>
              <div className="logo">
                <h1 className=" ml-[13px] text-[#031225] text-3xl">Lead2B</h1>
              </div>
            </div>
            <div className="mr-[60px] mt-[110px] ">
              <h2 className="text-[#000000] ">Who else is on your team?</h2>
              <form onSubmit={inviteUsers}>
                <div className="invite-list">
                  <div className="invite-inputs">
                    {emailList.map((email, index) => (
                      <div className="relative mt-[16px]" key={index}>
                        <input
                          type="email"
                          placeholder="Add email here"
                          className="input-field w-full px-4 py-2 lg:px-5 lg:py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out hover:border-blue-600 hover:bg-blue-50 hover:scale-x-105  "
                          value={email} // Bind the input value to the email list
                          onChange={(e) =>
                            handleInputChange(index, e.target.value)
                          } // Handle input change
                          required
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="flex items-center transition duration-300 ease-in-out transform hover:scale-105"
                    type="button"
                    onClick={addInput}
                  >
                    <span className="text-[#031225] text-[39px]  mr-3">+</span>
                    <span className="text-[#031225] text-[16px] ">
                      Add another
                    </span>
                  </button>
                </div>
                <div className="side-inv">
                  <button
                    type="button"
                    className="skip p-[10px_12px_10px_12px] text-[#031225] font-semibold mr-[60px]"
                    onClick={() => nav("/dashboard")}
                  >
                    Remind me later
                  </button>
                  <button
                    type="submit"
                    className="bg-[#1971F6] w-[220px] h-[44px] border rounded-[4px] text-[#FFFFFF] 
  transition-transform duration-300 ease-in-out hover:bg-[#145BC1]  "
                  >
                    Invite your team
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="right-side-inv col-lg-6 col-xl-6 col-md-6 col-sm-12">
            {" "}
            {/* Added column classes for consistency */}
            <div className="flex flex-col items-center justify-center p-6 bg-[#F9FAFB] lg:rounded-[40px] my-6 h-full">
              {" "}
              {/* Use h-full if you want it to fill the parent */}
              <div className="text-center">
                <img
                  src="./src/assets/img/sidepic.svg"
                  alt="Side illustration"
                  className="max-w-full h-auto animate-slideInDown transition duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
