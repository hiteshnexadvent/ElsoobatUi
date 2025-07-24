import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const products = [
  {
    title: 'Premium Fuels',
    desc: 'Gasoline, diesel, and other refined fuels that meet international performance and safety standards.',
    image: '/images/service1.webp',
    className: 'box1',
  },
  {
    title: 'Lubricants',
    desc: 'High-performance lubricants for automotive, industrial, and marine applications — ensuring operational efficiency.',
    image: '/images/service2.webp',
    className: 'box2',
  },
  {
    title: 'Industrial Oils',
    desc: 'Hydraulic fluids, transformer oils, and heat transfer oils tailored for heavy-duty industrial use.',
    image: '/images/serice3.webp',
    className: 'box3',
  },
  {
    title: 'Speciality Chemicals',
    desc: 'Select petroleum-based chemicals for various industrial and energy applications.',
    image: '/images/service4.webp',
    className: 'box4',
  }
]

export default function ServiceProduct() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <div className="container service-product">
      <h2 style={{ fontSize: '40px', fontWeight: '700', marginTop: '150px',color:'#003C82' }}>
        Petroleum Derivatives
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
