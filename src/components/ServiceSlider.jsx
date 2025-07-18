import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Style1.css";

const services = [
  {
    title: "Agricultural Trading",
    desc: "Trading agricultural crops including grains, vegetable oils, sugar, wheat, and more.",
    image: "/images/wheatfield.jpg"
  },
  {
    title: "Petroleum Supply",
    desc: "Supply and marketing of petroleum derivatives like fuels, oils, lubricants, and chemicals.",
    image: "/images/goldenoil.jpg"
  },
  {
    title: "Logistics & Distribution",
    desc: "Efficient transportation of petroleum and agricultural goods.",
    image: "/images/whitebowl.jpg"
  }
];

export default function ServiceSlider() {
  return (
    <div className="slider-wrapper">
      <Swiper
        slidesPerView={3}
        spaceBetween={-200}
        grabCursor={true}
        loop={true}
        className="mySwiper"
      >
        {/* Our Services Slide */}
        <SwiperSlide>
  <div className="slide-inner no-border">
    <div className="text-only-slide">
      <h2 className="plain-title">Our Services</h2>
      <p className="plain-desc">
        We provide comprehensive solutions for petroleum derivatives and agricultural products, tailored to meet the evolving needs of industries and businesses. From high-performance oils, lubricants, and fuels to premium-quality grains and edible oils, our product range is designed to ensure reliability.
      </p>
    </div>
  </div>
</SwiperSlide>


        {/* Dynamic Service Cards */}
        {services.map((item, index) => (
          <SwiperSlide key={index}>
           <div className="slide-inner">
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
    </div>
  );
}
