"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const workshops = [
  { title: "Web Development", image: "/Testimage.jpeg" },
  { title: "AI & ML", image: "/images/ai-ml.jpg" },
  { title: "Cyber Security", image: "/images/cyber-security.jpg" },
  { title: "Data Science", image: "/images/data-science.jpg" },
  { title: "Blockchain", image: "/images/blockchain.jpg" },
  { title: "UI/UX Design", image: "/images/ui-ux.jpg" },
  { title: "Cloud Computing", image: "/images/cloud-computing.jpg" },
];

const CenteredWorkshopCarousel = () => {
  return (
    <div className="w-full flex flex-col items-center py-10 min-h-screen relative bg-blue-100">
      {/* Workshop Slider */}
      <Splide
        options={{
          type: "loop",
          perPage: 2,
          focus: "center",
          gap: "1.5rem",
          autoplay: true,
          interval: 1500,
          speed: 1000,
          arrows: false,
          pagination: true,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          breakpoints: {
            1024: { perPage: 2, gap: "1rem" },
            768: { perPage: 1, gap: "1rem" },
            480: { perPage: 1, gap: "0.5rem" },
          },
        }}
        className="w-11/12 md:w-4/5 pb-16"
      >
        {workshops.map((workshop, index) => (
          <SplideSlide key={index} className="relative flex flex-col items-center py-4 px-4">
            {/* Title Above Each Box */}
            <h2 className="text-black font-semibold text-lg md:text-xl mb-3 text-center">{workshop.title}</h2>

            {/* Slide Box with Background Image */}
            <div
              className="relative h-80 md:h-80 w-full flex flex-col items-center justify-center rounded-xl shadow-md p-6 border-2 border-gray-950 transition-transform duration-500 splide__slide bg-cover bg-center"
              style={{ backgroundImage: `url(${workshop.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>

              {/* View Button */}
              <button className="absolute bottom-3 right-3 px-4 md:px-5 py-1 md:py-0.5 border border-white text-white rounded-full text-sm bg-black bg-opacity-50 hover:bg-white hover:text-black transition-all duration-300">
                View
              </button>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Custom Pagination Section */}
      <div className="absolute bottom-8 md:bottom-10 flex justify-center w-full">
        <style>{`
          .splide__slide {
            transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
            opacity: 0.7;
          }
          .splide__slide.is-active {
            transform: scale(1.05);
            opacity: 1;
          }
          .splide__pagination {
            display: flex;
            justify-content: center;
            gap: 12px;
            position: relative;
            bottom: -50px;
          }
          .splide__pagination__page {
            width: 32px;
            height: 22px;
            border-radius: 5px;
            background-color: white;
            transition: all 0.3s ease;
          }
          .splide__pagination__page.is-active {
            border: 2px solid black;
            width: 30px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default CenteredWorkshopCarousel;