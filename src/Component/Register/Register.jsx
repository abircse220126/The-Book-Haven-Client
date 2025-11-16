import React, { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [error, setError] = useState("");
  const { CreateUser, googleSignIn } = use(AuthContext);
  const [showPassword, setShowpassword] = useState(false);

  const navigate = useNavigate();

  // === Handle Submit ===

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.url.value;
    const password = e.target.password.value;

    // Client Side Validation

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    const minLengthRegex = /^.{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least one uppercase and one lowercase letter."
      );
      return;
    } else if (!minLengthRegex.test(password)) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // AddFirease Authentication with Email password
    CreateUser(email, password)
      .then((result) => {
        // console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setError(" This Email is already used");
      });

    // Add Firebase Authentication with Google
  };

  const handleGoogleRegister = () => {
    console.log("google signin button is Clicked");

    console.log(googleSignIn);
    console.log(CreateUser);

    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // handle showPassword

  const handleShowPassword = (event) => {
    event.preventDefault();
    console.log("handle show Password");
    setShowpassword(!showPassword);
    console.log(showPassword);
  };

  // === Dynamic 3D Cubes ===
  const cubes = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    depth: Math.random() * 800 - 400,
    rotateX: Math.random() * 360,
    rotateY: Math.random() * 360,
  }));

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* === Dynamic 3D Cubes Background === */}
      <div className="absolute inset-0 overflow-hidden perspective-[1000px]">
        {cubes.map((cube) => (
          <div
            key={cube.id}
            className="absolute bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-blue-600 opacity-40 shadow-[0_0_20px_rgba(255,255,255,0.3)] rounded-sm animate-cubeMotion"
            style={{
              width: `${cube.size}px`,
              height: `${cube.size}px`,
              top: `${cube.top}%`,
              left: `${cube.left}%`,
              animationDelay: `${cube.delay}s`,
              transform: `translateZ(${cube.depth}px) rotateX(${cube.rotateX}deg) rotateY(${cube.rotateY}deg)`,
            }}
          ></div>
        ))}
      </div>

      {/* === Register Card === */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-xl w-full max-w-sm p-6 text-white">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create an Account
        </h2>

        <form className="space-y-3" onSubmit={handleRegister}>
          {/* Name */}
          <div>
            <label className="block mb-1 text-xs font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-white/20 focus:bg-white/30 outline-none border border-white/30 placeholder-gray-200 focus:border-fuchsia-400 transition text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-xs font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-white/20 focus:bg-white/30 outline-none border border-white/30 placeholder-gray-200 focus:border-fuchsia-400 transition text-sm"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block mb-1 text-xs font-medium">Photo URL</label>
            <input
              type="url"
              name="url"
              placeholder="Enter photo URL"
              // value={photoUrl}
              // onChange={(e) => setPhotoUrl(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-white/20 focus:bg-white/30 outline-none border border-white/30 placeholder-gray-200 focus:border-fuchsia-400 transition text-sm"
            />
          </div>

          {/* Password */}

          <label className="block mb-1 text-xs font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-white/20 focus:bg-white/30 outline-none border border-white/30 placeholder-gray-200 focus:border-fuchsia-400 transition text-sm"
            />

            <button
              className="absolute top-2.5 right-4"
              onClick={handleShowPassword}
            >
              {
                showPassword? <FaEyeSlash />:<FaEye />  

              }
            </button>
          </div>

          {error && <h3>{error}</h3>}

          {/* Register Button */}
          <button
            type="submit"
            className="w-full mt-3 py-2 bg-gradient-to-r from-fuchsia-500 to-indigo-500 hover:from-fuchsia-600 hover:to-indigo-600 rounded-md font-semibold text-white text-sm shadow-lg transition transform hover:scale-[1.02]"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-4">
          <div className="w-1/4 h-[1px] bg-white/30"></div>
          <span className="px-3 text-xs text-gray-300">OR</span>
          <div className="w-1/4 h-[1px] bg-white/30"></div>
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleRegister}
          className="flex items-center justify-center gap-2 w-full py-2 bg-white text-gray-800 font-medium rounded-md shadow-md hover:bg-gray-100 transition text-sm"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-4 h-4"
          />
          Login with Google
        </button>

        <p className="text-xs text-center mt-5 text-gray-300">
          Already have an account?{" "}
          <span className="text-fuchsia-400 hover:underline cursor-pointer">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
