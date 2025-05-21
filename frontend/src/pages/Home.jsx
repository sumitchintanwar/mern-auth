import React from "react";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-3xl w-full text-center p-6 bg-white shadow-xl rounded-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Welcome to My Project
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          This project is a modern web application built with React.js. It
          demonstrates clean UI design, responsive layouts, and efficient
          component-based architecture. The goal is to create a fast, scalable,
          and user-friendly experience for everyone.
        </p>
        <p className="text-base md:text-lg text-gray-600">
          Explore the features, dive into the code, and see how everything comes
          together to build a sleek frontend application. Whether you're here to
          learn, contribute, or get inspired — welcome aboard!
        </p>
      </div>
    </div>
  );
}

export default Home;
