import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    companyName: '',
    companyDomain: '',
    phone: '+994',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="py-4 px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </div>
          <span className="text-xl font-semibold">Lead2b</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 px-6 py-8">
        <div className="w-full max-w-6xl mx-auto flex gap-8">
          {/* Form Section */}
          <div className="w-1/2">
            <h1 className="text-2xl font-semibold mb-8">Create your account</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Surname */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Surname</label>
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Enter your surname"
                  />
                </div>
              </div>

              {/* Company Details */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Company name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Company domain</label>
                  <input
                    type="text"
                    name="companyDomain"
                    value={formData.companyDomain}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Enter your company domain"
                  />
                </div>
              </div>

              {/* Phone & Password */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Enter at least 8 characters"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              >
                Continue
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-1/2 flex items-center justify-center">
            <img 
              src="/src/assets/img/side1.svg" 
              alt="Illustration" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;