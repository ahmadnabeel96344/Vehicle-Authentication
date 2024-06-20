import React, { useEffect, useState } from "react";
import QrAnimation from "./QrAnimation";
import { Html5QrcodeScanner } from "html5-qrcode";
import { fetchEVInfo } from "../services/operations/employeeVehicle";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import deniedPNG from "../assets/denied.png";
function ScanQR() {
  const [isQrScanned, setIsQrScanned] = useState(null);
  const [updateScanner, setUpdateScanner] = useState(false);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 350,
        height: 350,
      },
      fps: 5,
    });

    async function success(result) {
      scanner.clear();
      // console.log("EmployeeID- ", result);
      const employeeCode = Number(result);

      const response = await fetchEVInfo(employeeCode);

      if (response) {
        setIsQrScanned(response);
      }
    }

    function error() {
      console.error(error);
    }

    scanner.render(success, error);
  }, [updateScanner]);

  const navigate = useNavigate();
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
          <div
            className={`w-[80%] h-fit min-h-[600px] bg-white rounded-[10px] shadow-md border-2 border-gray-5 flex justify-center items-center ${
              isQrScanned === null ? "flex-col" : "flex-row"
            }`}
          >
            {isQrScanned === null && <div id="reader"></div>}

            {isQrScanned !== null && (
              <div className="w-full h-fit flex flex-col gap-y-3 justify-center items-center ">
                {isQrScanned?.employeeCode !== null &&
                  isQrScanned?.employeeCode !== undefined && (
                    <div className="w-[90%] min-h-[400px] h-fit py-4 bg-green-5 bg-opacity-20 rounded-[10px] border-2 border-green-25 flex flex-col gap-y-2 ">
                      <p className="text-[24px] font-bold font-sans text-green-25 w-full text-center flex justify-center items-center gap-x-2">
                        Access Granted
                        <RiVerifiedBadgeFill className="text-[30px]" />
                      </p>

                      <div className="w-full flex flex-col gap-y-2 my-5">
                        <p className="employee-details">
                          <span>Employee Code</span>
                          <span>{isQrScanned?.employeeCode}</span>
                        </p>

                        <p className="employee-details">
                          <span>Employee Name</span>
                          <span>{isQrScanned?.employeeName}</span>
                        </p>

                        <p className="employee-details">
                          <span>Employee Email</span>
                          <span>{isQrScanned?.employeeEmail}</span>
                        </p>

                        <p className="employee-details">
                          <span>License Number</span>
                          <span>{isQrScanned?.licenseNumber}</span>
                        </p>

                        <p className="employee-details">
                          <span>Insurance Number</span>
                          <span>{isQrScanned?.insuranceNumber}</span>
                        </p>

                        <p className="employee-details">
                          <span>Vehicle Number</span>
                          <span>{isQrScanned?.vehicleNumber}</span>
                        </p>

                        <p className="employee-details">
                          <span>Vehicle Type</span>
                          <span>{isQrScanned?.vehicleType}</span>
                        </p>

                        <p className="employee-details">
                          <span>PUC</span>
                          <span>{isQrScanned?.puc}</span>
                        </p>
                      </div>
                    </div>
                  )}

                {isQrScanned?.employeeCode === null ||
                  (isQrScanned?.employeeCode === undefined && (
                    <div className="w-[90%] min-h-[400px] h-fit py-4 bg-red-5 bg-opacity-20 rounded-[10px] border-2 border-red-5  flex flex-col gap-y-2 justify-start">
                      <p className="text-[24px] font-bold font-sans text-red-5 w-full text-center flex justify-center items-center gap-x-2">
                        Access Denied
                        <div className="w-[30px] h-[30px] flex justify-center items-center">
                        <img src={deniedPNG} className="h-[30px] object-cover" />
                      </div>
                      </p>

                      <p className="text-[16px] w-full text-center font-sans font-semibold text-red-5">
                        Employee Vehicle not registered.Please try again.
                      </p>

                      {/* <div className="w-full h-[200px] flex justify-center items-center">
                        <img src={deniedPNG} className="w-[200px] h-[200px]" />
                      </div> */}
                    </div>
                  ))}

                <div className="w-full h-[80px] flex justify-center items-center gap-x-4">
                  <button
                    onClick={() => {
                      setIsQrScanned(null);
                      setUpdateScanner(true);
                    }}
                    className="btn"
                  >
                    Scan Again
                  </button>
                </div>
              </div>
            )}

            {isQrScanned === null && (
              <div className="w-full h-[80px] flex flex-col justify-center items-center my-5 gap-5">
                <div className="w-[70%] flex items-center justify-center gap-x-3">
                  <div className="w-full h-[1px] bg-gray-25"></div>
                  <p className="text-[15px] text-gray-25">OR</p>
                  <div className="w-full h-[1px] bg-gray-25"></div>
                </div>
                <button onClick={() => navigate("/generateqr")} className="btn">
                  Generate QR
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <QrAnimation />
    </div>
  );
}

export default ScanQR;
