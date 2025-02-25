import React from 'react'

const Lecture = () => {
  return (
    <>
      <div
        className="absolute top-[395vh] w-screen  bg-[#23A323] bg-blend-soft-light bg-center bg-no-repeat bg-cover  p-8 flex flex-col justify-center items-center gap-8"
        style={{
          backgroundImage: "url('./noisy-background.svg')",
        }}
      >
        <div
          className="border-2 rounded-lg py-8 px-4 bg-[#D9D9D9] flex justify-center items-center shadow-lg mt-140"
          style={{
            width: "243px",
            height: "44px",
            borderWidth: "2px",
            borderRadius: "10px",
            gap: "6px",
            boxShadow: "8px 8px 16px rgba(0, 0, 0, 1)",
          }}
        >
          COMPETITIONS
        </div>

        <div className="flex justify-center items-center mb-30 gap-12">


          <div
            style={{
              width: "248px",
              height: "360px",
              borderWidth: "4px",
              boxShadow: "8px 8px 16px rgba(0, 0, 0, 1)"
            }}
            className="bg-[#D9D9D9]  border-black border-4"
          ></div>

          <div
            style={{
              width: "248px",
              height: "360px",
              borderWidth: "4px",
              boxShadow: "8px 8px 16px rgba(0, 0, 0, 1)"
            }}
            className="bg-[#D9D9D9]  border-black border-4 "
          ></div>

          <div
            style={{
              width: "248px",
              height: "360px",
              borderWidth: "4px",
              boxShadow: "8px 8px 16px rgba(0, 0, 0, 1)"
            }}
            className="bg-[#D9D9D9]  border-black border-4"
          ></div>
        </div>


      </div>

    </>
  )
}

export default Lecture