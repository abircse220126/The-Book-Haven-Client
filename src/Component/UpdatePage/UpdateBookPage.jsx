import {} from "react";
import { data, useLoaderData, useNavigate } from "react-router";


const UpdateBookPage = () => {
    const updateBook=useLoaderData()
    console.log(updateBook)
    const navigate =useNavigate()

    

    const handleUpdate=(e)=>{
        e.preventDefault()

        // console.log(title , author , genre , rating, summary)
        const summary = e.target.summary.value
        const title = e.target.title.value
        const author = e.target.author.value
        const genre = e.target.genre.value
        const rating = e.target.rating.value
        // console.log(summary , title ,author , genre, rating)

        const updateInfo={
            title,
            author,
            genre,
            rating,
            summary
        }

        fetch(`http://localhost:3000/update-book/${updateBook._id}`,{
            method:"PATCH",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateInfo)

        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            navigate("/mybook")
        })




    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 py-10 px-4">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
        {/* Header */}
        <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-8">
          Update Book Information
        </h2>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleUpdate}>
          {/* Title */}
          <div>
            <label className="block text-white font-medium mb-2">Book Title</label>
            <input
              type="text"
              name="title"
              defaultValue={updateBook.title}
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-white font-medium mb-2">Author</label>
            <input
              type="text"
              name="author"
              defaultValue={updateBook.author}
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Genre and Rating */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-medium mb-2">Genre</label>
              <input
                type="text"
                name="genre"
                defaultValue={updateBook.genre}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Rating</label>
              <input
                type="number"
                name="rating"
                step="0.1"
                defaultValue={updateBook.rating}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
          </div>

          {/* Summary */}
          <div>
            <label className="block text-white font-medium mb-2">Summary</label>
            <textarea
              defaultValue={updateBook.summary}
              rows="4"
              name="summary"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
            ></textarea>
          </div>

          {/* Cover Image URL */}
          <div>
            <label className="block text-white font-medium mb-2">Cover Image URL</label>
            <input
              type="text"
              defaultValue="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300"
            >
              Update Book
            </button>

            <button
              type="button"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </form>

        {/* Confirmation Message (static placeholder) */}
        <div className="mt-8 text-center">
          <p className="text-green-300 font-semibold hidden">
            ✅ Book details updated successfully!
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpdateBookPage;
