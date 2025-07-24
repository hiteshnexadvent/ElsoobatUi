import React from 'react';
import './Style1.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const products = [
  {
    title: 'Fuel',
    desc: 'High-quality fuels for transportation and industry — optimized for performance and energy efficiency.',
    image: '/images/fuel.jpg',
    className: 'box1',
  },
  {
    title: 'Lubricants',
    desc: 'Advanced lubricants engineered to reduce friction, extend equipment life, and enhance machinery output.',
    image: '/images/lubricant.jpg',
    className: 'box2',
  },
  {
    title: 'Wheat',
    desc: 'Top-grade wheat sourced for baking, milling, and processing — ensuring quality and consistency in every batch.',
    image: '/images/wheat.jpg',
    className: 'box3',
  },
  {
    title: 'Vegetable Oil',
    desc: 'Refined edible oils ideal for cooking and food production — offering purity, stability, and nutritional value.',
    image: '/images/vegetable.webp',
    className: 'box4',
  }
];

export default function Products() {
  return (
    <div className="container products-top">
      <h2 style={{ fontSize: '40px', fontWeight: '700', marginTop: '150px',color:'#003C82' }}>Our Products</h2>

      {/* Desktop Layout */}
      <div className="products desktop-view">
        {products.map((product, index) => (
          <div className={product.className} key={index}>
            <div className="image-wrapper">
              <img src={product.image} alt={product.title} />
              <div className="text-content">
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Swiper Slider */}
      <div className="products-slider mobile-view">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className={`image-wrapper ${product.className}`}>
                <img src={product.image} alt={product.title} />
                <div className="text-content">
                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
