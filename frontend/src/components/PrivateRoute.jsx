import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();

  useEffect(() => {
    if (!currentUser) {
      toast.error("You must be signed in to access this page.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  }, [currentUser]);

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
}

export default PrivateRoute;
