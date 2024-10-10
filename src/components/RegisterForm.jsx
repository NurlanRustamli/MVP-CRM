import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { usersApi } from '../services/base'
import { useSelector } from 'react-redux'

const RegisterForm = () => {
  
    const name = useRef(null)
    const surname = useRef(null)
 
   
 
    const companyName = useRef(null)
    const phoneNumer = useRef(null)

    const companyDomain = useRef(null)

    const password = useSelector((state) => state.pass.password);
    const token = useSelector((state)=>state.counter.token)
    console.log(password) // Make sure 'pass' matches the key in your store configuration
    console.log(token) // Make sure 'pass' matches the key in your store configuration


    const nav = useNavigate()
    const registerUser = async (e) => {
        e.preventDefault()
        const userData1 = {
            email: 'user@example.com',
            password: password,
            name: name.current.value,
            ImageURL:"",
            surname: surname.current.value,
            phone: phoneNumer.current.value,
            companyDomain: companyDomain.current.value,
            companyName: companyName.current.value
        };

        try {
            const response = await fetch('https://f70c-62-217-158-38.ngrok-free.app/api/admin/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData1),
            });

            if (response.ok) {
                const data = await response.text();
                console.log('Kayıt başarılı:', data);
            } else {
                const errorData = await response.json();
                console.error('Kayıt sırasında bir hata oluştu:', errorData);
            }
        } catch (error) {
            console.error('Bağlantı hatası:', error);
        }
    

    // Örnek kullanıcı verisi


    // const formData = new FormData();
    // formData.append("file", file)
    // formData.append("upload_preset", "x5obdcrh")
    // axios.post(`https://api.cloudinary.com/v1_1/dcmgray9m/upload`, formData
    // ).then(res => {

    //     usersApi.registerUser(
    //         {
    //             name: name.current.value,
    //             surname: surname.current.value,
    //             email: email.current.value,
    //             password: password.current.value,
    //             company_name: companyName.current.value,
    //             company_domain: companyDomain.current.value,
    //             team_size: teamSize.current.value ? teamSize.current.value : "Only Me",
    //             PhoneNumber: phoneNumer.current.value,
    //             role: role.current.value ? role.current.value : "User",
    //             avatar: res.data.url
    //         }
    //     ).then(res => {
    //         if (res.status === 201) {
    //             alert("Registration successfully completed")
    //             name.current.value = ""
    //             companyDomain.current.value = ""
    //             companyName.current.value = ""
    //             email.current.value = ""
    //             surname.current.value = ""
    //             role.current.value = "User"
    //             teamSize.current.value = "Only Me"
    //             phoneNumer.current.value = ""
    //             name.current.value = ""
    //             setFile(null)
    //             nav("/login")
    //         } else {
    //             alert(res.statusText)
    //         }
    //     })

    // })
}


return (
    <>
        <div className="px-3 py-5 w-full">
            <div className="max-w-[400px] w-full border rounded-lg">
                <h3 className="font-medium text-center border-b py-4 text-[#0D0D0D] text-[20px]">
                    User Register Form
                </h3>
                <form id="form" className="p-4 flex flex-col gap-[16px]" onSubmit={registerUser}>
                    <div className="flex flex-col">
                        <label className="mb-2 font-medium" htmlFor="name">
                            Name
                        </label>
                        <input
                            data-min={5}
                            data-required="true"
                            data-message="The name cannot be left blank!"
                            name="name"
                            className="border rounded-lg h-[40px] outline-none px-2"
                            id="name"
                            type="text"
                            ref={name}
                            required

                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-2 font-medium" htmlFor="surname">
                            Surname
                        </label>
                        <input
                            data-min={5}
                            data-required="true"
                            data-message="The surname cannot be left blank!"
                            name="surname"
                            className="border rounded-lg h-[40px] outline-none px-2"
                            id="surname"
                            type="text"
                            ref={surname}
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-2 font-medium" htmlFor="companyName">
                            Company Name
                        </label>
                        <input
                            data-min={5}
                            data-required="true"
                            data-message="The companyName cannot be left blank!"
                            name="companyName"
                            className="border rounded-lg h-[40px] outline-none px-2"
                            id="companyName"
                            type="text"
                            ref={companyName}
                            required

                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-2 font-medium" htmlFor="companyDomain">
                            Company Domain
                        </label>
                        <input
                            data-min={5}
                            data-required="true"
                            data-message="The company domain cannot be left blank!"
                            name="companyDomain"
                            className="border rounded-lg h-[40px] outline-none px-2"
                            id="companyDomain"
                            type="text"
                            ref={companyDomain}
                            required

                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-2 font-medium" htmlFor="phone">
                            Phone
                        </label>
                        <input
                            data-phone="true"
                            data-required="true"
                            data-message="The phone cannot be left blank!"
                            name="phone"
                            className="border rounded-lg h-[40px] outline-none px-2"
                            id="phone"
                            type="text"
                            ref={phoneNumer}
                            required

                        />
                    </div>
                    {/* <div className="flex flex-col">
                            <label className="mb-2 font-medium" htmlFor="teamSize">
                                Team Size
                            </label>

                            <select name="teamSize" id="teamSize" data-phone="true"
                                ref={teamSize}

                                data-required="true"
                                data-message="The team size cannot be left blank!" className="border rounded-lg h-[40px] outline-none px-2">
                                <option value="Only Me">Only Me</option>
                                <option value="2-5">2-5</option>
                                <option value="6-10">6-10</option>
                                <option value="11-20">11-20</option>
                                <option value="21-50">21-50</option>
                                <option value="50+">50+</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 font-medium" htmlFor="role">
                                Role
                            </label>
                            <select name="role" id="role" data-phone="true"
                                ref={role}
                                data-required="true"
                                data-message="The role cannot be left blank!" className="border rounded-lg h-[40px] outline-none px-2">
                                <option value="User">User</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div> */}
                    {/* <div className="flex flex-col">
                            <label className="mb-2 font-medium" htmlFor="email">
                                Email
                            </label>
                            <input
                            ref={email}
                            required

                                data-email="true"
                                data-required="true"
                                data-message="The email cannot be left blank!"
                                name="email"
                                className="border rounded-lg h-[40px] outline-none px-2"
                                id="email"
                                type="text"
                            />
                        </div> */}

                    {/* <div className="flex flex-col">
                            <label className="mb-2 font-medium" htmlFor="re-password">
                                Repeat Password
                            </label>
                            <input
                                data-some="password"
                                data-min={5}
                                data-required="true"
                                data-message="The repeat password cannot be left blank!"
                                name="re-password"
                                className="border rounded-lg h-[40px] outline-none px-2"
                                id="re-password"
                                type="password"
                            />
                        </div> */}
                    {/* <div className="flex flex-col">
                            <label className="mb-2 font-medium" htmlFor="profphoto">
                                Profile Photo
                            </label>
                            <input
                                data-min={5}
                                data-required="true"
                                required

                                data-message="The profile photo cannot be left blank!"
                                name="profphoto"
                                className="border rounded-lg h-[40px] outline-none px-2"
                                id="profphoto"
                                type="file"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </div> */}
                    <button
                        className="bg-[#FE3737] text-white font-medium py-2 rounded-lg"
                        type="submit"
                    >

                        Register
                    </button>
                    <Link to={"/login"}>Login</Link>    </form>
            </div>
        </div>

    </>
)
}

export default RegisterForm