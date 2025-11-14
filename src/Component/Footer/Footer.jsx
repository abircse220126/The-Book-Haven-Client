import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 text-white py-8 mt-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-lg md:text-xl font-bold mb-2 tracking-wide animate-pulse">
          The Book Haven
        </h2>
        <p className="text-sm md:text-base opacity-90">
          © {new Date().getFullYear()} The Book Haven. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          {/* Example hover effect dots */}
          <span className="w-3 h-3 bg-white rounded-full hover:bg-pink-300 transition-all duration-300 cursor-pointer"></span>
          <span className="w-3 h-3 bg-white rounded-full hover:bg-purple-300 transition-all duration-300 cursor-pointer"></span>
          <span className="w-3 h-3 bg-white rounded-full hover:bg-indigo-300 transition-all duration-300 cursor-pointer"></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
