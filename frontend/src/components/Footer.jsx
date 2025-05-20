import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              {/* <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              /> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Auth App
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Pages
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/sumitchintanwar"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a to="" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <Link to="https://flowbite.com/" className="hover:underline">
              Auth App™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// <div className="flex mt-4 sm:justify-center sm:mt-0">
//             <Link
//               to="#"
//               className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
//             >
//               {/* Facebook SVG */}
//               <svg
//                 className="w-4 h-4"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 8 19"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               <span className="sr-only">Facebook page</span>
//             </Link>
//             <Link
//               to="#"
//               className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
//             >
//               {/* Discord SVG */}
//               <svg
//                 className="w-4 h-4"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 21 16"
//               >
//                 <path d="M16.942 1.556..." />
//               </svg>
//               <span className="sr-only">Discord community</span>
//             </Link>
//             <Link
//               to="#"
//               className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
//             >
//               {/* Twitter SVG */}
//               <svg
//                 className="w-4 h-4"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 20 17"
//               >
//                 <path fillRule="evenodd" d="M20 1.892..." clipRule="evenodd" />
//               </svg>
//               <span className="sr-only">Twitter page</span>
//             </Link>
//             <Link
//               to="#"
//               className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
//             >
//               {/* GitHub SVG */}
//               <svg
//                 className="w-4 h-4"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path fillRule="evenodd" d="M10 .333..." clipRule="evenodd" />
//               </svg>
//               <span className="sr-only">GitHub account</span>
//             </Link>
//             <Link
//               to="#"
//               className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
//             >
//               {/* Dribbble SVG */}
//               <svg
//                 className="w-4 h-4"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path fillRule="evenodd" d="M10 0..." clipRule="evenodd" />
//               </svg>
//               <span className="sr-only">Dribbble account</span>
//             </Link>
//           </div>
