import React from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
  return (
    <>
        <div className="px-3 py-5 w-full">
  <div className="max-w-[400px] w-full border rounded-lg">
    <h3 className="font-medium text-center border-b py-4 text-[#0D0D0D] text-[20px]">
      User Register Form
    </h3>
    <form id="form" className="p-4 flex flex-col gap-[16px]">
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
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-medium" htmlFor="surname">
          Surname
        </label>
        <input
          data-min={5}
          data-required="true"
          data-message="The surame cannot be left blank!"
          name="surname"
          className="border rounded-lg h-[40px] outline-none px-2"
          id="surname"
          type="text"
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
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-medium" htmlFor="email">
          Email
        </label>
        <input
          data-email="true"
          data-required="true"
          data-message="The email cannot be left blank!"
          name="email"
          className="border rounded-lg h-[40px] outline-none px-2"
          id="email"
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-medium" htmlFor="password">
          Password
        </label>
        <input
          data-min={5}
          data-required="true"
          data-message="The password cannot be left blank!"
          name="password"
          className="border rounded-lg h-[40px] outline-none px-2"
          id="password"
          type="password"
        />
      </div>
      <div className="flex flex-col">
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
      </div>
      <button
        className="bg-[#FE3737] text-white font-medium py-2 rounded-lg"
        type="submit"
      >
        {" "}
        Register{" "}
      </button>
      <Link to={"/login"}>Login</Link>    </form>
  </div>
</div>

    </>
  )
}

export default RegisterForm