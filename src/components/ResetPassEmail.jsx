import React, { useState } from 'react';
import Logo from "./Logo"

export default function Component() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic here
    console.log('Password change submitted');
  };

  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded flex items-center justify-center">
           <Logo />
            </div>
            <span className="text-xl font-semibold text-gray-800">Lead2b</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-semibold text-center mb-2">Change password</h1>
          <p className="text-gray-600 text-center mb-6">Don't forget to store your new password securely.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">New password</label>
              <input
                id="new-password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter at least 8 characters"
                required
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">Confirm new password</label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter new password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Change my password
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}