import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="flex justify-center items-center bg-gray-800 h-screen">
        <NavLink to="/scanqr">
          <button className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors focus:ring-4 focus:ring-slate-500 duration-150 bg-gray-900 rounded-lg focus:shadow-outline hover:bg-gray-950">
            Scan QR
          </button>
        </NavLink>
        <NavLink to="/generateqr">
          <button className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors focus:ring-4 focus:ring-slate-500 duration-150 bg-gray-900 rounded-lg focus:shadow-outline hover:bg-gray-950">
            Generate QR
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
