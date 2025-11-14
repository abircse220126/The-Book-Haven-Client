// import React, { use } from "react";
// import { AuthContext } from "../../Context/AuthContext/AuthContext";

// const MyBook = () => {

//   const {user , book}=use(AuthContext)
//   console.log(user)
//   console.log(book)

//   const books=book

//   // Sample static data
//   // const books = [
//   //   {
//   //     id: 1,
//   //     title: "The Great Gatsby",
//   //     author: "F. Scott Fitzgerald",
//   //     genre: "Classic",
//   //     rating: 4.5,
//   //     summary: "A story about the Jazz Age in the United States.",
//   //   },
//   //   {
//   //     id: 2,
//   //     title: "1984",
//   //     author: "George Orwell",
//   //     genre: "Dystopian",
//   //     rating: 4.7,
//   //     summary: "A dystopian novel about totalitarianism and surveillance.",
//   //   },
//   //   {
//   //     id: 3,
//   //     title: "To Kill a Mockingbird",
//   //     author: "Harper Lee",
//   //     genre: "Classic",
//   //     rating: 4.8,
//   //     summary: "A novel about racial injustice in the Deep South.",
//   //   },
//   // ];

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-700 via-pink-500 to-indigo-600 p-8">
//       <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8">
//         <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
//           My Books
//         </h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gradient-to-r from-purple-600 to-pink-500 text-white uppercase text-sm tracking-wider">
//               <tr>
//                 <th className="px-6 py-3 text-left">Title</th>
//                 <th className="px-6 py-3 text-left">Author</th>
//                 <th className="px-6 py-3 text-left">Genre</th>
//                 <th className="px-6 py-3 text-left">Rating</th>
//                 <th className="px-6 py-3 text-left">Summary</th>
//                 <th className="px-6 py-3 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {books.map((book) => (
//                 <tr key={book.id}>
//                   <td className="px-6 py-4 text-gray-900 font-medium">{book.title}</td>
//                   <td className="px-6 py-4 text-gray-900">{book.author}</td>
//                   <td className="px-6 py-4 text-gray-900">{book.genre}</td>
//                   <td className="px-6 py-4 text-gray-900">{book.rating}</td>
//                   <td className="px-6 py-4 text-gray-900">{book.summary}</td>
//                   <td className="px-6 py-4 flex justify-center gap-3">
//                     <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md transition duration-300">
//                       Update
//                     </button>
//                     <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300">
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyBook;


import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { data, Link } from "react-router";

const MyBook = () => {
  const { user, book } = useContext(AuthContext);
  // const [books , Setbooks]=useState(null)

  const [books, setBooks] = useState(book);

  // If no user or no books available, show message
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 via-pink-500 to-indigo-600 text-white text-xl font-semibold">
        Please log in to view your books.
      </div>
    );
  }

  // Filter books that belong to the logged-in user
  const userBooks = book?.filter(
    (b) => b.userEmail === user.email
  ) || []; 


  const handleDelete = (id)=>{
    // console.log("Delete Button is Clicked" , id)

    fetch(`http://localhost:3000/delete-book/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)

      const remaining = userBooks.filter((b)=> b._id!==data.id)
      setBooks(remaining)

    })
  }

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
                {userBooks.map((b) => (
                  <tr key={b._id} className="hover:bg-gray-100 transition">
                    <td className="px-6 py-4 text-gray-900 font-medium">{b.title}</td>
                    <td className="px-6 py-4 text-gray-900">{b.author}</td>
                    <td className="px-6 py-4 text-gray-900">{b.genre}</td>
                    <td className="px-6 py-4 text-gray-900">{b.rating}</td>
                    <td className="px-6 py-4 text-gray-900">{b.summary}</td>
                    <td className="px-6 py-4 flex justify-center gap-3">
                      <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md transition duration-300">
                        <Link to={`/update-book/${b._id}`}>Update</Link>
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300" onClick={()=>handleDelete(b._id)}>
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
