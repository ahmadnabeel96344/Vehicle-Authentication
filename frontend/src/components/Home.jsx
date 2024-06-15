import React from "react";
import { NavLink } from "react-router-dom";
import QrAnimation from "./QrAnimation";

function Home() {
  return (
    <div className="flex justify-start items-start w-screen h-screen">
      {/* left part */}
      <div className="flex w-[50%] gap-x-5 bg-gray-5 justify-center items-center h-screen">
        <NavLink to="/scanqr">
          <button className="btn ">
            Scan QR
          </button>
        </NavLink>
        <NavLink to="/generateqr">
          <button className="btn">
            Generate QR
          </button>
        </NavLink>
      </div>

      <QrAnimation />
    </div>
  );
}

export default Home;
