"use client";
import React from 'react';

const Competition = () => {
  return (
    <>
      <div
        className="absolute top-[360vh] md:top-[330vh] h-[200vh] w-full bg-[#23A323] bg-blend-soft-light bg-center bg-no-repeat bg-cover z-1 p-8 flex flex-col justify-center items-center gap-8"
        style={{
          backgroundImage: "url('./noisy-background.svg')",
        }}
      >
        {/* Title */}
        <div
          className="border-2 rounded-lg py-4 px-4 bg-[#D9D9D9] flex justify-center items-center shadow-lg mt-100"
          style={{
            width: "243px",
            height: "44px",
            borderWidth: "2px",
            borderRadius: "10px",
            gap: "2px",
            boxShadow: "8px 8px 0px rgba(0, 0, 0, 1)",
          }}
        >
          COMPETITIONS
        </div>

        {/* Competition Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-20 gap-8 md:gap-12">
          {/* Card 1 */}
          <div
            style={{
              width: "248px",
              height: "360px",
              borderWidth: "4px",
              boxShadow: "8px 8px 0px rgba(0, 0, 0, 1)",
            }}
            className="bg-[#D9D9D9] border-black border-4 competition-card"
          ></div>

          {/* Card 2 */}
          <div
            style={{
              width: "248px",
              height: "360px",
              borderWidth: "4px",
              boxShadow: "8px 8px 0px rgba(0, 0, 0, 1)",
            }}
            className="bg-[#D9D9D9] border-black border-4 competition-card"
          ></div>

          {/* Card 3 */}
          <div
            style={{
              width: "248px",
              height: "360px",
              borderWidth: "4px",
              boxShadow: "8px 8px 0px rgba(0, 0, 0, 1)",
            }}
            className="bg-[#D9D9D9] border-black border-4 competition-card"
          ></div>
        </div>
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            top: 310vh;
            height: 300vh;
          }
          .competition-card {
            width: 150px; /* Reduced width for mobile */
            height: 220px; /* Reduced height for mobile */
          }
          .flex-col {
            gap: 1rem; /* Reduce gap between cards for mobile */
          }
        }
      `}</style>
    </>
  );
};

export default Competition;