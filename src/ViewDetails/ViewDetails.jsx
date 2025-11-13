import React, { useRef } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { useLoaderData } from "react-router";

const ViewDetails = () => {
  const { author, coverImage, genre, rating, summary, title, userEmail } =useLoaderData();

//   console.log(author , coverImage , genre , rating , summary , title , userEmail)
console.log(author)

  // const book= use(AuthContext)
  // const books=book.book

  // console.log(books._id)

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const similarBooks = [
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      img: "https://m.media-amazon.com/images/I/81UwqbtO1aL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      img: "https://m.media-amazon.com/images/I/81OdwZ9c3kL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "1984",
      author: "George Orwell",
      img: "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      img: "https://m.media-amazon.com/images/I/81OthjkJBuL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      img: "https://m.media-amazon.com/images/I/91b0C2YNSrL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Little Women",
      author: "Louisa May Alcott",
      img: "https://m.media-amazon.com/images/I/81Z1pZk3yGL._AC_UF1000,1000_QL80_.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16 px-6">
      {/* Book Details Section */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
        <div className="md:flex">
          {/* Cover Image */}
          <div className="md:w-1/3">
            <img
              className="h-full w-full object-cover"
              src={coverImage}
              alt="Book Cover"
            />
          </div>

          {/* Book Info */}
          <div className="p-10 md:w-2/3 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                {title}
              </h1>
              <p className="text-lg text-gray-700 mb-1">
                <span className="font-semibold text-indigo-700">Author:</span>{" "}
                {author}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-indigo-700">Genre:</span>{" "}
                {genre}
              </p>

              {/* Rating */}
              <div className="flex items-center mt-4">
                <span className="font-semibold text-indigo-700 mr-2">
                  Rating:
                </span>
                {/* {[...Array(5)].map((_, idx) => (
                  <svg
                    key={idx}
                    className={`w-6 h-6 ${
                      idx < 4 ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.946c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.285-3.946a1 1 0 00-.364-1.118L2.034 9.373c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.287-3.946z" />
                  </svg>
                ))} */}
                {rating}
              </div>

              {/* Summary */}
              <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                <span className="font-semibold text-indigo-700">Summary:</span>{" "}
                {summary}
              </p>
            </div>

            {/* User Info */}
            <div className="mt-10 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Added by:
              </h3>
              <div className="bg-indigo-50 rounded-xl p-4">
                <p className="text-gray-700 text-lg">
                  <span className="font-semibold text-indigo-700">Name:</span>{" "}
                  {author}
                </p>
                <p className="text-gray-700 text-lg">
                  <span className="font-semibold text-indigo-700">Email:</span>{" "}
                  {userEmail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Books Carousel */}
      <div className="max-w-6xl mx-auto mt-16 relative">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          Similar Books You Might Like
        </h2>

        {/* Left Icon */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-indigo-700 p-3 rounded-full shadow-md transition"
        >
          {/* Left Arrow SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Scrollable Books */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-transparent"
        >
          {similarBooks.map((book, index) => (
            <div
              key={index}
              className="min-w-[250px] flex-shrink-0 snap-center bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <img
                src={book.img}
                alt={book.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <h4 className="text-lg font-bold text-gray-900">
                  {book.title}
                </h4>
                <p className="text-gray-600 mt-1">{book.author}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Icon */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-indigo-700 p-3 rounded-full shadow-md transition"
        >
          {/* Right Arrow SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-600 text-sm">
        © 2025 BookWorld — Designed by Abir
      </footer>
    </div>
  );
};

export default ViewDetails;
