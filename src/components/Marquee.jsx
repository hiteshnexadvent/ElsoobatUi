import React from 'react';
import './Style1.css';

const Marquee = () => {
  const items = [
    "Global Trade Partner",
    "Petroleum Experts",
    "Agri Commodity Leaders",
    "DMCC Licensed",
    "On-Time Delivery",
    "Bulk Supply Experts",
    "Cross-Border Logistics",
    "Transparent Deals",
    "Dubai-Based Operations",
    "End-to-End Supply",
    "Quality Assured",
    "Efficient Sourcing"
  ];

  const rendered = items.map((item, i) => (
    <span key={i}>{item}</span>
  ));

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        <div className="marquee-content">{rendered}</div>
        <div className="marquee-content">{rendered}</div>
      </div>
    </div>
  );
};

export default Marquee;
