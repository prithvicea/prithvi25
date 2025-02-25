import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div
      className="absolute top-[540vh]  w-screen bg-cover bg-center flex flex-col items-center justify-center bg-green-500 font-itim z-1 mt-0"
      style={{ backgroundImage: "url('/background.svg')" }}
    >
      <div className="flex justify-center mt-[61px]">
        <Image
          src="/prithvi25.svg"
          alt="prithvi'25"
          width={267}
          height={267}
          className="w-[80%] sm:w-2/3 md:w-1/2 lg:w-[267px] h-auto"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-[78px] mt-7 text-lg sm:text-xl md:text-2xl lg:text-[32px] text-center">
        <Link href="/Home" className="text-black">Home</Link>
        <Link href="/Lectures" className="text-black">Lectures</Link>
        <Link href="/Workshops" className="text-black">Workshops</Link>
        <Link href="/Competitions" className="text-black">Competitions</Link>
        <Link href="/Sponsors" className="text-black">Sponsors</Link>
      </div>
      <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-[78px] mt-4 text-lg sm:text-xl md:text-2xl lg:text-[32px] text-center">
        <Link href="/Our Team" className="text-black">Our Team</Link>
        <Link href="/Contact Us" className="text-black">Contact Us</Link>
        <Link href="/FAQ" className="text-black">FAQ</Link>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-[60px] items-center text-black mt-[58px]">
        <p className="text-[28px] md:text-[32px] leading-tight text-center md:text-left">
          Our Social <br /> Handles
        </p>
        <div className="mt-4 flex gap-6 md:gap-[60px] items-center justify-center">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-[39.96px] w-[39.92px] hover:text-pink-600" />
          </a>
          <a href="mailto:your-email@example.com">
            <FaEnvelope className="h-[39.96px] w-[39.92px] hover:text-red-500" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="h-[39.96px] w-[39.92px] hover:text-blue-600" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="h-[39.96px] w-[39.92px] hover:text-blue-700" />
          </a>
        </div>
      </div>
      <div className="text-black mt-[63px] text-[18px] md:text-[20px] text-center">
        <p>CIVIL ENGINEERING ASSOCIATION, CED, NIT CALICUT</p>
      </div>
    </div>
  );
}
