import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import WorkshopSlider from "../components/WorkshopSlider/WorkshopSlider"

export default function Home() {
  return (
    <>
    <div>
    <Navbar />
    <WorkshopSlider/>
   </div>
  </>

  );
}
