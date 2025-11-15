// import React from "react";

// const TableHeader = () => {
//   return (
//     <thead className=" w-7/12 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 uppercase text-sm tracking-wider">
//       {/* <tr>
//         <th className="py-4 px-6">Book Name</th>
//         <th className="py-4 px-6">Author</th>
//         <th className="py-4 px-6">Genre</th>
//         <th className="py-4 px-6">Rating</th>
//         <th className="py-4 px-6 text-center">Action</th>
//       </tr> */}

//       <tr className="  bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 cursor-pointer">
//         <td className="py-4 px-4">Books Name</td>
//         <td className="py-4 px-4">Author</td>
//         <td className="py-4 px-4">Genre</td>
//         <td className="py-4 px-4">Rating</td>
//         <td className="py-4 px-4">Action</td>
//         {/* <td className="py-4 px-6 text-center">
//           <button className="bg-white/20 hover:bg-white/30 transition-all duration-300 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg">
//             View Details
//           </button>
//         </td> */}
//       </tr>

//     </thead>
//   );
// };

// export default TableHeader;


import React from "react";

const TableHeader = () => {
  return (
    <thead className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white uppercase text-sm tracking-wider">
      <tr>
        <th className="py-4 px-6 text-left w-4/12">Books Name</th>
        <th className="py-4 px-6 text-left w-2/12">Author</th>
        <th className="py-4 px-6 text-left w-3/12">Genre</th>
        <th className="py-4 px-6 text-left w-1/12">Rating</th>
        <th className="py-4 px-6 text-center w-2/12">Action</th>
      </tr>
    </thead>
  );
};

export default TableHeader;


