import { Lock, Mail, User, UserPlus } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Providers/AuthContext";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import passwordValidation from "../Utility/passwordValidator";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, updateUserData, googleSignIn } = useContext(AuthContext);
  const currentLocation = useLocation().state?.from || "/";
  // const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checked)
      return toast.error("Please agree to the terms and conditions");
    if (!passwordValidation(password)) {
      return toast.error(
        "Password must be at least 6 characters long and contain at least one letter and one number."
      );
    }
    try {
      await createUser(email, password);
      await updateUserData({
        displayName: name,
        photoURL: photo,
      });
      toast.success("Account created successfully ✅");
      navigate("/auth/login");
    } catch (error) {
      const errorMessage = error.message;
      toast.error(errorMessage);
    }
  };
  const handleGoogleSignIn = () => {
    googleSignIn().then(() => {
      navigate(currentLocation);
    });
  };
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-base-100 rounded-xl shadow-md overflow-hidden p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">
            Create Account
          </h1>
          <p className="text-gray-600">
            Join WarmPaws to get the best winter care for your pet
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* User Name */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              User Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                min={3}
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                text-gray-500"
                placeholder="User Name"
              />
            </div>
          </div>
          {/* Email */}
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
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-500"
                placeholder="your@email.com"
              />
            </div>
          </div>
          {/* Photo URL */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Photo URL
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="url"
                id="photo"
                value={photo}
                required
                onChange={(e) => setPhoto(e.target.value)}
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-500"
                placeholder="https://example.com/photo.jpg"
              />
            </div>
          </div>
          {/*Password */}
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
                value={password}
                required
                minLength={6}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-500"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 text-sm text-gray-700 flex items-center"
              >
                I agree to the{" "}
                <Link
                  to="/terms-of-service"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {" "}
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy-policy"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full font-medium transition duration-300 flex items-center justify-center gap-2"
          >
            <UserPlus className="mr-2" /> Create Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm flex items-center justify-center">
            Already have an account?
            <Link
              to="/auth/login"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Login
            </Link>
          </p>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-gray-500 mb-4">
            Or continue with
          </p>
          <div className="flex ">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline w-full bg-base-100 hover:bg-base-200  border-gray-300 shadow-lg rounded-full"
            >
              <FcGoogle className="" size={20} />
              Signup with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
