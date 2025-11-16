import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const Login = () => {
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

  const { signInUser } = use(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Button is Clicked");
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setError("Email or Password is Invalid");
      });
  };

  const handleGoogleLogin = () => {
    console.log("Google button is Clicked");
  };

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

      {/* === Login Card === */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-xl w-full max-w-sm p-6 text-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Login Now</h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label className="block mb-1 text-xs font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md bg-white/20 focus:bg-white/30 outline-none border border-white/30 placeholder-gray-200 focus:border-fuchsia-400 transition text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-xs font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 rounded-md bg-white/20 focus:bg-white/30 outline-none border border-white/30 placeholder-gray-200 focus:border-fuchsia-400 transition text-sm"
            />
          </div>

          {error && <h2>{error}</h2>}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full mt-3 py-2 bg-gradient-to-r from-fuchsia-500 to-indigo-500 hover:from-fuchsia-600 hover:to-indigo-600 rounded-md font-semibold text-white text-sm shadow-lg transition transform hover:scale-[1.02]"
          >
            Login
          </button>
          <button className="link-hover">
            <p className="text-xs text-start mt-5 text-gray-300">
            Forgate Password?{" "}
          </p>
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-4">
          <div className="w-1/4 h-[1px] bg-white/30"></div>
          <span className="px-3 text-xs text-gray-300">OR</span>
          <div className="w-1/4 h-[1px] bg-white/30"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
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
          Don’t have an account?{" "}
          <span className="text-fuchsia-400 hover:underline cursor-pointer">
            <Link to="/register">Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
