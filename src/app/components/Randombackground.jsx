'use client';

import React from "react";
import Image from "next/image"; // Assuming you're using Next.js Image component

const RandomBackground = () => {
  // Fixed positions for stars, circles, and globe
  const positions = [
    { type: "globe", x: "90%", y: "0%" }, // Globe position
    { type: "star", x: "10%", y: "15%" }, // Star 1
    { type: "star", x: "30%", y: "25%" }, // Star 2
    { type: "star", x: "50%", y: "10%" }, // Star 3
    { type: "star", x: "70%", y: "20%" }, // Star 4
    { type: "star", x: "20%", y: "40%" }, // Star 5
    { type: "star", x: "40%", y: "50%" }, // Star 6
    { type: "star", x: "60%", y: "45%" }, // Star 7
    { type: "star", x: "80%", y: "35%" }, // Star 8
    { type: "circle", x: "15%", y: "5%" }, // Circle 1
    { type: "circle", x: "35%", y: "15%" }, // Circle 2
    { type: "circle", x: "55%", y: "5%" }, // Circle 3
  ];

  return (
    <div
      className="bg-blend-soft-light bg-[#FCA24B] bg-center bg-no-repeat  h-[60vh] w-full"
      style={{
        backgroundImage: "url('./noisy-background.svg')",
        fontFamily: "Itim, serif",
      }}
    >
      {/* Render elements with fixed positions
      {positions.map((pos, index) => (
        <div
          key={index}
          className="absolute"
          style={{ left: pos.x, top: pos.y }}
        >
          <Image
            src={`/${pos.type}.svg`}
            alt={`${pos.type} svg`}
            width={pos.type === "globe" ? 40 : 10}
            height={pos.type === "globe" ? 40 : 10}
          />
        </div>
      ))} */}
    </div>
  );
};

export default RandomBackground;