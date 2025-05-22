import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-8">
          About Me & The Project
        </h2>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            👤 About Me
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Hi, I'm Sumit, a passionate developer who loves creating
            clean, efficient, and interactive web applications. I enjoy working
            with modern technologies like React, Node.js, MongoDB, and exploring
            new tools in the development ecosystem. This project is one of my
            learning and portfolio-building initiatives.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            💡 About This Project
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            This project is built using React.js and demonstrates
            component-based architecture, responsive UI with Tailwind CSS, and
            clean code practices. It's designed to showcase my frontend
            development skills and serve as a foundation for more advanced
            features like routing, authentication, and state management in the
            future.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
