// import React from "react";
// import { Link } from "react-router";

// const SingleRow = ({ book }) => {
//     const { _id, author, genre, rating, title, } = book;
    

//   //   bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 cursor-pointer
//   return (
//     <tbody>
//       <tr className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 cursor-pointer">
//         <td className="py-4 px-6 font-medium text-lg">{title}</td>
//         <td className="py-4 px-6 text-white/90">{author}</td>
//         <td className="py-4 px-6 text-white/80">{genre}</td>
//         <td className="py-4 px-6 text-yellow-400 font-semibold text-lg">
//           {rating}
//         </td>
//         <td className="py-4 px-6 text-center">
//           <button className="bg-white/20 hover:bg-white/30 transition-all duration-300 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg">
//             <Link to={`/viewdetails/${_id}`}>View Details</Link>
//           </button>
//         </td>
//       </tr>
//     </tbody>
//   );
// };

// export default SingleRow;


import React from "react";
import { Link } from "react-router";

const SingleRow = ({ book }) => {
    const { _id, author, genre, rating, title } = book;

    return (
      <tbody>
        <tr className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 cursor-pointer">
          
          <td className="py-4 px-6 font-medium text-lg">{title}</td>
          <td className="py-4 px-6 text-white/90">{author}</td>
          <td className="py-4 px-6 text-white/80">{genre}</td>
          <td className="py-4 px-6 text-yellow-400 font-semibold text-lg">{rating}</td>

          <td className="py-4 px-6 text-center">
            <button className="bg-white/20 hover:bg-white/30 transition-all duration-300 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg">
              <Link to={`/viewdetails/${_id}`}>View Details</Link>
            </button>
          </td>

        </tr>
      </tbody>
    );
};

export default SingleRow;




