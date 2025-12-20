import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ReviewsCarousel = () => {
  const { data } = useQuery({
    queryKey: ["costomerReviews"],
    queryFn: async () => {
      const result = await axios.get(`http://localhost:3000/customerReview`);
      return result;
    },
  });
  const reviews = data?.data;

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Customer Reviews
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="reviews-swiper"
      >
        {/* Review 1 */}
        {reviews?.map((r) => (
          <SwiperSlide key={r._id}>
            <div className="h-60 bg-white rounded-lg shadow-md p-5 flex flex-col items-center justify-center text-center transition-all duration-500">
              <img
                src={r.reviwereImage}
                alt={r.name}
                className="w-14 h-14 rounded-full object-cover border-3 border-gray-300 mb-3"
              />
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                {r.name}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                "{r.comment}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for focus and blur effect */}

      <style jsx>{`
        .reviews-swiper .swiper-slide {
          opacity: 0.6;
          filter: blur(2px);
          transform: scale(0.9);
        }
        .reviews-swiper .swiper-slide-active {
          opacity: 1;
          filter: blur(0);
          transform: scale(1.1);
          z-index: 10;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        .reviews-swiper .swiper-slide-active img {
          width: 64px !important;
          height: 64px !important;
          border-width: 4px;
          border-color: #3b82f6;
        }
        .reviews-swiper .swiper-slide-active h3 {
          font-size: 1.125rem;
          color: #1e40af;
        }
        .reviews-swiper .swiper-slide-active p {
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  );
};

export default ReviewsCarousel;
