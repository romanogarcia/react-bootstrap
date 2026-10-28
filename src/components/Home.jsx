import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-slate-900 text-white font-sans">
      <div className="text-center max-w-xl p-8 bg-slate-800 rounded-2xl shadow-2xl border border-slate-700">
        <h1 className="text-4xl font-extrabold mb-4 tracking-tight">
          CSS Framework Comparison
        </h1>
        <p className="text-slate-400 mb-8">
          Choose a version below to test the identical split-screen layout
          styled with different frameworks.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            to="/tailwind"
            className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold rounded-xl transition shadow-lg"
          >
            Tailwind Version
          </Link>
          <Link
            to="/bootstrap"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition shadow-lg"
          >
            Bootstrap Version
          </Link>
        </div>
      </div>
    </div>
  );
}
