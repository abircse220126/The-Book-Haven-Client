import React, { useEffect, useState } from "react";

const Banner = () => {
  const gradients = [
    "from-fuchsia-500 via-purple-500 to-indigo-500",
    "from-cyan-400 via-sky-500 to-blue-600",
    "from-rose-500 via-orange-500 to-yellow-400",
    "from-emerald-400 via-teal-500 to-sky-400",
  ];

  const books = [
    "https://images.unsplash.com/photo-1528209392022-6c85226a86f2?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=700&q=80",
  ];

  const [currentGradient, setCurrentGradient] = useState(0);
  const [currentBook, setCurrentBook] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient((prev) => (prev + 1) % gradients.length);
      setCurrentBook((prev) => (prev + 1) % books.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Helper: get book index safely (wrap around)
  const getBook = (offset) => {
    const index = (currentBook + offset + books.length) % books.length;
    return books[index];
  };

  return (
    <header
      className={`relative w-full overflow-hidden transition-all duration-1000 ease-in-out bg-gradient-to-r ${gradients[currentGradient]} text-white`}
    >
      {/* Glowing background blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute top-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20">
        {/* Text Section */}
        <div className="z-10 flex flex-col gap-6 text-center md:text-left max-w-xl">
          <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-1 text-sm font-semibold rounded-full shadow-lg">
            📚 Curated Reads • Every Story Matters
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            Welcome to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400">
              The Book Haven
            </span>
          </h1>

          <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
            Step into a world of stories, imagination, and knowledge — crafted to inspire every kind of reader.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-4">
            <button className="px-8 py-3 rounded-full font-semibold text-lg shadow-lg bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-pink-500 text-white transition-all duration-500 hover:scale-105">
              All Books
            </button>
            <button className="px-8 py-3 rounded-full font-semibold text-lg shadow-lg border-2 border-white/70 text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 transition-all duration-500 hover:scale-105">
              Create Book
            </button>
          </div>
        </div>

        {/* 5-Image Carousel */}
        <div className="mt-16 md:mt-0 relative flex items-center justify-center w-full md:w-1/2 h-[26rem]">
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Far Left */}
            <img
              src={getBook(-2)}
              alt="Far Left Book"
              className="absolute w-24 h-40 sm:w-32 sm:h-52 object-cover rounded-xl opacity-25 scale-75 -translate-x-44 sm:-translate-x-56 transition-all duration-700 ease-in-out"
            />
            {/* Left */}
            <img
              src={getBook(-1)}
              alt="Left Book"
              className="absolute w-32 h-48 sm:w-40 sm:h-60 object-cover rounded-2xl opacity-50 scale-90 -translate-x-24 sm:-translate-x-28 transition-all duration-700 ease-in-out"
            />
            {/* Center */}
            <img
              src={getBook(0)}
              alt="Center Book"
              className="absolute w-44 h-60 sm:w-56 sm:h-72 object-cover rounded-3xl shadow-2xl z-20 transform scale-110 transition-all duration-700 ease-in-out ring-4 ring-white/40"
            />
            {/* Right */}
            <img
              src={getBook(1)}
              alt="Right Book"
              className="absolute w-32 h-48 sm:w-40 sm:h-60 object-cover rounded-2xl opacity-50 scale-90 translate-x-24 sm:translate-x-28 transition-all duration-700 ease-in-out"
            />
            {/* Far Right */}
            <img
              src={getBook(2)}
              alt="Far Right Book"
              className="absolute w-24 h-40 sm:w-32 sm:h-52 object-cover rounded-xl opacity-25 scale-75 translate-x-44 sm:translate-x-56 transition-all duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z"
            className="fill-white/20"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default Banner;
