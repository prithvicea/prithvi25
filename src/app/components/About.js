import Image from "next/image";
import styles from "../styles/About.module.css";

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

        <div className="absolute right-14 -top-8 z-20">
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

        <div className="absolute left-12 top-0 z-20">
          <Image
            src="/rocket.svg"
            alt="Rocket"
            width={40}
            height={80}
            className="w-20"
          />
        </div>

        <div className={`relative z-30 container mx-auto px-4 py-12 flex flex-wrap items-center justify-between top-15`}>
          <div className={`${styles.container} w-full md:w-1/2 flex items-center justify-center`}>
            <div className={`${styles.boxes} relative w-48 h-60`}>
              <div className={`${styles.box1} absolute w-48 h-55 bg-white rounded-2xl border-4 border-black shadow-lg top-40 left-[-140px] z-0`}></div>
              <div className={`${styles.box2} absolute w-48 h-55 bg-white rounded-2xl border-4 border-black shadow-lg z-10`}></div>
              <div className={`${styles.box3} absolute w-48 h-55 bg-white rounded-2xl border-4 border-black shadow-lg top-35 left-25 z-20`}></div>
            </div>
          </div>

          <div className={styles.rightText}>
            <h2 className={styles.heading}>
              PRITHVI 2025 - Engineering Excellence
            </h2>
            <div className={styles.description}>
              PRITHVI, the flagship intercollegiate civil engineering fest, is back in
              2025, celebrating engineering excellence and innovation! Known for its
              groundbreaking editions, PRITHVI returns with bigger ideas, inspiring
              collaborations, and unparalleled technical brilliance. Join us on this
              extraordinary journey to shape the future of engineering together!
            </div>
            <div className={styles.logoContainer}>
              <Image
                src="/Prithvi.svg"
                alt="Logo 1"
                width={50}
                height={50}
                className={styles.logo}
              />
              <Image
                src="/cea.svg"
                alt="Logo 2"
                width={50}
                height={50}
                className={styles.logo}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;