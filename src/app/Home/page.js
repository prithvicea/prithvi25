import Image from "next/image";
import RandomBackground from "../components/Randombackground";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
     <div
     className="bg-cover bg-center bg-no-repeat h-[100vh] w-full "
     style={{
    backgroundImage: "url('./noisy-background.svg')",
    fontFamily: "Itim, serif",
  }}
>
<Navbar />
<RandomBackground />
<div
  className="h-[65vh] absolute top-[48vh] w-full flex flex-col items-center justify-center bg-blend-soft-light bg-[#066868] bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('./noisy-background.svg')",
    clipPath: "ellipse(100% 80% at 50% 100%)",
  }}
>
</div>

</div>
  </>

  );
}
