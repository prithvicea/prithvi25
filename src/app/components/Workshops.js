import Image from "next/image";

const Workshops = () => {
  return (
    <>
    <div
        className="absolute top-[340vh] w-[100vw] h-full   z-10  flex flex-col justify-center " style={{
          backgroundImage: "url('./noisy-background.svg')",
        }}
      >

<img
        src="./v.svg"
        alt="Wavy Border"
        // width={1920}
        // height={1080}
        
         className="w-full h-auto object-cover max-w-full"
      />

      </div>
    
    </>
  )
}

export default Workshops