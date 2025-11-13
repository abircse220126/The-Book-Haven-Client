import React from "react";
import { Link, NavLink } from "react-router";

const BookCard = ({ book }) => {
  const { title, author, genre, coverImage ,_id } = book;
  // console.log(book);
  return (
    <div className="group w-72 bg-gradient-to-br from-purple-600/20 via-blue-500/10 to-pink-500/20 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border border-white/10 hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out mt-5">
      {/* Book Image */}
      <div className="w-full h-72 bg-black/10 overflow-hidden flex">
        <img
          src={coverImage}
          alt="Book Cover"
          className="w-full h-full object-contain transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Book Details */}
      <div className="px-5 py-5 text-center bg-gradient-to-t from-black/30 via-black/10 to-transparent backdrop-blur-lg">
        <h2 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-300 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-sm text-white/80 font-medium mb-1">{author}</p>
        <p className="text-xs inline-block mb-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 uppercase tracking-wide font-semibold text-white">
          {genre}
        </p>

        {/* Button */}
        <button className="px-6 py-2 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-pink-500 shadow-md transition-all duration-500 ease-in-out hover:scale-105">
          <Link to={`/viewdetails/${_id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
