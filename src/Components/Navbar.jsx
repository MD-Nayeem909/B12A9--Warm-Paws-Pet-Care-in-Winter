import React from "react";
import { Link, NavLink } from "react-router";
import { useTheme } from "../Providers/ThemeContext";

const Navbar = () => {
  const { toggleTheme, theme } = useTheme();
  

  const links = ["Home", "Services", "My Profile"];
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
          <NavLink to="/" className="text-3xl font-semibold">WarmPaws</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map((link) => (
              <li key={link}>
                <NavLink to={`/${link}`}>{link}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <input
            onClick={toggleTheme}
            type="checkbox"
            checked={theme === "dark"}
            className="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
          />
          <Link to="/login" className="btn">
            LogIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
