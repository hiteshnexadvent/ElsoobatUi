import React from 'react';
import './Style1.css';

const products = [
  {
    title: 'Fuel',
    desc: 'Reliable fuels for transport and industrial needs, ensuring efficiency and energy output.',
    image: '/images/fuel.webp',
    className: 'box1',
  },
  {
    title: 'Lubricants',
    desc: 'Engineered lubricants that reduce friction, wear and tear, and optimize machinery performance.',
    image: '/images/lubricant.webp',
    className: 'box2',
  },
  {
    title: 'Wheat',
    desc: 'Premium wheat sourced for baking and milling industries, offering top quality and consistency.',
    image: '/images/wheat.webp',
    className: 'box3',
  },
  {
    title: 'Vegetable Oil',
    desc: 'Refined vegetable oils ideal for cooking and food production, offering purity and nutrition.',
    image: '/images/vegetable.webp',
    className: 'box4',
  }
];

export default function Products() {
  
  return (
    <div className="container">
      <h2 style={{ fontSize: '40px', fontWeight: '700',marginTop:'150px' }}>Our Products</h2>
      <div className="products">
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
    </div>
  );
}
