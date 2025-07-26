import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../components/Style1.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Quality First",
    desc: "We deliver products that meet international standards — every shipment, every time.",
    image: "/images/whitebowl.webp"
  },
  {
    title: "Experienced Team",
    desc: "Our specialists bring deep industry knowledge and real-world expertise to every trade.",
    image: "/images/choose1.webp"
  },
  {
    title: "Professional Approach",
    desc: "We operate with precision, ethics, and accountability in every business interaction.",
    image: "/images/choose3.webp"
    },
  {
    title: "Environmental Compliance",
    desc: "Sustainability matters — we strictly follow health, safety, and environmental regulations.",
    image: "/images/choose2.webp"
    },
  {
    title: "Driven by Innovation",
    desc: "We embrace change and continuously improve our processes to serve you better.",
    image: "/images/choose4.webp"
    },
  {
    title: "Customer-Centric",
    desc: "Your business needs guide our solutions we build partnerships, not transactions.",
    image: "/images/customer.jpg"
    },
  {
    title: "Full Transparency",
    desc: "We communicate openly, price fairly, and operate with complete clarity.",
    image: "/images/handshake.webp"
  }
];

export default function ChooseUsSlider() {

    const prevRef = useRef(null);
      const nextRef = useRef(null);
      const swiperRef = useRef(null);
    
      // Ensure navigation refs are bound after mount
      useEffect(() => {
        if (
          swiperRef.current &&
          swiperRef.current.params &&
          swiperRef.current.params.navigation
        ) {
          swiperRef.current.params.navigation.prevEl = prevRef.current;
          swiperRef.current.params.navigation.nextEl = nextRef.current;
          swiperRef.current.navigation.init();
          swiperRef.current.navigation.update();
        }
      }, []);
    
      useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    
      // Swiper navigation binding
      if (
        swiperRef.current &&
        swiperRef.current.params &&
        swiperRef.current.params.navigation
      ) {
        swiperRef.current.params.navigation.prevEl = prevRef.current;
        swiperRef.current.params.navigation.nextEl = nextRef.current;
        swiperRef.current.navigation.init();
        swiperRef.current.navigation.update();
      }
    }, []);


  return (
      <div>
          

          <div className="slider-wrapper" style={{backgroundColor:'#F9FEFF'}}>
                <Swiper
                  grabCursor={true}
                  loop={false}
                  modules={[Navigation]}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  className="mySwiper"
                  breakpoints={{
                    0: {
                      slidesPerView: 1.3,
                      spaceBetween: 80,
                    },
                    576: {
                      slidesPerView: 1.2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2.2,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: -200,
                    }
                  }}
                >
                  {/* Our Services Slide */}
          <SwiperSlide>
            <div className="slide-inner no-border" data-aos="fade-right">
              <div className="text-only-slide">
                <h2 className="plain-title">Why Choose Us</h2>
                <p className="plain-desc">
                  We deliver end-to-end trading solutions across the energy and agriculture sectors — tailored to meet the demands of today’s fast-moving markets. Whether it’s high-grade fuels and lubricants, or premium grains and edible oils, Elsoobat ensures every product is delivered with precision, compliance, and reliability.
                </p>
              </div>
            </div>
          </SwiperSlide>
          
          
                  {/* Service Cards */}
                  {services.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="slide-inner" data-aos={index % 2 === 0 ? "zoom-in" : "fade-up"}>
                <div className="card-container">
                  <div
                    className="card"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="overlay"></div>
                    <div className="card-inner">
                      <div className="card-content">
                        <p className="desc">{item.desc}</p>
                        <h3 className="title">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          
                </Swiper>
          
                {/* Arrow Buttons */}
                <div className="slider-buttons">
                  <button ref={prevRef} className="prev-btn">←</button>
                  <button ref={nextRef} className="next-btn">→</button>
                </div>
              </div>
          


    </div>
  )
}
