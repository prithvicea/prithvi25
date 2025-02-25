import Image from "next/image";
import WorkshopSlider from "./WorkshopSlider";

const Workshops = () => {
  return (
    <>
      <div
        className="absolute top-[300vh] w-[100vw] h-[120vh] bg-no-repeat bg-center bg-[length:100%_auto] z-2 flex flex-col justify-center items-center" style={{
          backgroundImage: "url('./v.svg')",
          backgroundSize: "100% auto", // Adjust width & height of the background image
          backgroundPosition: "center", // Positioning the background image

        }}
      >
        <div
          className="border-2 rounded-lg py-5 px-2 bg-[#D9D9D9] flex justify-center items-center shadow-lg mt-50"
          style={{
            width: "243px",
            height: "36px",
            borderWidth: "2px",
            borderRadius: "10px",
            gap: "2px",
            boxShadow: "8px 8px 0px rgba(0, 0, 0, 1)",
          }}
        >
          WORKSHOPS
        </div>

        <WorkshopSlider/>
      </div>

    </>
  )
}

export default Workshops