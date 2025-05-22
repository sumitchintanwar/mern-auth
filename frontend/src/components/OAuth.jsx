import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signinSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
function Oauth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
          uid: result.user.uid,
        }),
      });
      const data = await res.json();
      dispatch(signinSuccess(data));
      console.log("User data", data.user.username);
      if (data.success === true) {
        navigate("/");
      }
      // console.log("User Signed up", result);
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleSignIn}
      className="cursor-pointer w-full  bg-red-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    >
      Sign in with Google
    </button>
  );
}

export default Oauth;
