"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/carousel/carousel-1.jpg",
  "/images/carousel/carousel-2.webp",
  "/images/carousel/carousel-3.webp",
  "/images/carousel/carousel-4.webp",
  "/images/carousel/carousel-5.webp",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Chuyển slide tự động mỗi 4 giây
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      className="relative w-full max-h-200 bg-cover bg-center bg-no-repeat my-5 rounded-lg"
      style={{
        backgroundImage: `url('https://webtoons-static.pstatic.net/image/pc/home_bg011.jpg')`,
      }}
    >
      {/* Layer 1: Full-width background */}
      <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

      {/* Layer 2: Inner container with padding */}
      <div className="relative max-w-4xl mx-auto p-7">
        {/* Layer 3: Carousel Wrapper */}
        <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-fill w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex
                  ? "bg-blue-300"
                  : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
