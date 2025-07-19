import React from "react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Style1.css';
import ServiceSlider from "./ServiceSlider";
import Products from "./Products";
import TestimonialSlider from "./TestimonialSlider";
import Footer from "./Footer";
import Team from "../pages/Team";

export default function Main() {
  return (
    <div>
      
      {/* ------------------ about */}

<div className="container">
  <div className="row" style={{ marginTop: "150px", marginBottom: "100px" }}>
    
    {/* LEFT COLUMN */}
    <div className="col-lg-6 col-md-6 col-12 about">
      <div style={{ paddingRight: '30px' }}>
        <h2 style={{ fontSize: '40px', fontWeight: '700', textAlign: 'start' }}>About Elsoobat</h2>
        <p style={{ fontSize: '16px', textAlign: 'start', marginTop: '40px' }}>
          Established on April 24, 2019, under the leadership of <br />
          Chairman Hisham Hassan Mohammed Ahmed Ali, Elsoobat is <br />
          a proud member of the prestigious El Soobat Group.
        </p>
        <p style={{ fontSize: '16px', textAlign: 'start' }}>
          Our team of seasoned professionals in petroleum and <br />
          agriculture ensures top-tier services and products, adhering <br />
          strictly to environmental and health regulations.
        </p>

        <div style={{ display: 'flex', marginTop: '40px', gap: '40px' }} id="about-uae">
          <p style={{ fontWeight: '600', fontSize: '22px', textAlign: 'start' }}>
            100% <br /> Compliance
          </p>
          <p style={{ fontWeight: '600', fontSize: '22px', textAlign: 'start' }}>
            UAE <br /> Based
          </p>
        </div>

        <div style={{ textAlign: 'start', marginTop: '20px' }} id="about-button">
  <button
    style={{
      border: '1px solid #003C82',
      borderRadius: '25px',
      width: '150px',
      height: '45px',
      backgroundColor: 'white',
      color: '#003C82',
      fontWeight: '600',
    }}
    id="about-btn"
  >
    Contact Us
  </button>
</div>
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center about-img">
      <div style={{
        height: "450px",
        width: "450px",
        border: '1px solid #003C82',
        padding: '15px',
        borderRadius: '20px'
      }}>
        <img
          src="/images/refuel.webp"
          alt=""
                style={{ width: '100%', height: '100%', borderRadius: '12px' }}
                className="img-fluid"
        />
      </div>
    </div>

  </div>
</div>



      {/* ------------------ about */}

      {/* ------------------ carousel */}

      <div>
      <ServiceSlider />
    </div>


      {/* ------------------ carousel */}

      {/* ------------------ products */}

      <Products></Products>

      {/* ------------------ products */}

      {/* ------------------ cards */}

      <h2 style={{ fontSize: '40px', fontWeight: '700',marginTop:'150px' }}>Our Values</h2>
      <div className="values-container">
      
  <div className="value-card">
    <img src="/images/whitebowl.webp" alt="Quality" />
    <div className="value-text">
      <h3>Quality</h3>
      <p>Delivering high-quality products and exceptional services.</p>
    </div>
  </div>
  <div className="value-card">
    <img src="/images/abstract.webp" alt="Professionalism" />
    <div className="value-text">
      <h3>Professionalism</h3>
      <p>Upholding high ethics and performance standards.</p>
    </div>
  </div>
  <div className="value-card">
    <img src="/images/business.webp" alt="Innovation" />
    <div className="value-text">
      <h3>Innovation</h3>
      <p>Continuously innovating in operations and products.</p>
    </div>
  </div>
  <div className="value-card">
    <img src="/images/handshake.webp" alt="Transparency" />
    <div className="value-text">
      <h3>Transparency</h3>
      <p>Maintaining integrity in all business relationships.</p>
    </div>
  </div>
</div>



      {/* ------------------ cards */}

      
      <Team></Team>

      {/* ------------------- clients */}

      <div className="testimonial mb-5">

        <TestimonialSlider></TestimonialSlider>

      </div>

      {/* ------------------- clients */}


      <div className="footer pt-5">
        <Footer></Footer>
      </div>

    </div>
  );
}
