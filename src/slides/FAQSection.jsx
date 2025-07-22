import React, { useState } from 'react';
import './Slide.css';

const faqs = [
  {
    question: 'What services does Elsoobat Energy provide?',
    answer:
      'We trade petroleum products (fuels, oils, lubricants, chemicals) and agricultural products (grains, vegetable oils, sugar, wheat), plus provide transportation and logistics services.',
  },
  {
    question: 'What quality standards do you follow?',
    answer:
      'We follow international industry standards, ensuring all our products meet stringent quality and safety guidelines.',
  },
  {
    question: 'What makes Elsoobat Energy different from competitors?',
    answer:
      'Our customer-first approach, transparent pricing, and commitment to timely delivery set us apart from the rest.',
  },
  {
    question: 'Do you offer customized solutions?',
    answer:
      'Yes, we offer tailored procurement and logistics plans to meet unique business needs.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-content">
        <div className="faq-image-box">
          <img src="/images/faq.avif" alt="FAQ visual" className="faq-image" />
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <strong>{faq.question}</strong>
                <span className="faq-icon">{activeIndex === index ? '×' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
