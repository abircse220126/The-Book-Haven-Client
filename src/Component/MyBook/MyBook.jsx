import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { data, Link } from "react-router";

const MyBook = () => {
  const { user, book } = useContext(AuthContext);

  const userBooks = book?.filter((b) => b.userEmail === user.email) || [];

  const [userBooksState, setUserBooksState] = useState(userBooks);


  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 via-pink-500 to-indigo-600 text-white text-xl font-semibold">
        Please log in to view your books.
      </div>
    );
  }


  const handleDelete = (id) => {

    fetch(`http://localhost:3000/delete-book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {

        if (data.deletedCount) {
          alert("Deleted Successfully");
          const remaining = userBooks?.filter((b) => b._id !== id);
          setUserBooksState(remaining);
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 via-pink-500 to-indigo-600 p-8">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          My Books
        </h2>

        {userBooks.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-purple-600 to-pink-500 text-white uppercase text-sm tracking-wider">
                <tr>
                  <th className="px-6 py-3 text-left">Title</th>
                  <th className="px-6 py-3 text-left">Author</th>
                  <th className="px-6 py-3 text-left">Genre</th>
                  <th className="px-6 py-3 text-left">Rating</th>
                  <th className="px-6 py-3 text-left">Summary</th>
                  <th className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {userBooksState?.map((b) => (
                  <tr key={b._id} className="hover:bg-gray-100 transition">
                    <td className="px-6 py-4 text-gray-900 font-medium">
                      {b.title}
                    </td>
                    <td className="px-6 py-4 text-gray-900">{b.author}</td>
                    <td className="px-6 py-4 text-gray-900">{b.genre}</td>
                    <td className="px-6 py-4 text-gray-900">{b.rating}</td>
                    <td className="px-6 py-4 text-gray-900">{b.summary}</td>
                    <td className="px-6 py-4 flex justify-center gap-3">
                      <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md transition duration-300">
                        <Link to={`/update-book/${b._id}`}>Update</Link>
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
                        onClick={() => handleDelete(b._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-800 font-medium mt-10">
            You haven’t added any books yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyBook;
