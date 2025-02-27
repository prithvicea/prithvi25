import Image from "next/image";
import WorkshopSlider from "../components/WorkshopSlider";
import WorkshopCard from "../components/WorkshopCard/WorkshopCard";
import { WorkshopData } from "./WorkshopData";


const Workshops = () => {
  return (
    <>
      <div
        className="absolute w-[100vw] bg-[#5458D0] bg-blend-soft-light bg-center bg-no-repeat bg-cover z-1 flex flex-col justify-center items-center gap-8"
        style={{
          backgroundImage: "url('./noisy-background.svg')",
        }}
      >
        <div className="font-itim text-[1.6rem] w-[243px] h-[44px] flex justify-center items-center bg-[#D9D9D9] border-2 border-black rounded-[10px] shadow-[8px_8px_0px_rgba(0,0,0,1)] mt-24">
          Competitions
        </div>
        <WorkshopSlider />
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