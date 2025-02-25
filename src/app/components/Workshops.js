import Image from "next/image";
import WorkshopSlider from "./WorkshopSlider";

const Workshops = () => {
  return (
    <>
      <div
        className="absolute top-[340vh] w-[100vw] h-[110vh] bg-no-repeat bg-center bg-[length:100%_auto] z-2 flex flex-col justify-center" style={{
          backgroundImage: "url('./v.svg')",
          backgroundSize: "100% auto", // Adjust width & height of the background image
          backgroundPosition: "center", // Positioning the background image

        }}
      >

        <WorkshopSlider/>
      </div>

    </>
  )
}

export default Workshops