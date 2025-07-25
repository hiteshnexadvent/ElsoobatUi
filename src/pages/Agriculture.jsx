import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const products = [
  {
    title: 'Wheat',
    desc: 'Sourced from trusted producers, our wheat meets the quality standards for food processing.',
    image: '/images/servicewheat.jpg',
    className: 'box1',
  },
  {
    title: 'Sugar',
    desc: 'We trade and distribute bulk sugar for industrial and commercial food sectors.',
    image: '/images/servicesugar.jpg',
    className: 'box2',
  },
  {
    title: 'Vegetable Oils',
    desc: 'Refined edible oils suitable for cooking, processing, and wholesale food manufacturing.',
    image: '/images/vegetable.webp',
    className: 'box3',
  },
  {
    title: 'Grains & Pulses',
    desc: 'A range of grains and pulses including legumes and cereals — traded with quality assurance.',
    image: '/images/servicegrains.jpg',
    className: 'box4',
  }
]


export default function Agriculture() {

    useEffect(() => {
        AOS.init({ duration: 800, once: true })
    }, [])


  return (
          
        <div className="container agriculture">
      <h2 style={{ fontSize: '40px', fontWeight: '700', marginTop: '120px',color:'#003C82' }}>
        Agricultural Products 
      </h2>
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
  )
}
