import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const Clients = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(reviews.length / 2));

  // Navigate to the next review
  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to the previous review
  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };
  
    return (
      <section className="w-full bg-gray-900 py-12 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-4">
            Testimonials
          </h2>
          <p className="text-center mb-8">What my clients says about me</p>
  
          <div className="relative flex items-center">
          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full text-white shadow-lg hover:bg-gray-700 transition duration-300"
          >
            <FaChevronLeft />
          </button>

          {/* Reviews container */}
          <div className="flex overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 33.333}%)`,
              }}
            >
              {reviews.map((review, index) => {
                const isActive = index === currentIndex; // Active (middle) review
                const isBefore =
                  index === (currentIndex - 1 + reviews.length) % reviews.length; // Previous review
                const isAfter =
                  index === (currentIndex + 1) % reviews.length; // Next review

                return (
                  <div
                    key={index}
                    className={`flex-none w-1/3 px-4 py-6 transition-transform duration-500 ease-in-out
                      ${isActive ? "scale-110 z-10" : ""} // Make active review bigger
                      ${isBefore || isAfter ? "scale-95 opacity-75" : ""} // Make adjacent reviews smaller and less opaque
                    `}
                  >
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                      <div className="flex items-center mb-4">
                        <img
                          src={review.avatar}
                          alt={review.name}
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
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={nextReview}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full text-white shadow-lg hover:bg-gray-700 transition duration-300"
          >
            <FaChevronRight />
          </button>
        </div>
        </div>
      </section>
    );
  }

export default Clients;