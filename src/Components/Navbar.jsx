import React from "react";
import { Link, NavLink } from "react-router";
import { useTheme } from "../Providers/ThemeContext";
import { LogIn } from "lucide-react";

const Navbar = () => {
  const { toggleTheme, theme } = useTheme();

  const links = ["Home", "Services", "Profile"];
  return (
    <div className="sticky top-0 z-50 bg-linear-to-r from-indigo-500 to-purple-500 px-8 py-4 flex justify-between items-center [box-shadow:0_2px_10px_rgba(0,0,0,0.1)] bg-base-100 shadow-sm">
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links.map((link) => (
                <li key={link}>
                  <NavLink to={`/${link}`}>{link}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <NavLink to="/" className="text-3xl font-semibold">
            WarmPaws
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map((link) => (
              <li key={link} className="px-4">
                <NavLink to={`/${link}`}>{link}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <input
            onChange={toggleTheme}
            type="checkbox"
            checked={theme === "dark"}
            className="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
          />
          <Link to="/auth/login" className="btn btn-primary">
            <LogIn/>LogIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
