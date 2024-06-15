import React from "react";

function GenerateQR() {
  return (
    <div className="bg-gray-800 h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="flex justify-center font-thin text-white text-6xl mx-auto my-auto px-6 py-10">
          Generate QR Code
        </h1>
        <div className="w-[400px] border-2 border-gray-900 duration-500 hover:border-gray-950 border-solid rounded-3xl p-3">
          <form className="flex flex-col font-thin" action="">
            <div className="flex justify-between px-2 py-2">
              <label className=" text-white" htmlFor="employeecode">
                Employee Code :
              </label>
              <input
                id="employeecode"
                className="border-none rounded-2xl px-2 py-2 hover:opacity-90 transition-opacity duration-150"
                type="text"
                placeholder="Employee Code"
              />
            </div>

            <div className="flex justify-between px-2 py-2">
              <label className=" text-white" htmlFor="name">
                Name :
              </label>
              <input
                id="name"
                className="border rounded-2xl px-2 py-2 hover:opacity-90 transition-opacity duration-150"
                type="text"
                placeholder="Name"
              />
            </div>

            <div className="flex justify-between px-2 py-2">
              <label className=" text-white" htmlFor="licenceno">
                Vehicle Licence No. :
              </label>
              <input
                id="licenceno"
                className="border rounded-2xl px-2 py-2 hover:opacity-90 transition-opacity duration-150"
                type="text"
                placeholder="Vehicle Licence No."
              />
            </div>

            <div className="flex justify-between px-2 py-2">
              <label className=" text-white" htmlFor="rcno">
                Vehicle RC No. :
              </label>
              <input
                id="rcno"
                className="border rounded-2xl px-2 py-2 hover:opacity-90 transition-opacity duration-150"
                type="text"
                placeholder="Vehicle RC No."
              />
            </div>

            <div className="flex justify-between px-2 py-2">
              <label className=" text-white" htmlFor="insuranceno">
                Vehicle Insurance :
              </label>
              <input
                id="insuranceno"
                className="border rounded-2xl px-2 py-2 hover:opacity-90 transition-opacity duration-150"
                type="text"
                placeholder="Vehicle Insurance"
              />
            </div>

            <div className="flex justify-between px-2 py-2">
              <label className=" text-white" htmlFor="puc">
                Vehicle PUC :
              </label>
              <input
                id="puc"
                className="border rounded-2xl px-2 py-2 hover:opacity-90 transition-opacity duration-150"
                type="text"
                placeholder="Vehicle PUC"
              />
            </div>
            <button className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors focus:ring-4 focus:ring-slate-500 duration-150 bg-gray-900 rounded-lg focus:shadow-outline hover:bg-gray-950">
              Generate QR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GenerateQR;
