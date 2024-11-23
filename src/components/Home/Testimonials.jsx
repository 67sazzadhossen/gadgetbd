import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import ReactStars from "react-rating-stars-component";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Emily Thompson",
      testimonial:
        "GadgetBD has completely transformed the way I shop for gadgets! Their products are top-notch, and delivery was surprisingly fast. Highly recommended for all tech enthusiasts!",
      rating: 5,
      image:
        "https://img.freepik.com/free-photo/smiling-woman-holding-shopping-bags-isolated-pink-background_23-2148767474.jpg",
    },
    {
      name: "Daniel White",
      testimonial:
        "As someone who reviews tech gadgets daily, GadgetBD has become my go-to store. They always have the latest gadgets at competitive prices, and their customer service is outstanding.",
      rating: 4.9,
      image:
        "https://img.freepik.com/free-photo/handsome-young-man-holding-smartphone_171337-1036.jpg",
    },
    {
      name: "Sophia Martinez",
      testimonial:
        "I love shopping on GadgetBD! Their user-friendly website and exclusive deals keep me coming back. My smart home setup wouldn't be complete without their affordable gadgets!",
      rating: 4.8,
      image:
        "https://img.freepik.com/free-photo/portrait-smiling-young-woman-holding-tablet-pink-background_23-2148773466.jpg",
    },
  ];

  return (
    <div className="container mx-auto">
      <Swiper
        navigation={true}
        draggable={true}
        pagination={{ clickable: true }}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="shadow-lg rounded-xl"
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx} className="p-6 md:p-16">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              {/* Testimonial Image */}
              <img
                className="rounded-2xl w-full md:w-1/3 lg:w-1/4 object-cover"
                src={testimonial.image}
                alt={testimonial.name}
              />

              {/* Testimonial Content */}
              <div className="w-full md:w-2/3">
                <ReactStars
                  size={24}
                  edit={false}
                  value={testimonial.rating}
                  isHalf={true}
                />
                <div className="my-6 text-gray-700 text-lg md:text-base">
                  {testimonial.testimonial}
                </div>
                <div className="font-bold text-lg">{testimonial.name}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSection;
