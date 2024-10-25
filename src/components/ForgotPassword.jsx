import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "./Logo"

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://2f2d-62-217-156-173.ngrok-free.app/api/admin/user/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log("Password reset email sent successfully");
        navigate("/login");
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Connection error:', error);
      setError('A connection error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full">
      <header className="bg-white p-4 ">
      <div className='flex gap-x-2'>
         


         
         <a href="#">
                  <Logo />
                </a>
    
     
      <span className="font-semibold flex items-center justify-items-center">Lead2B</span>
  </div>    
      </header>
      <main className="flex-grow flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-semibold text-center mb-6">Forgot your password?</h1>
          <p className="text-sm text-center text-gray-600 mb-6">
            Enter your registered email address to receive a password reset link.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-400"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Reset password'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;