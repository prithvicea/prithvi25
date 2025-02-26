import Image from "next/image";
import WorkshopSlider from "../components/WorkshopSlider";
import WorkshopCard from "../components/WorkshopCard/WorkshopCard";
import { WorkshopData } from "./WorkshopData";


const Workshops = () => {
  return (
    <>
      <div
        className="absolute w-[100vw]  bg-[#5458D0] bg-blend-soft-light bg-center bg-no-repeat bg-cover z-1 flex flex-col justify-center items-center gap-8"
        style={{
          backgroundImage: "url('./noisy-background.svg')",
        }}
      >

        <WorkshopSlider/>
        <hr className="w-[45%] h-1  bg-white border-0 rounded-sm dark:bg-white"></hr>
        <div className="py-5">
        {WorkshopData
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

    </>
  )
}

export default Workshops