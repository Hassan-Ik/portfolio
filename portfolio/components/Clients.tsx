import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from 'next/image';

const Clients = ({ reviews }) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const totalReviews = reviews.length;
  
    const extendedReviews = [reviews[totalReviews - 1], ...reviews, reviews[0]];
  
    const nextReview = () => {
      setCurrentIndex((prev) => (prev + 1) % (totalReviews + 1));
    };
  
    const prevReview = () => {
      setCurrentIndex((prev) => (prev - 1 + (totalReviews + 1)) % (totalReviews + 1));
    };
  
    // Smooth transition fix for looping effect
    useEffect(() => {
      if (currentIndex === 0) {
        setTimeout(() => {
          setCurrentIndex(totalReviews);
        }, 500);
      }
      if (currentIndex === totalReviews + 1) {
        setTimeout(() => {
          setCurrentIndex(1);
        }, 500);
      }
    }, [currentIndex, totalReviews]);
  
    return (
      <section id='testimonials' className="w-full bg-gray-900 py-12 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-4">
            Testimonials
          </h2>
          <p className="text-center mb-8">What my clients says about me</p>
  
          <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Review Container */}
      <div className="flex w-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}>
        {extendedReviews.map((review, index) => {
          const isActive = index === currentIndex;
          const isBefore = index === (currentIndex - 1 + extendedReviews.length) % extendedReviews.length;
          const isAfter = index === (currentIndex + 1) % extendedReviews.length;

          return (
            <div
              key={index}
              className={`flex-none w-1/3 px-4 py-6 transition-transform duration-500 ease-in-out
                ${isActive ? "scale-110 z-10" : ""}
                ${isBefore || isAfter ? "scale-95 opacity-75" : ""}
              `}
            >
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    layout="fill"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{review.name}</h3>
                    <p className="text-gray-400">{review.title}</p>
                  </div>
                </div>
                <p className="text-gray-300">{review.review}</p>
              </div> 
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevReview}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full text-white shadow-lg hover:bg-gray-700 transition duration-300"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextReview}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full text-white shadow-lg hover:bg-gray-700 transition duration-300"
      >
        <FaChevronRight />
      </button>
    </div>

        </div>
      </section>
    );
  }

export default Clients;