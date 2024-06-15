import React, { useState } from "react";
import QrAnimation from "./QrAnimation";

function ScanQR() {
  const[isQrScanned, setIsQrScanned] = useState(false)
  
  return (
    <div className="flex justify-center items-start w-screen min-h-screen h-fit bg-gray-5">
      {/* left part */}
      <div className="no-scrollbar w-[50%] h-screen overflow-y-scroll">
        <div className=" flex flex-col w-full min-h-screen h-fit py-8 justify-center items-center gap-y-4 ">
          {/* heading */}
          <h1 className="flex justify-center font-semibold text-black text-2xl">
            Scan QR Code
          </h1>

          {/* form and button */}
          <div className="w-[80%] h-fit min-h-[600px] bg-white rounded-[10px] shadow-md border-2 border-gray-5">
            
          </div>
        </div>
      </div>

      <QrAnimation />
    </div>
  );
}

export default ScanQR;
