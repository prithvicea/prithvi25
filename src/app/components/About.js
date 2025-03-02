import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <>
      <div className={styles.svgContainer}>
        {/* Background SVG (Group 51.svg) */}
        <div className={styles.backgroundSvg}></div>

        {/* Overlay Image (noisy-background.svg) */}
        <Image
          src="/noisy-background.svg"
          layout="fill"
          alt="Noisy Overlay"
          className={styles.overlayImage}
        />

        <div className="absolute right-2 md:right-14 -top-2 md:-top-8 z-20">
          <div className="flex flex-col items-center">
            <Image
              src="/Sign Board.svg"
              alt="Sign board"
              width={20}
              height={60}
              className="w-14 md:w-20 h-auto"
            />
          </div>
        </div>

        <div className="absolute left-2 md:left-12 top-0 z-20">
          <Image
            src="/rocket.svg"
            alt="Rocket"
            width={40}
            height={80}
            className="w-10 md:w-20"
          />
        </div>

        <div className="relative z-30 w-full px-4 py-6 md:py-12 flex flex-col md:flex-row items-center justify-between top-10 md:top-16">
          <div className="w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
            <div className="relative w-full max-w-xs md:w-48 h-40 md:h-60">
              <div className="absolute w-40 md:w-48 h-40 md:h-52 bg-white rounded-2xl border-4 border-black shadow-lg top-24 md:top-40 left-[-4rem] md:left-[-8.75rem] z-0"></div>
              <div className="absolute w-40 md:w-48 h-40 md:h-52 bg-white rounded-2xl border-4 border-black shadow-lg z-10"></div>
              <div className="absolute w-40 md:w-48 h-40 md:h-52 bg-white rounded-2xl border-4 border-black shadow-lg top-16 md:top-32 left-8 md:left-20 z-20"></div>
            </div>
          </div>

          <div className={`${styles.rightText} w-full md:w-1/2 px-3 md:px-4`}>
            <h2 className={`${styles.heading} text-xl md:text-3xl font-bold mb-3 md:mb-4`}>
              PRITHVI 2025 - Engineering Excellence
            </h2>
            <div className={`${styles.description} text-sm md:text-base mb-4 md:mb-6`}>
              PRITHVI, the flagship intercollegiate civil engineering fest, is back in
              2025, celebrating engineering excellence and innovation! Known for its
              groundbreaking editions, PRITHVI returns with bigger ideas, inspiring
              collaborations, and unparalleled technical brilliance. Join us on this
              extraordinary journey to shape the future of engineering together!
            </div>
            <div className={`${styles.logoContainer} flex justify-center md:justify-start space-x-4 md:space-x-6`}>
              <Image
                src="/Prithvi.svg"
                alt="Logo 1"
                width={50}
                height={50}
                className={`${styles.logo} w-10 h-10 md:w-16 md:h-16`}
              />
              <Image
                src="/cea.svg"
                alt="Logo 2"
                width={50}
                height={50}
                className={`${styles.logo} w-10 h-10 md:w-16 md:h-16`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
