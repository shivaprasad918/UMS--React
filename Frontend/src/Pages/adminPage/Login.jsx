import React from 'react'

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 w-[600px] mx-auto bg-white rounded-lg shadow-md"> {/* Increased width */}
        <h1 className="text-4xl text-center font-bold text-blue-600 mb-8">Admin Sign In</h1>
        <form className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-semibold text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none">
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">Need help? <span className="text-blue-500 cursor-pointer">Contact Support</span></p>
        </div>
      </div>
    </div>
  );
}

export default Login
