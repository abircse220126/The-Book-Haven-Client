import React, { use, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const AddBook = () => {
  // Variables to store input values
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [summary, setSummary] = useState("");

  const navigate = useNavigate()


  const { user } = use(AuthContext);
  console.log(user);
  console.log(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      title,
      author,
      genre,
      rating,
      userEmail,
      userName,
      coverImage,
      summary,
    };

    // console.log(newUser)

    fetch("http://localhost:3000/addBook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {

          // alert("data is already Inserted")
          navigate("/mybook")

        }
      });

     
      // <Link to="/mybook"></Link>
  };

  

 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 via-pink-500 to-indigo-600 p-6">
      <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-12 w-full max-w-3xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10 tracking-wide">
          Add New Book
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="📖 Book Title"
              className="p-4 rounded-xl border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 shadow-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="✍️ Author Name"
              className="p-4 rounded-xl border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 shadow-md"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <input
              type="text"
              placeholder="🗂 Genre"
              className="p-4 rounded-xl border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 shadow-md"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
            <input
              type="number"
              placeholder="⭐ Rating (0-5)"
              className="p-4 rounded-xl border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 shadow-md"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            <input
              type="email"
              placeholder={user.email}
              className="p-4 rounded-xl border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 shadow-md"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="🙋‍♂️ Your Name"
              className="p-4 rounded-xl border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 shadow-md"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="text"
              placeholder="🖼 Cover Image URL"
              className="p-4 rounded-xl border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 shadow-md md:col-span-2"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
            />
          </div>
          <textarea
            placeholder="📝 Summary"
            rows="4"
            className="w-full p-4 rounded-xl border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 shadow-md"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          ></textarea>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white p-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
