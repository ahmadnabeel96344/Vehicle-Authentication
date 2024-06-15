import React from "react";

function ScanQR() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-800 h-screen">
      <h1 className="font-thin text-white text-6xl px-6 py-10">
          Scan QR Code
        </h1>
      <button className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors focus:ring-4 focus:ring-slate-500 duration-150 bg-gray-900 rounded-lg focus:shadow-outline hover:bg-gray-950">
        Scan QR
      </button>
    </div>
  );
}

export default ScanQR;
