import React from "react";

const BookHavenSection = () => {
  return (
    <section className="h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 text-white flex flex-col">
      {/* 🟣 Top Genres Section */}
      <div className="flex-1 py-10 px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 bg-clip-text text-transparent tracking-wide">
            Top Genres
          </h2>
          <p className="mt-3 text-lg text-white/80">
            Explore the most popular genres loved by our readers
          </p>
          <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full shadow-lg"></div>
        </div>

        {/* Genre Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 🎭 Genre Card */}
          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80"
              alt="Fiction"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold group-hover:text-yellow-300 transition-colors duration-300">
                Fiction
              </h3>
            </div>
          </div>

          {/* 🔍 Genre Card */}
          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80"
              alt="Mystery"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold group-hover:text-yellow-300 transition-colors duration-300">
                Mystery
              </h3>
            </div>
          </div>

          {/* 🚀 Genre Card */}
          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80"
              alt="Sci-Fi"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold group-hover:text-yellow-300 transition-colors duration-300">
                Sci-Fi
              </h3>
            </div>
          </div>

          {/* 💖 Genre Card */}
          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
              alt="Romance"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold group-hover:text-yellow-300 transition-colors duration-300">
                Romance
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* 💖 About The Book Haven Section */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-md border-t border-white/10 px-6 text-center">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
            About The Book Haven
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-yellow-300">Book Haven</span>,
            your cozy corner for every story lover. From timeless classics to
            modern masterpieces, we bring together readers and books that
            inspire, educate, and transport you beyond imagination. Dive into a
            world where every page opens a new adventure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookHavenSection;
