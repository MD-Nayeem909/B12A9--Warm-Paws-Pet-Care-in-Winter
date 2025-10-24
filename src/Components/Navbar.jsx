import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { useTheme } from "../Providers/ThemeContext";
import { LogIn, LogOut, UserPlus } from "lucide-react";
import { AuthContext } from "../Providers/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const { toggleTheme, theme } = useTheme();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success("Logout successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const links = ["Home", "Services", "Profile"];
  return (
    <div className="navbar bg-linear-to-r from-indigo-500 to-purple-500 px-8 flex justify-between items-center bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-base-200 hover:bg-base-200 hover:text-primary mr-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-linear-to-b from-indigo-500 to-purple-500 rounded-box z-999 mt-3 w-52 p-2 shadow"
            >
              {links.map((link) => (
                <li key={link} className="px-3">
                  <NavLink
                    className="decoration"
                    to={`/${link === "Home" ? "" : link}`}
                  >
                    {link}
                  </NavLink>
                </li>
              ))}
              <div className="flex justify-between items-center px-5">
                <p className="text-white text-sm decoration">Theme</p>
                <input
                  onChange={toggleTheme}
                  type="checkbox"
                  checked={theme === "dark"}
                  className="toggle theme-controller text-base-100"
                />
              </div>
            </ul>
          </div>
          <NavLink to="/" className="text-3xl text-white font-semibold">
            WarmPaws
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map((link) => (
              <li key={link} className="px-3 ">
                <NavLink
                  className="decoration"
                  to={`/${link === "Home" ? "" : link}`}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
          <input
            onChange={toggleTheme}
            type="checkbox"
            checked={theme === "dark"}
            className="toggle theme-controller text-base-100"
          />
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
              <LogOut className="text-white" />
              <button onClick={handleLogout} className="text-white font-medium">
                LogOut
              </button>
              </div>

              <Link to="/profile" className="text-white">
                <div className="avatar w-10">
                  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                    <img src={user.photoURL} />
                  </div>
                </div>
              </Link>
            </div>
          ) : (
            <div className="flex items-center text-white space-x-4">
              <Link to="/auth/login" className="btn-ghost flex">
                <LogIn className="mr-2" />
                Login
              </Link>
              <span className=" text-2xl">|</span>
              <Link to="/auth/register" className=" btn-ghost flex">
                <UserPlus className="mr-2" />
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
