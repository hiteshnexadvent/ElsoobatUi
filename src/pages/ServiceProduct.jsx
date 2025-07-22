import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const products = [
  {
    title: 'Premium Fuels',
    desc: 'High-quality gasoline, diesel, and aviation fuels meeting international standards for optimal performance and efficiency.',
    image: '/images/service1.webp',
    className: 'box1',
  },
  {
    title: 'Lubricants',
    desc: 'Advanced lubricating solutions for automotive, marine, and industrial applications with superior protection.',
    image: '/images/service2.webp',
    className: 'box2',
  },
  {
    title: 'Industrial Oils',
    desc: 'Complete range of industrial oils including hydraulic fluids, transformer oils, and heat transfer fluids.',
    image: '/images/serice3.webp',
    className: 'box3',
  },
  {
    title: 'Speciality Chemicals',
    desc: 'Custom chemical solutions and additives for enhanced performance and environmental compliance.',
    image: '/images/service4.webp',
    className: 'box4',
  }
]

export default function ServiceProduct() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <div className="container">
      <h2 style={{ fontSize: '40px', fontWeight: '700', marginTop: '150px' }}>
        Wide Range of Petroleum Derivatives
      </h2>
      <div className="products">
        {products.map((product, index) => (
          <div
            className={product.className}
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
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
    </div>
  )
}
