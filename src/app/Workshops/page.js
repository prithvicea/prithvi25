import Image from "next/image";
import WorkshopSlider from "../components/WorkshopSlider";
import WorkshopCard from "../components/WorkshopCard/WorkshopCard";

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
        <WorkshopCard/>
      </div>

    </>
  )
}

export default Workshops