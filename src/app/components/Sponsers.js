import Image from "next/image";

const Sponsers = () => {
  return (
    <>
      <div
        className="absolute top-[145vh] w-screen h-[220vh] bg-[#D84A4A] bg-blend-soft-light bg-center bg-no-repeat bg-cover z-1 p-8 flex flex-col justify-center items-center gap-8"
        style={{
          backgroundImage: "url('./noisy-background.svg')",
        }}
      >
      </div>
      <div
        className="absolute top-[145vh] w-screen h-[220vh]  bg-blend-soft-light bg-center bg-no-repeat bg-cover z-100 p-8 flex flex-col justify-center items-center gap-8"
        s
      >
        <div
          className="border-2 rounded-lg py-1 px-4 bg-[#D9D9D9] flex justify-center items-center shadow-lg"
          style={{
            width: "243px",
            height: "44px",
            borderWidth: "2px",
            borderRadius: "10px",
            gap: "6px",
            boxShadow: "8px 8px 0px rgba(0, 0, 0, 1)",
          }}
        >
          OUR SPONSERS
        </div>

        <div className="flex justify-between items-center mt-20 mb-30 gap-12">
        
          <div
            style={{
              width: "200px",
              height: "200px",
              borderWidth: "4px",
            }}
            className="bg-[#D9D9D9] rounded-full border-black border-4 translate-y-26"
          ></div>

     
          <div
            style={{
              width: "200px",
              height: "200px",
              borderWidth: "4px",
            }}
            className="bg-[#D9D9D9] rounded-full border-black border-4"
          ></div>

          <div
            style={{
              width: "200px",
              height: "200px",
              borderWidth: "4px",
            }}
            className="bg-[#D9D9D9] rounded-full border-black border-4 translate-y-26"
          ></div>

          <div
            style={{
              width: "200px",
              height: "200px",
              borderWidth: "4px",
            }}
            className="bg-[#D9D9D9] rounded-full border-black border-4"
          ></div>
        </div>
        {/*
                    <div className="flex justify-center items-center gap-8 flex-wrap">
          {sponsorsData.map((sponsor, index) => (
            <div
              key={index}
              className={`bg-[#D9D9D9] rounded-full border-black border-4 flex justify-center items-center overflow-hidden ${
                index % 2 !== 0 ? "translate-y-26" : ""
              }`}
              style={{
                width: "248px",
                height: "248px",
                borderWidth: "4px",
              }}
            >
              <Image
                src={sponsor.image}
                alt={`Sponsor ${index + 1}`}
                width={248}
                height={248}
                className="rounded-full object-cover"
              />
            </div>
          ))}
        </div>
        
        */}
      </div>
    </>
  );
};

export default Sponsers;
