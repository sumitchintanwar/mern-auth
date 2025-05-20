import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" fixed top-0 left-0 w-screen bg-slate-200 shadow-md ">
      <div className="flex justify-between items-center p-6 px-6 mx-auto max-w-7xl">
        <Link to={"/"}>
          <h1 className="font-bold">Auth App</h1>
        </Link>
        <ul className="flex gap-7">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/sign-in"}>
            <li>Sign In</li>
          </Link>
          <Link to={"/sign-up"}>
            <li>Sign Up</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
