import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-infinity loading-xl w-[100px]"></span>
      </div>
    );
  }
  if (!user) {
    return (
      <Navigate to="/auth/login" state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
