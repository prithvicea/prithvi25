"use client";
import Link from "next/link";


const data = [
    {
      name: "John Doe",
      position: "Speaker",
      price: "₹0/-",
      registration: "Open",
      description:
        "The Indian rupee (symbol: ₹; code: INR) is the official currency in the Republic of India. The rupee is subdivided into 100 paise. The issuance of the currency is controlled by the Reserve Bank of India.",
    },
    {
      name: "Jane Smith",
      position: "Mentor",
      price: "₹100/-",
      registration: "Open",
      description:
        "The Reserve Bank of India (RBI) manages currency issuance and monetary policies in India, ensuring economic stability and growth.",
    },
  ];
  

export default function Workshop() {
    return (
        <>
        <div
            className="min-h-screen bg-slate-500 py-4 animate-fadeIn"
            style={{
                backgroundImage: `linear-gradient(rgba(255, 0, 135, 0.57), rgba(255, 0, 135, 0.57)), url('./noisy-background.svg')`,
            }}
        >
            <div className="flex flex-col justify-items-center items-center gap-2">
                <div className="flex">
                    <button className="w-[246px] h-[41px] rounded-xl border-black bg-gradient-to-b from-[#D9D9D9] to-[#D9D9D9] shadow-[6px_6px_0px_#060505] font-itim text-lg hover:scale-105 transition-transform duration-300">
                        Lecture
                    </button>
                </div>

                <div className="relative w-[95%] md:w-[805px] h-[477px] border-black p-4 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                    <div className="absolute top-[5%] left-[5%] w-1/3 md:w-[228px] h-1/2 md:h-[287px] bg-[#D9D9D9] border-4 border-black rounded-lg shadow-md hidden md:block hover:scale-110 hover:shadow-xl transition duration-300"></div>

                    <div className="absolute top-[5%] right-[5%] w-1/4 text-right text-black text-sm md:text-base font-itim animate-slideInRight">
                        <p className="text-lg md:text-3xl">
                            Equip yourself with the skills to shape the future
                        </p>
                    </div>

                    <div className="absolute top-1/2 left-1/2 w-[45%] h-[50%] md:w-[228px] md:h-[287px] bg-[#D9D9D9] border-4 border-black rounded-lg shadow-md transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition duration-300"></div>

                    <div className="absolute bottom-[5%] left-[5%] w-1/4 text-left text-black text-sm md:text-base animate-slideInLeft">
                        <p className="text-lg md:text-3xl">
                            Equip yourself with the skills to shape the future
                        </p>
                    </div>

                    <div className="absolute bottom-[2%] right-[5%] w-1/3 md:w-[228px] h-1/2 md:h-[287px] bg-[#D9D9D9] border-4 border-black rounded-lg shadow-md hidden md:block hover:scale-110 transition duration-300"></div>
                </div>

                <hr className="w-[45%] h-1 mx-auto my-4 bg-white border-0 rounded-sm md:my-10 dark:bg-white"></hr>

          
                <div className="max-w-full md:max-w-[1178px] border-black p-4 mx-auto animate-fadeIn">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex flex-col items-start gap-2 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                            <p className="text-3xl md:text-4xl">Topic Name</p>
                            <div className="w-[40%] h-[35vh] md:w-[282px] md:h-[322px] bg-[#D9D9D9] border-4 border-black rounded-lg shadow-md hover:scale-110 transition duration-300"></div>
                        </div>

                        <div className="flex flex-col flex-grow pt-12 transition-all duration-500 hover:shadow-2xl hover:scale-105">
                            <div className="flex flex-row items-center gap-4">
                                <div className="w-[90px] md:w-[130px] h-[90px] md:h-[130px] bg-[#D9D9D9] border-4 border-black rounded-lg shadow-md hover:scale-110 transition-transform duration-300"></div>

                                <div className="flex flex-row w-full md:w-[78%] justify-between px-4 md:pl-[3%] md:pr-[10%]">
                                    <div className="flex flex-col">
                                        <span className="text-lg md:text-2xl">Name</span>
                                        <span className="text-lg md:text-2xl">Position</span>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-lg md:text-2xl">Registration</span>
                                        <span className="text-lg md:text-2xl">Fee - ₹0/-</span>
                                        <button className="w-[94px] h-[30px] border-2 border-black rounded-lg bg-green-300 hover:bg-green-400 hover:scale-105 transition duration-300">
                                        <Link href="/reg-form">Register</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <hr className="w-[90%] h-[3px] my-4 bg-black border-0"></hr>

                            <div>
                                <p className="font-[500] text-lg md:text-xl w-[65%]">
                                    The Indian rupee (symbol: ₹; code: INR) is the official currency in the Republic of India. The rupee is subdivided into 100 paise. The issuance of the currency is controlled by the Reserve Bank of India.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="w-[45%] h-1 mx-auto my-4 bg-white border-0 rounded-sm md:my-10 dark:bg-white"></hr>
            </div>
        </div>
        
        </>
    );
}
