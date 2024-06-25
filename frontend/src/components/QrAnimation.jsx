import React, { useEffect, useState } from 'react'
import QRimg from "../assets/QRimg.png";
import PhoneImg from "../assets/phone.png"
import { TypeAnimation } from "react-type-animation";
import { useLocation } from 'react-router-dom';

const QrAnimation = () => {
  const path = useLocation().pathname;
  const [page, setPage] = useState(null);
  useEffect(() => {
     setPage(path)  
  },[path])
  return (
    
    <div className="w-[50%] min-h-screen h-full hidden lg:flex flex-col items-center justify-center gap-y-5 bg-black">
    {/* QR img */}
    {
      page === "/" ? (
        <div className="flex justify-center items-center overflow-hidden w-[250px] h-[250px] bg-white rounded-[10px] border-2 border-gray-25">
      <img src={QRimg} alt="" className="h-full object-cover" />
    </div>
      ) : (
        <div className="flex justify-center items-center overflow-hidden w-[250px] h-[250px] bg-white rounded-full border-2 border-gray-25">
        <img src={PhoneImg} alt="" className="h-full object-cover scale-125" />
      </div>
      )
    }

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