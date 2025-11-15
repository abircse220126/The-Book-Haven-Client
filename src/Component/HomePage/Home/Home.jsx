import React, { use } from "react";
import Banner from "../Banner/Banner";
import BookCard from "../BookCard/BookCard";
import Books from "../Books/Books";
import BookHavenSection from "../BookHavenSection/BookHavenSection";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";


const bookPromise = fetch('http://localhost:3000/books')
.then(res=>res.json())


const Home = () => {
  // const {user}=use(AuthContext)
  // console.log(user)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900">
      <Banner></Banner>
      <div class="text-center mb-12 mt-3">
        <h2 class="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg tracking-wide">
          Explore Our Collection
        </h2>
        <p class="mt-3 text-lg text-white/80 font-medium">
          Discover your next favorite book from a world of imagination,
          knowledge, and inspiration.
        </p>

        <div class="mt-6 w-24 h-1 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full shadow-lg"></div>
      </div>

      <div className="w-8/12 mx-auto ">
        <Books bookPromise={bookPromise}></Books>
      </div>

      <BookHavenSection></BookHavenSection>
    </div>
  );
};

export default Home;
