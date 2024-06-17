import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import QrAnimation from "./QrAnimation";
// import QRCode from 'qrcode'
import QRCode from 'qrcode.react';
import { addEmployeeVehicle } from "../services/operations/employeeVehicle";

function GenerateQR() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [isVehicleAdded, setIsVehicleAdded] = useState(null);
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef(null);

  // useEffect(() => {
  //   if (canvasRef && canvasRef.current !== null) {
  //     const canvas = canvasRef.current;

  //     canvas.height = "400px";
  //     canvas.width = "400px";


  //   }
  // }, [isVehicleAdded]);

  const emailPattern =
    /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@alokind\.com$/;

  const validPattern = /^[^a-z\W_]*$|^[A-Z0-9 ]*$/;

  const finalSubmit = async (data) => {
    setLoading(true);
    const formData = {
      employeeID: Number(data.employeeCode),
      employeeData: {
        employeeCode: Number(data.employeeCode),
        employeeName: data.employeeName,
        employeeEmail: data.employeeEmail,
        licenseNumber: data.licenseNumber,
        insuranceNumber: data.insuranceNumber,
        vehicleNumber: data.numberPlate,
        puc: data.puc,
        vehicleType: data.vehicleType,
      },
    };

    const result = await addEmployeeVehicle(formData);
    console.log(result);
    if(result){
       setIsVehicleAdded(result?.employeeCode);
    }

    setLoading(false);
  };

  const downloadQR = () => {

  }

  return (
    <div className="flex justify-center items-start w-screen min-h-screen h-fit bg-gray-5">
      {/* left part */}
      <div className="no-scrollbar w-[50%] h-screen overflow-y-scroll">
        <div className=" flex flex-col w-full min-h-screen h-fit py-8 justify-center items-center gap-y-4 ">
          {/* heading */}
          <h1 className="flex justify-center font-semibold text-black text-2xl">
            Generate QR Code
          </h1>

          {isVehicleAdded === null && (
            <div className="w-[80%] h-fit min-h-[600px] bg-white rounded-[10px] shadow-md border-2 border-gray-5">
              <form
                onSubmit={handleSubmit(finalSubmit)}
                className="w-full flex flex-col gap-y-5 p-5"
              >
                {/* employee code */}
                <label className="course-label">
                  <p>
                    Employee Code{" "}
                    <span className="text-[14px] text-red-5">*</span>
                  </p>
                  <input
                    type="text"
                    id="employeeCode"
                    name="employeeCode"
                    {...register("employeeCode", {
                      required: true,
                      minLength: 8,
                    })}
                    className="course-input"
                    placeholder="Enter Employee Code"
                  />
                  {errors.employeeCode && (
                    <span className="course-error">
                      Please enter valid Employee Code
                    </span>
                  )}
                </label>

                {/* name */}
                <label className="course-label">
                  <p>
                    Employee Name{" "}
                    <span className="text-[14px] text-red-5">*</span>
                  </p>
                  <input
                    type="text"
                    id="employeeName"
                    name="employeeName"
                    {...register("employeeName", { required: true })}
                    className="course-input"
                    placeholder="Enter Employee Name"
                  />
                  {errors.employeeName && (
                    <span className="course-error">
                      Please enter Employee Name
                    </span>
                  )}
                </label>

                {/* email */}
                <label className="course-label">
                  <p>
                    Employee Email{" "}
                    <span className="text-[14px] text-red-5">*</span>
                  </p>
                  <input
                    type="email"
                    id="employeeEmail"
                    name="employeeEmail"
                    {...register("employeeEmail", {
                      required: true,
                      pattern: emailPattern,
                    })}
                    className="course-input"
                    placeholder="Enter Employee Email"
                  />
                  {errors.employeeEmail && (
                    <span className="course-error">
                      Please enter valid employee email
                    </span>
                  )}
                </label>

                {/* License no. */}
                <label className="course-label">
                  <p>
                    License Number{" "}
                    <span className="text-[14px] text-red-5">*</span>
                  </p>
                  <input
                    type="text"
                    id="licenseNumber"
                    name="licenseNumber"
                    {...register("licenseNumber", {
                      required: true,
                      pattern: validPattern,
                    })}
                    className="course-input"
                    placeholder="Enter License Number"
                  />
                  {errors.licenseNumber && (
                    <span className="course-error">
                      Please enter a valid License Number
                    </span>
                  )}
                </label>

                {/* Insurance no */}
                <label className="course-label">
                  <p>
                    Insurance Number{" "}
                    <span className="text-[14px] text-red-5">*</span>
                  </p>
                  <input
                    type="text"
                    id="insuranceNumber"
                    name="insuranceNumber"
                    {...register("insuranceNumber", {
                      required: true,
                      pattern: validPattern,
                    })}
                    className="course-input"
                    placeholder="Enter Insurance Number"
                  />
                  {errors.insuranceNumber && (
                    <span className="course-error">
                      Please enter a valid Insurance Number
                    </span>
                  )}
                </label>

                {/* Number plate */}
                <label className="course-label">
                  <p>
                    Number plate{" "}
                    <span className="text-[14px] text-red-5">*</span>
                  </p>
                  <input
                    type="text"
                    id="numberPlate"
                    name="numberPlate"
                    {...register("numberPlate", {
                      required: true,
                      pattern: validPattern,
                    })}
                    className="course-input"
                    placeholder="Enter Number plate"
                  />
                  {errors.numberPlate && (
                    <span className="course-error">
                      Please enter a valid Number plate
                    </span>
                  )}
                </label>

                {/* Number plate */}
                <label className="course-label">
                  <p>
                    Vehicle Type{" "}
                    <span className="text-[14px] text-red-5">*</span>
                  </p>
                  <select
                    type="text"
                    id="vehicleType"
                    name="vehicleType"
                    {...register("vehicleType", { required: true })}
                    className="course-input"
                    // placeholder="Enter Number plate"
                  >
                    <option value="">Select the Vehicle Type</option>
                    <option value="Bike">Bike</option>
                    <option value="Car">Car</option>
                    <option value="Truck">Truck</option>
                  </select>
                  {errors.vehicleType && (
                    <span className="course-error">Please enter a vehicle</span>
                  )}
                </label>

                {/* PUC */}
                <label className="course-label">
                  <p>
                    PUC <span className="text-[14px] text-red-5">*</span>
                  </p>
                  <input
                    type="text"
                    id="puc"
                    name="puc"
                    {...register("puc", { required: true })}
                    className="course-input"
                    placeholder="Enter PUC"
                  />
                  {errors.puc && (
                    <span className="course-error">Please enter PUC</span>
                  )}
                </label>

                {/* button */}
                <button className="btn h-[33px] w-full">Generate QR</button>
              </form>
            </div>
          )}

          {isVehicleAdded !== null && (
            <div className="w-[80%] h-fit min-h-[600px] bg-white rounded-[10px] shadow-md border-2 border-gray-5">
            <div className="w-full h-[450px] flex justify-center items-center">
              <QRCode id="" value={isVehicleAdded} bgColor="#FFFFFF" fgColor="#000" size={"250"} />
            {/* <canvas
                ref={canvasRef}
                className="bg-gray-25 "
              /> */}
            </div>

            <div className="w-full h-[80px] flex items-center justify-center gap-x-5">
              <button onClick={() => setIsVehicleAdded(null)} className="btn">Back</button>
              <button onClick={downloadQR} className="btn">Download</button>
            </div>
            </div>
          )}
        </div>
      </div>

      <QrAnimation />
    </div>
  );
}

export default GenerateQR;
