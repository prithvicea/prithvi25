"use client";
import Image from "next/image";

const Sponsers = () => {
  return (
    <>
      {/* Background Div */}
      <div
        className="absolute top-[145vh] w-screen h-[220vh] bg-[#D84A4A] bg-blend-soft-light bg-center bg-no-repeat bg-cover z-1 p-8 flex flex-col justify-center items-center gap-8"
        style={{
          backgroundImage: "url('./noisy-background.svg')",
        }}
      ></div>

      {/* Content Div */}
      <div
        className="title absolute top-[145vh] w-screen h-[220vh] bg-blend-soft-light bg-center bg-no-repeat bg-cover z-100 p-8 flex flex-col justify-center items-center gap-8"
      >
        {/* Title */}
        <div
          className="border-2 rounded-lg py-1 px-4 bg-[#D9D9D9] flex justify-center items-center shadow-lg"
          style={{
            width: "243px",
            height: "44px",
            borderWidth: "2px",
            borderRadius: "10px",
            gap: "6px",
            boxShadow: "8px 8px 0px rgba(0, 0, 0, 1)",
          }}
        >
          OUR SPONSERS
        </div>

        {/* Sponsors Grid */}
        <div className="handle flex flex-wrap justify-center items-center mt-20 mb-30 gap-8 md:gap-12">
          {/* Sponsor Circle 1 */}
          <div
            style={{
              width: "150px", // Smaller size for mobile
              height: "150px", // Smaller size for mobile
              borderWidth: "4px",
            }}
            className="bg-[#D9D9D9] rounded-full border-black border-4 translate-y-26 md:translate-y-26 sponsor-circle"
          ></div>

          {/* Sponsor Circle 2 */}
          <div
            style={{
              width: "150px", // Smaller size for mobile
              height: "150px", // Smaller size for mobile
              borderWidth: "4px",
            }}
            className="bg-[#D9D9D9] rounded-full border-black border-4 sponsor-circle"
          ></div>

          {/* Sponsor Circle 3 */}
          <div
            style={{
              width: "150px", // Smaller size for mobile
              height: "150px", // Smaller size for mobile
              borderWidth: "4px",
            }}
            className="bg-[#D9D9D9] rounded-full border-black border-4 translate-y-26 md:translate-y-26 sponsor-circle"
          ></div>

          {/* Sponsor Circle 4 */}
          <div
            style={{
              width: "150px", // Smaller size for mobile
              height: "150px", // Smaller size for mobile
              borderWidth: "4px",
            }}
            className="bg-[#D9D9D9] rounded-full border-black border-4 sponsor-circle"
          ></div>
        </div>

        {/* Mobile-specific styles */}
        <style jsx>{`
  @media (max-width: 768px) {
    .title {
      top: 145vh; /* Adjust top position for mobile */
    }
    .handle {
          margin-top:2vh;
      display: grid; /* Keep the grid layout */
      grid-template-columns: repeat(2, 1fr); /* Two columns for mobile */
      gap: 1rem; /* Reduce gap between sponsor circles for mobile */
    }
    .sponsor-circle {
      width: 120px; /* Further reduce size for smaller mobile screens */
      height: 120px; /* Further reduce size for smaller mobile screens */
      transform: translateX(0); /* Reset translation if needed */
    }
  }
`}</style>
      </div>
    </>
  );
};

export default Sponsers;