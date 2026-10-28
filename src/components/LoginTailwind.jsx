import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/tailwind.css";

export default function LoginTailwind() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      alert("Login successful!");
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex w-screen h-screen overflow-hidden relative">
      {/* Back to Home Button */}
      <Link
        to="/"
        className="absolute top-4 left-4 z-10 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-lg backdrop-blur-md transition border border-white/10"
      >
        ← Back to Home
      </Link>

      {/* Left Side: Color Block */}
      <div className="w-1/2 bg-slate-900 flex items-center justify-center p-8">
        <h1 className="text-5xl font-extrabold text-white tracking-wide">
          Company
        </h1>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-1/2 bg-gray-50 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Sign In (Tailwind)
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition duration-200"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
