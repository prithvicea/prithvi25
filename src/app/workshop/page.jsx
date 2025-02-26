import React from "react";
import CenteredWorkshopCarousel from "../components/WorkshopSlider";

function Workshop() {
  return (
    <div className="flex flex-col w-screen bg-[#5458D0] ">
      <div className="flex w-screen h-fit justify-center items-center py-10">
        <button className="h-fit itim-regular text-xl bg-black shadow-black shadow-[4px_4px_2px_2px] border-2 border-black rounded-lg">
          <button className="px-6 p-1 rounded-lg bg-white uppercase">
            workshop
          </button>
        </button>
      </div>
      <div className="flex w-screen  h-fit bg-amber-600">
        <CenteredWorkshopCarousel />
      </div>
      <div className="flex flex-col lg:flex-row bg-amber-400 w-screen h-fit p-0 lg:p-20 gap-10 px-0 lg:px-10">
        <div className="flex w-screen lg:w-1/2 h-fit m-10 lg:m-0 bg-[#D9D9D9] rounded-2xl justify-center items-center border-2 border-black">
          <div className="flex-col p-5 w-1/3 h-fit">
            <img
              className="flex border-2 border-black rounded-lg w-44 h-44 "
              src="/none"
              alt="workshop"
            />
            <h1 className="flex justify-center pt-2 text-wrap">workshop</h1>
          </div>
          <div className="flex flex-col p-5 w-2/3 gap-5 h-full">
            <div className="flex flex-row justify-between border-b-2 pb-6">
              <h1 className="flex p-5 text-wrap text-2xl text-center">
                AutoCAD Design <br />
                Competition
              </h1>
              <img
                className="flex w-[100px] h-[100px] border-2 border-black rounded-lg "
                src="workshop"
                alt="workshop"
              />
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-xl">
                Registration fee- <br />
                ₹199/-
              </p>
              <button className="text-[#0E8700] text-xl border-2 h-fit px-6 bg-[#B1CFFF] border-black rounded-md">
                Register
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-screen lg:w-1/2 h-fit m-10 lg:m-0 bg-[#D9D9D9] rounded-2xl justify-center items-center border-2 border-black">
          <div className="flex-col p-5 w-1/3 h-fit">
            <img
              className="flex border-2 border-black rounded-lg w-44 h-44 "
              src="/none"
              alt="workshop"
            />
            <h1 className="flex justify-center pt-2 text-wrap">workshop</h1>
          </div>
          <div className="flex flex-col p-5 w-2/3 gap-5 h-full">
            <div className="flex flex-row justify-between border-b-2 pb-6">
              <h1 className="flex p-5 text-wrap text-2xl text-center">
                AutoCAD Design <br />
                Competition
              </h1>
              <img
                className="flex w-[100px] h-[100px] border-2 border-black rounded-lg "
                src="workshop"
                alt="workshop"
              />
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-xl">
                Registration fee- <br />
                ₹199/-
              </p>
              <button className="text-[#0E8700] text-xl border-2 h-fit px-6 bg-[#B1CFFF] border-black rounded-md">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workshop;
