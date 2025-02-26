import WorkshopSlider from "./WorkshopSlider";
import styles from "../styles/Workshop.module.css";

const Workshops = () => {
  return (
    <div
      className={`${styles.workshopsBackground} absolute inset-0 top-[280vh] w-[100vw] h-[100%] md:h-[140vh] bg-no-repeat bg-center z-2 flex flex-col justify-center items-center`}
    >
      <div
        className="border-2 rounded-lg py-5 px-2 bg-[#D9D9D9] flex justify-center items-center shadow-lg mt-20"
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
  );
};

export default Workshops;
