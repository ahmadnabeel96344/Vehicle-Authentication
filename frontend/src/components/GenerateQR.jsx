import React from "react";
import { useForm } from "react-hook-form";
import QrAnimation from "./QrAnimation";

function GenerateQR() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex justify-center items-start w-screen min-h-screen h-fit bg-gray-5">

      {/* left part */}
      <div className="no-scrollbar w-[50%] h-screen overflow-y-scroll">
        <div className=" flex flex-col w-full min-h-screen h-fit py-8 justify-center items-center gap-y-4 ">
          
          {/* heading */}
          <h1 className="flex justify-center font-semibold text-black text-2xl">
            Generate QR Code
          </h1>

          {/* form and button */}
          <div className="w-[80%] h-fit min-h-[600px] bg-white rounded-[10px] shadow-md border-2 border-gray-5">
            <form className="w-full flex flex-col gap-y-5 p-5">
              {/* employee code */}
              <label className="course-label">
                <p>Employee Code</p>
                <input
                  type="text"
                  id="employeeCode"
                  name="employeeCode"
                  {...register("employeeCode", { required: true })}
                  className="course-input"
                  placeholder="Enter Employee Code"
                />
                {errors.employeeCode && (
                  <span className="course-error">
                    Please enter Employee Code
                  </span>
                )}
              </label>

              {/* name */}
              <label className="course-label">
                <p>Employee Name</p>
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

              {/* Lisence no. */}
              <label className="course-label">
                <p>License Number</p>
                <input
                  type="text"
                  id="licensenumber"
                  name="licensenumber"
                  {...register("licensenumber", { required: true })}
                  className="course-input"
                  placeholder="Enter License Number"
                />
                {errors.licensenumber && (
                  <span className="course-error">
                    Please enter License Number
                  </span>
                )}
              </label>

              {/* Insurance no */}
              <label className="course-label">
                <p>Insurance Number</p>
                <input
                  type="text"
                  id="insuranceNumber"
                  name="insuranceNumber"
                  {...register("insuranceNumber", { required: true })}
                  className="course-input"
                  placeholder="Enter Insurance Number"
                />
                {errors.insuranceNumber && (
                  <span className="course-error">
                    Please enter Insurance Number
                  </span>
                )}
              </label>

              {/* Number plate */}
              <label className="course-label">
                <p>Number plate</p>
                <input
                  type="text"
                  id="numberPlate"
                  name="numberPlate"
                  {...register("numberPlate", { required: true })}
                  className="course-input"
                  placeholder="Enter Number plate"
                />
                {errors.numberPlate && (
                  <span className="course-error">
                    Please enter Number plate
                  </span>
                )}
              </label>

              {/* PUC */}
              <label className="course-label">
                <p>PUC</p>
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
        </div>
      </div>

      <QrAnimation />
    </div>
  );
}

export default GenerateQR;
