import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const Comment = () => {

    const {register , handleSubmit , reset}= useForm()

    const handleFormSubmit=(data)=>{
        console.log("button is clicked" , data)
        const name=data.name 
        const userImage = data.photo[0]
        const comment = data.comment

        const formData = new FormData()
        formData.append("image",userImage)


        axios.post(`https://api.imgbb.com/1/upload?key=dabfe38b5d7e8414da7cdc161eeec0a5`, formData)
        .then(res =>{
            const reviwereImage = res.data.data.url
            const updateInfo={
                name,
                reviwereImage,
                comment
            }

            axios.post(`http://localhost:3000/reviews`,updateInfo)
            .then(res =>{
                console.log(res.data.insertedId)  
                reset()
                alert("Comment posted successfully!");
            })
        })
       
    }
    
  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-5">Add a Comment</h2>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {/* Username Input */}
        <div className="flex justify-between items-center">

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              {...register("name")}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Photo File Input */}
          <div className="flex">
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Profile Photo
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
               {...register("photo")}
              accept="image/*"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

        </div>
        <div className="mt-5">
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            {...register("comment")}
            rows={3}
            placeholder="Write your comment here..."
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-black"
          />
        </div>

        {/* Submit Button - aligned on the right in larger screens */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-2.5 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
          >
            Post Comment
          </button>
        </div>
      </form>

      {/* Comment Input - full width below the top row */}
    </div>
  );
};

export default Comment;



// import axios from "axios";
// import React from "react";
// import { useForm } from "react-hook-form";

// const Comment = () => {
//   const { register, handleSubmit, reset } = useForm(); // <-- Added reset here

//   const handleFormSubmit = (data) => {
//     console.log("button is clicked", data);
//     const name = data.name;
//     const userImage = data.photo[0];
//     const comment = data.comment;

//     const formData = new FormData();
//     formData.append("image", userImage);

//     axios
//       .post(`https://api.imgbb.com/1/upload?key=dabfe38b5d7e8414da7cdc161eeec0a5`, formData)
//       .then((res) => {
//         const reviwereImage = res.data.data.url;
//         const updateInfo = {
//           name,
//           reviwereImage,
//           comment,
//         };

//         axios
//           .post(`http://localhost:3000/reviews`, updateInfo)
//           .then((res) => {
//             console.log(res.data.insertedId);

           
//             if (res.data.insertedId) {
//               reset(); 
//               alert("Comment posted successfully!"); // Optional feedback
//             }
//           });
//       })
//       .catch((error) => {
//         console.error("Error uploading:", error);
//         // Optional: show error to user
//       });
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-xl font-bold text-gray-800 mb-5">Add a Comment</h2>

//       <form onSubmit={handleSubmit(handleFormSubmit)}>
//         {/* Username Input */}
//         <div className="flex justify-between items-center">
//           <div>
//             <label
//               htmlFor="username"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Your Name
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               {...register("name")}
//               placeholder="Enter your name"
//               required
//               className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           {/* Photo File Input */}
//           <div className="flex">
//             <label
//               htmlFor="photo"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Profile Photo
//             </label>
//             <input
//               type="file"
//               id="photo"
//               name="photo"
//               {...register("photo")}
//               accept="image/*"
//               className="w-full px-4 py-2.5 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//             />
//           </div>
//         </div>
//         <div className="mt-5">
//           <label
//             htmlFor="comment"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Comment
//           </label>
//           <textarea
//             id="comment"
//             name="comment"
//             {...register("comment")}
//             rows={3}
//             placeholder="Write your comment here..."
//             required
//             className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-black"
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="flex items-center justify-center">
//           <button
//             type="submit"
//             className="w-full md:w-auto px-8 py-2.5 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
//           >
//             Post Comment
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Comment;