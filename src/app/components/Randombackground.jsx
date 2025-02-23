import React from "react";
import Image from "next/image";
import styles from "@/app/styles/back.module.css" 


const RandomBackground = () => {

  const positions = [
    { type: "globe", x: "90%", y: "0%" }, // Globe position
    { type: "globr", x: "10%", y: "15%" }, // Star 1
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

    <>
    <div
  className="h-[100vh] w-screen relative flex items-center justify-center h-screen bg-blend-soft-light bg-[#FCA24B] bg-center bg-no-repeat w-full mb-0"
  style={{
    backgroundImage: "url('./noisy-background.svg')",
    fontFamily: "Itim, serif",
  }}
>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4">
    <div>
      <Image src="./Group 24.svg" alt="logo" width={46.5} height={50} />
    </div>
    <div className="text-center">
      <div
        style={{
          fontFamily: "Rusoile Demo",
          fontWeight: "400",
          fontSize: "32px",
          lineHeight: "49.6px",
        }}
        className="font-rusoile"
      >
        Civil Engineering Association presents
      </div>
    </div>
    <div>
      <Image
        className={styles.title}
        src="./title.svg"
        alt="Prithvi title"
        width={656}
        height={172}
      />
    </div>
  </div>

  {positions.map((pos, index) => (
    <div key={index} className="absolute" style={{ left: pos.x, top: pos.y }}>
      <Image
        src={`/${pos.type}.svg`}
        alt={`${pos.type} svg`}
        width={pos.type === "globr" ? 40 : 10}
        height={pos.type === "globr" ? 40 : 10}
      />
    </div>
  ))}
</div>









   
    </>
  );
};

export default RandomBackground;