import Image from "next/image";
 

const About = () => {
  return (
    <>
        <div className="h-[65vh] absolute top-[75vh] -mt-24 w-screen flex flex-col items-center justify-center">
  <div
    className="h-[65vh] absolute w-full flex flex-col items-center justify-center bg-black z-10"
    style={{
      clipPath: "ellipse(100% 81% at 50% 100%)",
    }}
  >
    <div
      className="w-full h-screen bg-blend-soft-light bg-[#066868] bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('./noisy-background.svg')",
        clipPath: "ellipse(100% 80% at 50% 100%)",
      }}
    ></div>
  </div>

  <div className="absolute right-14 top-3 z-20">
    <div className="flex flex-col items-center">
      <Image
        src="/Sign Board.svg"
        alt="Sign board"
        width={20}
        height={60}
        className="w-30 h-auto"
      />
    </div>
  </div>

  <div className="absolute left-12 top-20 z-20">
    <Image
      src="/rocket.svg"
      alt="Rocket"
      width={40}
      height={40}
      className="w-20"
    />
  </div>

  <div className="relative z-30 container mx-auto px-4 py-12 flex flex-wrap items-center justify-between top-15">
    <div className="w-full md:w-1/2 flex items-center justify-center">
      <div className="relative w-48 h-60">
        <div className="absolute w-48 h-55 bg-white rounded-2xl border-4 border-black shadow-lg top-40 left-[-140px] z-0"></div>
        <div className="absolute w-48 h-55 bg-white rounded-2xl border-4 border-black shadow-lg z-10"></div>
        <div className="absolute w-48 h-55 bg-white rounded-2xl border-4 border-black shadow-lg top-35 left-25 z-20"></div>
      </div>
    </div>

    <div className="w-full md:w-1/2 mt-8 md:mt-0 text-white">
      <h2 className="text-2xl font-semibold mb-4">
        PRITHVI 2025 - Engineering Excellence
      </h2>
      <p className="text-lg mb-6 leading-relaxed">
        PRITHVI, the flagship intercollegiate civil engineering fest, is back in
        2025, celebrating engineering excellence and innovation! Known for its
        groundbreaking editions, PRITHVI returns with bigger ideas, inspiring
        collaborations, and unparalleled technical brilliance. Join us on this
        extraordinary journey to shape the future of engineering together!
      </p>
      <div className="flex space-x-4">
        <Image
          src="/logo1.svg"
          alt="Logo 1"
          width={4}
          height={4}
          className="h-10 w-auto"
        />
        <Image
          src="/logo2.svg"
          alt="Logo 2"
          width={4}
          height={4}
          className="h-10 w-auto"
        />
      </div>
    </div>
  </div>
  

                 
                 
  <div className="relative w-full">

  <div
    className="absolute  left-0 w-full h-[60vh] z-20 bg-[#066868] bg-blend-soft-light bg-center bg-no-repeat bg-cover"
    style={{
      backgroundImage: "url('./noisy-background.svg')",
    }}
  ></div>

  
  <Image
    className="w-full h-auto absolute  z-30"
    src="/curve.svg"
    alt="Wave background"
    width={1920}
    height={200}
    style={{ backgroundColor: "transparent" }}
  />

  
  <div
    className="absolute top-[30vh] w-full h-screen bg-[#D84A4A] bg-blend-soft-light bg-center bg-no-repeat bg-cover z-10"
    style={{
      backgroundImage: "url('./noisy-background.svg')",
    }}
  ></div>
</div>

                 
                 
                
</div>


    
    </>
  )
}

export default About