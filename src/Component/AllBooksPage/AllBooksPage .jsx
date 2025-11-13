

// do not use context 

const allBookPromise=fetch('http://localhost:3000/all-books')
.then(res=>res.json())

import React from 'react';
import SingleRow from './SingleRow ';
import AllBooks from './AllBooks';
import TableHeader from './TableHeader';

const AllBooksPage = () => {
  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 py-10 px-4">
      <div className="max-w-6xl w-full mx-auto rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm bg-white/10 border border-white/20">
        <table className="min-w-full text-left text-white rounded-2xl overflow-hidden">
        <TableHeader></TableHeader>
          <AllBooks allBookPromise={allBookPromise}></AllBooks>
        </table>
      </div>
    </div>
  );
};

export default AllBooksPage;




// using context

// import React, { use } from "react";
// import { AuthContext } from "../../Context/AuthContext/AuthContext";

// const AllBooksPage = () => {

//   const {user , book}=use(AuthContext)
//   console.log(user)
//   console.log(book)

//   const books=book

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

// export default AllBooksPage;





// use filter but here some wrong

// import React, { useContext, useState } from "react";
// import { AuthContext } from "../../Context/AuthContext/AuthContext";
// import { useNavigate } from "react-router-dom";

// const AllBooksPage = () => {
//   const { book } = useContext(AuthContext);
//   const books = book || [];

//   const navigate = useNavigate();

//   // Example: ID you want to filter (could be from route or state)
//   const [filterId, setFilterId] = useState(""); // you can update this dynamically

//   // Filter book by ID if filterId is set, else show all books
//   const displayedBooks =
//     filterId !== ""
//       ? books.filter((b) => b._id === filterId)
//       : books;

//   const handleViewDetails = (id) => {
//     navigate(`/book/${id}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-700 via-pink-500 to-indigo-600 p-8">
//       <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8">
//         <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
//           My Books
//         </h2>

//         {/* Optional input to filter by ID */}
//         <div className="mb-6 text-center">
//           <input
//             type="text"
//             placeholder="Enter Book ID to filter"
//             className="p-3 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400 w-1/2 text-black"
//             value={filterId}
//             onChange={(e) => setFilterId(e.target.value)}
//           />
//         </div>

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
//               {displayedBooks.length > 0 ? (
//                 displayedBooks.map((b) => (
//                   <tr key={b._id}>
//                     <td className="px-6 py-4 text-gray-900 font-medium">
//                       {b.title}
//                     </td>
//                     <td className="px-6 py-4 text-gray-900">{b.author}</td>
//                     <td className="px-6 py-4 text-gray-900">{b.genre}</td>
//                     <td className="px-6 py-4 text-gray-900">{b.rating}</td>
//                     <td className="px-6 py-4 text-gray-900">{b.summary}</td>
//                     <td className="px-6 py-4 flex justify-center gap-3">
//                       <button
//                         onClick={() => handleViewDetails(b._id)}
//                         className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
//                       >
//                         View Details
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
//                     No books found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllBooksPage;






