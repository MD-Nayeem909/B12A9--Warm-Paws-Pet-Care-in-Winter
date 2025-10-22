import { Lock, LogIn, Mail } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">
            Login to access your pet's winter care dashboard
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>
            <Link
              to="/forgot-password.html"
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition duration-300 flex items-center justify-center gap-2"
          >
            <LogIn className="w-5 h-5" /> Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm flex items-center justify-center">
            Don't have an account?
            <Link
              to="/auth/register"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-gray-500 mb-4">
            Or continue with
          </p>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-white border border-gray-300 rounded-lg py-2 px-4 flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50 transition duration-300">
              <i data-feather="facebook" className="text-blue-600"></i> Facebook
            </button>
            <button className="bg-white border border-gray-300 rounded-lg py-2 px-4 flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50 transition duration-300">
              <i data-feather="github" className="text-gray-800"></i> Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
