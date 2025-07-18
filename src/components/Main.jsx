import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Style1.css';

// import required modules
import { Pagination } from 'swiper/modules';
import ServiceSlider from "./ServiceSlider";
import Products from "./Products";
import TestimonialSlider from "./TestimonialSlider";
import BetterBgImg from "./BetterBgImg";
import Footer from "./Footer";
import Team from "../pages/Team";

export default function Main() {
  return (
    <div>
      
      {/* ------------------ about */}

      <div className="about">
        <div style={{ marginTop: "150px", display: "flex",justifyContent:'center',marginBottom:'100px'}}>
          <div style={{paddingTop:'25px',paddingRight:'250px'}}>
            <h2 style={{fontSize:'40px',fontWeight:'700',textAlign:'start'}}>About Elsoobat</h2>
            <p style={{fontSize:'16px',textAlign:'start',marginTop:'40px'}}>
              Established on April 24, 2019, under the leadership of <br /> Chairman
              Hisham Hassan Mohammed Ahmed Ali, Elsoobat is <br /> a proud member of
              the prestigious El Soobat Group.</p>
              <p style={{fontSize:'16px',textAlign:'start'}}>Our team of seasoned
              professionals in petroleum and <br /> agriculture ensures top-tier
              services and products, adhering <br /> strictly to environmental and
              health regulations.
            </p>
            <div style={{display:'flex',marginTop:'40px'}}>
              <p style={{fontWeight:'600',fontSize:'22px',textAlign:'start',paddingRight:'100px'}}>100 % <br /> Compliance</p>
            <p style={{fontWeight:'600',fontSize:'22px',textAlign:'start'}}>UAE <br /> Based</p>
            </div>
            <button style={{border:'1px solid #003C82',borderRadius:'25px',width:'150px',height:'45px',backgroundColor:'white',color:'#003C82',fontWeight:'600',marginRight:'285px',marginTop:'20px'}}>Contact Us</button>
          </div>
        
        <div style={{ height: "450px", width: "450px",border:'1px solid #003C82',padding:'15px',borderRadius:'20px' }}>
          <img
            src="/images/refuel.jpg"
            alt=""
            style={{ width:'100%',height:'100%',borderRadius:'12px'}}
          />
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
      <div class="values-container">
      
  <div class="value-card">
    <img src="/images/whitebowl.jpg" alt="Quality" />
    <div class="value-text">
      <h3>Quality</h3>
      <p>Delivering high-quality products and exceptional services.</p>
    </div>
  </div>
  <div class="value-card">
    <img src="/images/abstract.jpg" alt="Professionalism" />
    <div class="value-text">
      <h3>Professionalism</h3>
      <p>Upholding high ethics and performance standards.</p>
    </div>
  </div>
  <div class="value-card">
    <img src="/images/business.jpg" alt="Innovation" />
    <div class="value-text">
      <h3>Innovation</h3>
      <p>Continuously innovating in operations and products.</p>
    </div>
  </div>
  <div class="value-card">
    <img src="/images/handshake.jpg" alt="Transparency" />
    <div class="value-text">
      <h3>Transparency</h3>
      <p>Maintaining integrity in all business relationships.</p>
    </div>
  </div>
</div>



      {/* ------------------ cards */}

      
      <Team></Team>

      {/* ------------------- clients */}

      <div className="testimonial">

        <TestimonialSlider></TestimonialSlider>

      </div>

      {/* ------------------- clients */}


      <Footer></Footer>

    </div>
  );
}
