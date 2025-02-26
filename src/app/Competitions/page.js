import Image from 'next/image';
import React from 'react';
import Link from 'next/link'; // If using Next.js
import styles from './page.module.css';
import Footer from '@/app/components/Footer'
import { FaInstagram, FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";


const reviews = [
  { id: 1, img: "https://avatar.vercel.sh/jack", link: "/jack" },
  { id: 2, img: "https://avatar.vercel.sh/jill", link: "/jill" },
  { id: 3, img: "https://avatar.vercel.sh/john", link: "/john" },
  { id: 4, img: "https://avatar.vercel.sh/jane", link: "/jane" },
  { id: 5, img: "https://avatar.vercel.sh/jenny", link: "/jenny" },
  { id: 6, img: "https://avatar.vercel.sh/james", link: "/james" },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const duplicatedFirstRow = [...firstRow, ...firstRow, ...firstRow, ...firstRow];
const duplicatedSecondRow = [...secondRow, ...secondRow, ...secondRow, ...secondRow];

const ReviewCard = ({ img, link }) => (
  <Link href={link} passHref>
    <div className={styles.reviewCard}>
      <img src={img} alt="" />
    </div>
  </Link>
);

const CompName = [
  {
    img: "https://storage.googleapis.com/a1aa/image/XOHEcxniGfPa25SSUL4SgzWO7t6bSL0dfuSfz637GVw.jpg",
    name: "AutoCAD Design Competition",
    link: "#",
    price: "199",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/xyz123.jpg",
    name: "3D Modeling Challenge",
    link: "#",
    price: "249",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/abc456.jpg",
    name: "Civil Engineering Quiz",
    link: "#",
    price: "99",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/def789.jpg",
    name: "Structural Design Hackathon",
    link: "#",
    price: "299",
  },
];

const CompCard = ({ img, name, link, price }) => (
  <div className={styles.card}>
    <img alt={name} height="200" src={img} width="300" />
    <h2>{name}</h2>
    <hr />
    <p>Registration fee- ₹{price}/-</p>
    <a className={styles.registerBtn} href={link}>
      Register
    </a>
  </div>
);

const Competitions = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <div className={styles.title}>Competitions</div>

          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeTrack}>
              {duplicatedFirstRow.map((review, index) => (
                <ReviewCard key={`${review.id}-${index}`} img={review.img} link={review.link} />
              ))}
            </div>

            <div className={styles.marqueeTrackReverse}>
              {duplicatedSecondRow.map((review, index) => (
                <ReviewCard key={`${review.id}-${index}`} img={review.img} link={review.link} />
              ))}
            </div>
          </div>
        </div>
      
      </div>
      <div className={styles.CardStyle}>
      <div className={styles.line}></div>
        <div className={styles.competitionsGrid}>
          {CompName.map((comp, index) => (
            <CompCard key={index} img={comp.img} name={comp.name} link={comp.link} price={comp.price} />
          ))}
        </div>
      </div>
      <div>
        <div
          className="absolute bottom-0 h-auto w-screen flex flex-col items-center justify-center text-black font-itim z-20 -mt-[90px]"
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
        </div>
      </div>
    </div>
  );
};

export default Competitions;
