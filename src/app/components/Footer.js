

const Footer = () => {
  return (
    <>
        <div className="h-[65vh] absolute top-[460vh] -mt-24 w-screen flex flex-col items-center justify-center">
  <div
    className="h-[65vh] absolute w-full flex flex-col items-center justify-center bg-black z-13"
    style={{
      clipPath: "ellipse(100% 81% at 50% 100%)",
    }}
  >
    <div
      className="w-full h-screen bg-blend-soft-light bg-[#FF9619] bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('./noisy-background.svg')",
        clipPath: "ellipse(100% 80% at 50% 100%)",
      }}
    ></div>
    </div>
    </div>
    
   </>
  )
}

export default Footer