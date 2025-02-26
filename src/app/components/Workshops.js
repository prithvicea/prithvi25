import Image from "next/image";
import WorkshopSlider from "./WorkshopSlider";

const Workshops = () => {
  return (
    <>
      <div
        className="absolute top-[280vh] w-[100vw] h-[100%] md:h-[140vh] bg-no-repeat bg-center z-2 flex flex-col justify-center items-center workshops-background"
        style={{
          backgroundImage: "url('./v.svg')",
          backgroundSize: "100% auto", // Default background size for larger screens
          backgroundPosition: "center", // Positioning the background image
        }}
      >
        {/* Inline styles for mobile-specific adjustments */}
        <style>{`
          @media (max-width: 768px) {
            .workshops-background {
              height: 120vh; /* Increase height for mobile */
              background-size: 150% auto; /* Increase background size for mobile */
            }
          }
        `}</style>

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

        <WorkshopSlider />
      </div>
    </>
  );
};

export default Workshops;