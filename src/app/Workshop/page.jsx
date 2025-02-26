"use client";
import React, { useState } from "react";
import CenteredWorkshopCarousel from "../components/WorkshopSlider";
import WorkshopCard from "../components/WorkshopCard/WorkshopCard";
import { WorkshopData } from "./WorkshopData";
import Footer from "../components/Footer";

function Workshop() {
  const [index, setIndex] = useState(0);
  const workshopData = WorkshopData;
  return (
    <div
      className="flex flex-col w-screen  "
      style={{
        backgroundImage: `linear-gradient(rgba(30, 80, 255, 0.57), rgba(30, 80, 255, 0.57)), url('./noisy-background.svg')`,
      }}
    >
      <div className="flex w-screen h-fit justify-center items-center py-10">
        <div className="h-fit itim-regular text-xl bg-black shadow-black shadow-[4px_4px_2px_2px] border-2 border-black rounded-lg">
          <button className="px-6 p-1 rounded-lg bg-white uppercase">
            workshop
          </button>
        </div>
      </div>
      <div className="flex w-screen h-fit">
        <CenteredWorkshopCarousel />
      </div>
      <div className="py-5">
        {workshopData
          .reduce((rows, data, index) => {
            if (index % 2 === 0) {
              rows.push([data]);
            } else {
              rows[rows.length - 1].push(data);
            }
            return rows;
          }, [])
          .map((pair, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row justify-center items-center w-screen py-5 h-fit gap-10 lg:px-10"
            >
              {pair.map((data, idx) => (
                <WorkshopCard
                  key={idx}
                  workshopName={data.workshopName}
                  workshopFee={data.workshopFee}
                  workshopImage={data.workshopImage}
                  facultyName={data.facultyName}
                  facultyImage={data.facultyImage}
                />
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Workshop;
