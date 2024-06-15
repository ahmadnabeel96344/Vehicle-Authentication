import React from 'react'
import QRimg from "../assets/QRimg.png";
import { TypeAnimation } from "react-type-animation";

const QrAnimation = () => {
  return (
    
    <div className="w-[50%] min-h-screen h-full flex flex-col items-center justify-center gap-y-5 bg-black">
    {/* QR img */}
    <div className="flex justify-center items-center overflow-hidden w-[250px] h-[250px] bg-white rounded-[10px] border-2 border-gray-25">
      <img src={QRimg} alt="" className="h-full object-cover" />
    </div>

    {/* type animation */}
    <TypeAnimation
      sequence={[
        "Generate QR Codes with Ease",
        1000,
        "Produce Custom QR Codes Instantly",
        1000,
        "Scan to Access Special Features",
        1000,
        "Allow Users to Engage Effortlessly",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "18px", display: "inline-block", color: "white" }}
      repeat={Infinity}
    />
  </div>
  )
}

export default QrAnimation