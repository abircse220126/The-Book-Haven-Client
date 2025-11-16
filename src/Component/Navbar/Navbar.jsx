import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { auth } from "../FireBase/Firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const { user } = use(AuthContext);
  // console.log(signOutUser);

  const link = (
    <>
      {
        user && <>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="all-book">All Book</Link>
          </li>
          <li>
            <Link to="/addbook">Add Book</Link>
          </li>
          <li>
            <Link to="/mybook">My Book</Link>
          </li>
        </> 
        
        // <Link to="/register">Register</Link>
      }

    </>
  );


  const handleLogOut =()=>{
   signOut(auth)
   .then(()=>{})
   .catch(error =>{
    console.log(error)
   })
  }


  return (
    <div
      className="
      navbar 
      bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-700 
      shadow-lg 
      border-b border-white/10 
      backdrop-blur-xl 
      px-4
    "
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex="-1"
            className="
              menu menu-sm dropdown-content 
              mt-3 w-52 p-2 
              rounded-xl 
              bg-white/80 
              backdrop-blur 
              shadow-lg 
              text-gray-900
            "
          >
            {link}
          </ul>
        </div>
        <a className="relative inline-block cursor-pointer select-none">
          {/* Dynamic Shape */}
          <div
            className="
    absolute inset-0 
    bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500
    rounded-3xl
    shadow-xl
    animate-pulse-slow
    z-0
  "
          ></div>

          {/* Text */}
          <div className="relative z-10 px-6 py-3">
            <span className="block text-white text-sm md:text-base font-semibold tracking-wide">
              The Book
            </span>
            <span className="block text-white text-xl md:text-2xl font-extrabold tracking-tight">
              Haven
            </span>
          </div>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white font-semibold">
          {link}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        {user && (
          <div className="relative group">
            {/* User Photo */}
            <img
              src={user.photoURL}
              alt="User"
              className="w-10 h-10 rounded-full object-cover 
                   border-2 border-white shadow-md
                   hover:scale-110 transition-all duration-300 cursor-pointer"
            />

            {/* DisplayName on Hover */}
            <div
              className="absolute top-7 right-0.5 mt-2 px-3 py-2
                   bg-white/95 backdrop-blur-md
                   text-gray-900 text-sm font-semibold 
                   rounded-lg shadow-lg 
                   opacity-0 group-hover:opacity-100 
                   translate-y-2 group-hover:translate-y-0
                   transition-all duration-300 whitespace-nowrap"
            >
              {user.displayName}
            </div>
          </div>
        )}

        {/* Logout / Login Button */}
        <button onClick={handleLogOut}>

          {user ? 
          (
            <a
              className="btn bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500
                   text-white font-semibold border-none
                   shadow-md hover:shadow-xl 
                   hover:scale-105 active:scale-95
                   transition-all duration-300"
            >
              <Link to="/login">Logout</Link>
            </a>
          ) 
          : 
          (
            <a
              className="btn bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500
                   text-white font-semibold border-none
                   shadow-md hover:shadow-xl 
                   hover:scale-105 active:scale-95
                   transition-all duration-300"
            >
              <Link to="/register">Register</Link>
            </a>
          ) 
          }

         


        </button>
      </div>
    </div>
  );
};

export default Navbar;
