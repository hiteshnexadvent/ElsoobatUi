import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Test.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    text: "I was planning a honeymoon and I found a travel agent who was truly unique. They listened to our needs and created a perfect itinerary.",
    name: "Alicia",
    img: "/images/test1.avif"
  },
  {
    text: "Affordable and reliable! I was looking for a budget-friendly vacation and I found a great deal through the travel agency.",
    name: "Mark",
    img: "/images/test1.avif"
  },
  {
    text: "I had a wonderful time in China! The travel agency did a great job of planning everything smoothly. Highly recommend!",
    name: "Alex",
    img: "/images/test1.avif"
  },
  {
    text: "Very helpful and knowledgeable. They answered all my questions and made sure I had everything I needed.",
    name: "Sophia",
    img: "/images/test1.avif"
  },
  {
    text: "I had a great time on my trip. Everything went smoothly and I’d definitely recommend them to others.",
    name: "Emma",
    img: "/images/test1.avif"
  }
];

export default function TestimonialSlider() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    
    <div id="testimonial-slider" className="testimonial-wrapper">
      <h2
        style={{ marginTop: '150px', fontSize: '40px', fontWeight: '700' }}
        data-aos="fade-up"
      >
        Our Happy Clients
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        className="testimonial-swiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="testimonial-card"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100} // Stagger animation
            >
              <div className="testimonial-bubble">
                <p>{item.text}</p>
              </div>
              <img className="testimonial-avatar" src={item.img} alt={item.name} />
              <h4 className="testimonial-name">{item.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
}
