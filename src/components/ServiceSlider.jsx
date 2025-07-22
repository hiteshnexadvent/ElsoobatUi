import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Style1.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    title: "Agricultural Trading",
    desc: "Trading agricultural crops including grains, vegetable oils, sugar, wheat, and more.",
    image: "/images/wheatfield.webp"
  },
  {
    title: "Petroleum Supply",
    desc: "Supply and marketing of petroleum derivatives like fuels, oils, lubricants, and chemicals.",
    image: "/images/goldenoil.webp"
  },
  {
    title: "Logistics & Distribution",
    desc: "Efficient transportation of petroleum and agricultural goods.",
    image: "/images/whitebowl.webp"
  }
];

export default function ServiceSlider() {
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
    <div className="slider-wrapper" style={{backgroundColor:'#F9FEFF'}}>
      <Swiper
        grabCursor={true}
        loop={false}
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1.2,
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
        {/* Our Services Slide */}
<SwiperSlide>
  <div className="slide-inner no-border" data-aos="fade-right">
    <div className="text-only-slide">
      <h2 className="plain-title">Our Services</h2>
      <p className="plain-desc">
        We provide comprehensive solutions for petroleum derivatives and agricultural products,
        tailored to meet the evolving needs of industries and businesses. From high-performance
        oils, lubricants, and fuels to premium-quality grains and edible oils, our product range
        is designed to ensure reliability.
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
              <button className="explore-btn">Explore Now</button>
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
  );
}
