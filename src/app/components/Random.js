'use client'
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../styles/back.module.css";
import gsap from "gsap";

const RandomBackground = () => {
  const elementRefs = useRef([]);

  const positions = [
    { type: "globe", x: "90%", y: "0%", scale: 1 },
    { type: "globr", x: "10%", y: "15%", scale: 1 },
    { type: "star", x: "30%", y: "25%", scale: 0.8 },
    { type: "star", x: "50%", y: "10%", scale: 1.2 },
    { type: "star", x: "70%", y: "20%", scale: 0.9 },
    { type: "star", x: "20%", y: "40%", scale: 1.1 },
    { type: "star", x: "40%", y: "50%", scale: 0.7 },
    { type: "star", x: "60%", y: "45%", scale: 1 },
    { type: "star", x: "80%", y: "35%", scale: 0.9 },
    { type: "circle", x: "15%", y: "5%", scale: 1.1 },
    { type: "circle", x: "35%", y: "15%", scale: 0.8 },
    { type: "circle", x: "55%", y: "5%", scale: 1 },
  ];

  useEffect(() => {
    // Create animations for each element
    elementRefs.current.forEach((element, index) => {
      if (!element) return;

      // Different animation based on element type
      if (positions[index].type === "star") {
        // Faster twinkling animation for stars
        gsap.to(element, {
          opacity: 0.2,
          duration: 0.5 + Math.random() * 0.5, // Faster twinkle
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: Math.random() * 0.5, // Shorter initial delay
        });

        // Enhanced floating animation for stars
        gsap.to(element, {
          y: "+=50", // Increased vertical movement
          x: "+=30", // Increased horizontal movement
          duration: 1 + Math.random(), // Faster movement
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: Math.random() * 0.5,
        });
      } else if (positions[index].type === "circle") {
        // Faster rotation and scale animation for circles
        gsap.to(element, {
          rotate: 360,
          scale: 1.4, // Larger scale change
          duration: 1.5 + Math.random(), // Faster rotation
          repeat: -1,
          yoyo: true,
          ease: "none",
          delay: Math.random() * 0.5,
        });

        // Add floating movement to circles
        gsap.to(element, {
          y: "+=40",
          x: "+=20",
          duration: 1.2 + Math.random(),
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: Math.random() * 0.5,
        });
      } else {
        // Enhanced floating animation for globes
        gsap.to(element, {
          y: "+=60", // Increased movement range
          x: "+=20", // Added horizontal movement
          duration: 1.5 + Math.random(), // Faster movement
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: Math.random() * 0.5,
        });

        // Add slight rotation to globes
        gsap.to(element, {
          rotate: 15,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: Math.random(),
        });
      }
    });

    // Faster initial animations
    gsap.from(".title-container", {
      y: 70,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".presents-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    });

    gsap.from(".logo-container", {
      scale: 0,
      opacity: 0,
      duration: 0.7,
      ease: "back.out(2)",
    });

  }, []);

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: "url('./noisy-background.svg')",
        fontFamily: "Itim, serif",
      }}
    >
      <div className={styles.contentWrapper}>
        <div className="logo-container">
          <Image src="./Prithvi.svg" alt="logo" width={46.5} height={50} />
        </div>
        <div className="presents-text">
          <div className={styles.presentsText}>
            Civil Engineering Association presents
          </div>
        </div>
        <div className="title-container">
          <p className={styles.prithvi}>PRITHVI'25</p>
          {/* <Image
            className={styles.title}
            src="./title.svg"
            alt="Prithvi title"
            width={656}
            height={172}
          /> */}
        </div>
      </div>

      {positions.map((pos, index) => (
        <div
          key={index}
          ref={(el) => (elementRefs.current[index] = el)}
          className={`${styles.floatingElement} ${styles[pos.type]}`}
          style={{
            left: pos.x,
            top: pos.y,
            transform: `scale(${pos.scale})`,
          }}
        >
          <Image
            src={`/${pos.type}.svg`}
            alt={`${pos.type} svg`}
            width={pos.type.includes("glob") ? 40 : 10}
            height={pos.type.includes("glob") ? 40 : 10}
          />
        </div>
      ))}
    </div>
  );
};

export default RandomBackground;