

import Link from "next/link";

function WorkshopCard({
  workshopName,
  workshopFee,
  facultyName,
  facultyImage,
  workshopImage,
}) {
 
  return (
    <div className="flex flex-col lg:flex-row w-fit mx-5 lg:mx-0 lg:w-1/2 h-fit lg:m-0 bg-[#D9D9D9] rounded-2xl justify-center items-center border-2 border-black">
      <div className="flex-col p-5 w-fit lg:w-1/3 h-fit place-items-center ">
        <img
          className="flex border-2 items-center border-black rounded-lg  object-cover w-44 h-44 "
          src={facultyImage}
          alt="faculty"
        />
        <h1 className="flex itim-regular justify-center pt-2">{facultyName}</h1>
      </div>
      <div className="flex flex-col p-5 w-fit lg:w-2/3 gap-5 h-full">
        <div className="flex flex-row justify-between items-center border-b-2 lg:border-t-0 border-t-2 py-6">
          <h1 className="flex p-5 px-3 sm:px-10 text-wrap text-2xl itim-regular text-center">
            {workshopName}
          </h1>
          <img
            className="flex w-[100px] h-[100px] border-2 object-cover object-center border-black rounded-lg "
            src={workshopImage}
            alt="workshop"
          />
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-xl itim-regular text-wrap">
            Registration fee- <br />₹{workshopFee}/-
          </p>
          <button
            className="text-[#0E8700] text-xl border-2 h-fit px-6 itim-regular bg-[#B1CFFF] border-black rounded-md hover:cursor-pointer hover:bg-[#93beff] hover:text-[#447a3e] "
          
          >
            <Link href={`/reg-form?topic=${encodeURIComponent(workshopName)}`}>Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkshopCard;
