import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router";
import { AuthContext } from "../Providers/AuthContext";

const ForgotPass = () => {
  const { user } = useContext(AuthContext);
  
  const location = useLocation();
  const { email } = location.state || "";
  const [mail, setMail] = useState(email);
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="bg-base-200 min-h-[calc(100vh-300.86px)] flex flex-col justify-center items-center">
        <div className=" flex flex-col items-center justify-center max-w-5xl mx-auto gap-4 bg-base-100 rounded-2xl p-12 shadow-xl">
          <lord-icon
            src="https://cdn.lordicon.com/urswgamh.json"
            trigger="loop"
            delay="1500"
            style={{ width: "220px", height: "220px" }}
          ></lord-icon>
          <div className="text-center space-y-2">
            <h3 className="text-4xl font-semibold text-[#08a88a]">Forgot Password?</h3>
            <p className="text-gray-600">
              Please enter your email address to receive a link to reset your
              password
            </p>
          </div>

          <div className="w-full max-w-xs space-y-4">
            <label className="input validator ">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                type="email"
                placeholder="mail@site.com"
                required
                className="input-field w-full max-w-xs"
              />
            </label>
            <button
              onClick={() => {
                window.open(
                  `https://mail.google.com/mail/?view=cm&fs=1&to=${mail}&su=One more step to change your password&body=Hi ${user}, Please click on the link below to change your password. https://warm-paws.web.app/auth/login!`,
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              type="submit"
              className="btn bg-[#08a88a] text-white hover:bg-[#198f67] hover:text-white w-full max-w-xs"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ForgotPass;
