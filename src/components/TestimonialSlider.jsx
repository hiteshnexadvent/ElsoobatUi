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
    text: "Elsoobat has been a reliable trading partner for years. Their petroleum supply chain is consistent, transparent, and always on schedule.",
    name: "Ahmed R.",
    img: "/images/test1.avif"
  },
  {
    text: "We sourced wheat and vegetable oils from Elsoobat for our processing unit. Excellent quality and timely delivery every time.",
    name: "Deepak",
    img: "/images/test1.avif"
  },
  {
    text: "Their team is highly professional and responsive. Whether it’s fuels or lubricants, we’ve never had to worry about availability.",
    name: "Fatima",
    img: "/images/test1.avif"
  },
  {
    text: "Partnering with Elsoobat helped us scale our agri procurement. Seamless documentation and logistics support too!",
    name: "Yusuf",
    img: "/images/test1.avif"
  },
  {
    text: "Excellent quality and timely delivery every time.Seamless documentation and logistics support too!",
    name: "Khalid",
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
        style={{ marginTop: '150px', fontSize: '40px', fontWeight: '700',color:'#003C82' }}
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
