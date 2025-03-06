import React, { useState } from "react";

const images = [
  "/project6.jpg",
  "/project7.jpg",
  "/project3.jpg",
  "/project2.jpg",
  
];

const Picture = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-[-52px] transform -translate-y-1/2 bg-[#976C62] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
        onClick={prevSlide}
      >
        ◀
      </button>

      <button
        className="absolute top-1/2 right-[-52px] transform -translate-y-1/2 bg-[#976C62] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
        onClick={nextSlide}
      >
        ▶
      </button>
    </div>
  );
};

export default Picture;
