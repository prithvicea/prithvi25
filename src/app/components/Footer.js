"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div
    className=" absolute top-[220vh] md:top-[170vh] h-auto w-screen flex flex-col items-center justify-center text-black font-itim z-20 mt-[30px]"
style={{
  position: "relative",
  isolation: "isolate",
  overflow: "hidden"
}}
    
    >
      <div 
  className="absolute inset-0 z-0"
  style={{
    backgroundImage: "url('/background.svg')",
    backgroundSize: "auto 100%",
    backgroundPosition: "center",
    // backgroundRepeat: "no-repeat"
  }}
></div>
<div 
  className="absolute inset-0 z-1"
  style={{
    backgroundImage: "url('/noisy-background.svg')",
    backgroundSize: "auto 100%",
    backgroundPosition: "center",
    mixBlendMode: "multiply",
    WebkitMaskImage: "url('/background.svg')",
    maskImage: "url('/background.svg')",
    WebkitMaskSize: "auto 100%",
    maskSize: "auto 100%",
    WebkitMaskPosition: "center",
    maskPosition: "center"
  }}
></div>
      
      <div className="flex z-2 mt-[8vh]">
        <Image
          src="/prithvi25.svg"
          alt="prithvi'25"
          width={200}
          height={200}
          className="w-[80%] sm:w-2/3 md:w-1/2 lg:w-[267px] h-auto"
        />
      </div>
      <div className="flex z-2 flex-wrap justify-center gap-4 sm:gap-8 md:gap-[78px] mt-7 text-lg sm:text-xl md:text-2xl md:text-[1.4rem] lg:text-[24px] text-center">
        <Link href="/Home" className="!text-black">Home</Link>
        <Link href="/Lectures" className="!text-black">Lectures</Link>
        <Link href="/Workshops" className="!text-black">Workshops</Link>
        <Link href="/Competitions" className="!text-black">Competitions</Link>
        <Link href="/Sponsors" className="!text-black">Sponsors</Link>
      </div>
      <div className="flex flex-wrap z-2 justify-center gap-8 sm:gap-12 md:gap-[78px] mt-4 text-lg sm:text-xl md:text-2xl lg:text-[24px] text-center">
        <Link href="/Our Team" className="!text-black">Our Team</Link>
        <Link href="/Contact Us" className="!text-black">Contact Us</Link>
        <Link href="/FAQ" className="!text-black">FAQ</Link>
      </div>
      <div className="flex flex-col md:flex-row z-2 gap-6 md:gap-[60px] items-center text-black mt-[30px]">
        <p className="text-[28px] md:text-[32px] leading-tight text-center md:text-left">
          Our Social  Handles
        </p>
        <div className="mt-4 flex gap-6 md:gap-[60px] items-center text-black justify-center">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-[35px] w-[35px] text-black hover:text-white" />
          </a>
          <a href="mailto:your-email@example.com">
            <FaEnvelope className="h-[35px] w-[35px] text-black hover:text-white" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="h-[35px] w-[35px] text-black hover:text-white" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="h-[35px] w-[35px] text-black hover:text-white" />
          </a>
        </div>
      </div>
      <div className="text-black mt-[40px] z-2 mb-[40px] text-[18px] md:text-[20px] text-center">
        <p>CIVIL ENGINEERING ASSOCIATION, CED, NIT CALICUT</p>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .container{
          top:250vh;
          }
      `}</style>
    </div>
  );
}
