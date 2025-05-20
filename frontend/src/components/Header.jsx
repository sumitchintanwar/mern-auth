import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Auth App
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 ml-3 text-sm text-white-500 rounded-lg border border-white lg:hidden hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only text-w">Open main menu</span>
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 5h14M3 10h14M3 15h14"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          {/* Nav links and buttons */}

          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto lg:items-center`}
            id="navbar"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0 lg:items-center">
              <li>
                <Link
                  to="/"
                  // className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 dark:text-gray-300 dark:hover:text-white"
                  className="block py-2 px-4 text-gray-800 dark:text-white  rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600 lg:ml-4"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  // className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 dark:text-gray-300 dark:hover:text-white"
                  className="block py-2 px-4 text-gray-800 dark:text-white  rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600 lg:ml-4"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/sign-in"
                  className="block py-2 px-4 text-gray-800 dark:text-white  rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600 lg:ml-4"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/sign-up"
                  className="block py-2 px-4 hover:text-black hover:bg-gray-50 text-white bg-primary-700 rounded-lg hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 lg:ml-2"
                >
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
