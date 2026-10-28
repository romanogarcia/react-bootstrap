import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/bootstrap.css";

export default function LoginBootstrap() {
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
    <div className="container-fluid vh-100 vw-100 p-0 m-0 overflow-hidden position-relative">
      {/* Back to Home Button */}
      <Link
        to="/"
        className="btn btn-outline-light btn-sm position-absolute top-0 start-0 m-3 z-3"
      >
        ← Back to Home
      </Link>

      <div className="row g-0 h-100 w-100">
        {/* Left Side: Color Block */}
        <div className="col-6 bg-dark d-flex align-items-center justify-content-center">
          <h1 className="display-3 text-white fw-bold">Company</h1>
        </div>

        {/* Right Side: Login Form */}
        <div className="col-6 bg-light d-flex align-items-center justify-content-center">
          <div
            className="card shadow-sm border-0 p-4"
            style={{ width: "100%", maxWidth: "420px" }}
          >
            <h2 className="h4 mb-4 font-weight-bold">Sign In (Bootstrap)</h2>

            {error && <div className="alert alert-danger py-2">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label text-secondary small fw-bold">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label text-secondary small fw-bold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 py-2 font-weight-bold"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
