import React from 'react'
import BetterBgImg from './BetterBgImg'
import { FiInstagram, FiFacebook, FiYoutube, FiTwitter } from "react-icons/fi";

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <div>

      {/* ------------------- better life */}

      
      <BetterBgImg/>

      {/* ------------------- better life */}

      {/* ------------------- footer */}

      <div className="footer" style={{ width: '100%', height: 'auto',backgroundColor:'#003C82'}}>
        
        <div className="container" >

        <div className="row">
          <div className="col-lg-3" style={{ border: '1px solid #FFFFFF',height:'270px',width:'268px',borderRadius:'20px',marginRight:'20px' }}>
            <div className="logo d-flex pt-3">
                      <img src="/images/logo.png" alt="" style={{ width: '56px', height: '58px' }} />
                      <p style={{fontWeight:'700',fontSize:'22px',color:'white',paddingTop:'15px'}}>ELSOOBAT</p>
            </div>
            <p style={{ textAlign: 'start', color: '#FFFFFF', paddingTop: '13px' }}>We deliver reliable solutions and premium products that fuel your success for years to come.</p>
            <div>
              <div style={{display:'flex',justifyContent:'space-evenly',paddingTop:'20px'}}>
                <FiInstagram style={{ fontSize: '2rem', color: '#fff' }} />
<FiFacebook style={{ fontSize: '2rem', color: '#fff' }} />
<FiYoutube style={{ fontSize: '2rem', color: '#fff' }} />
<FiTwitter style={{ fontSize: '2rem', color: '#fff' }} />
            </div>
            </div>
          </div>
          <div className="col-lg-5 pt-4" style={{ border: '1px solid #FFFFFF', height: '270px', width: '465px', borderRadius: '20px', marginRight: '20px' }}>
            <p style={{ fontSize: '24px', fontWeight: '700', color: '#FFFFFF', textAlign: 'start' }}>Take a ride with us</p>
            <p style={{ fontSize: '14px', color: '#FFFFFF', textAlign: 'start' }}>Subscribe to be the first to know <br /> about our latest product <br /> launches, industry updates, and <br />exclusive offers.</p>


            <div className="newsletter-wrapper">
      <div className="newsletter-input-group">
        <input
          type="email"
          placeholder="Enter your email address"
          className="newsletter-input"
        />
        <button className="newsletter-button">Subscribe</button>
      </div>
    </div>
            
          </div>
          <div className="col-lg-2 pt-4" style={{ border: '1px solid #FFFFFF', height: '270px', width: '169px', borderRadius: '20px', marginRight: '20px' }}>
            
            <p style={{ fontSize: '24px', fontWeight: '700', color: '#FFFFFF', textAlign: 'start' }}>About</p>

            <div style={{ textAlign: 'left',color:'#FFFFFF',fontSize:'14px',lineHeight:'25px' }}>
  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
    <li>About Us</li>
    <li>Career</li>
    <li>News And Article</li>
    <li>Partners</li>
  </ul>
</div>



          </div>
          <div className="col-lg-2 pt-4" style={{ border: '1px solid #FFFFFF', height: '270px', width: '169px', borderRadius: '20px', marginRight: '20px' }}>
            
            <p style={{ fontSize: '24px', fontWeight: '700', color: '#FFFFFF', textAlign: 'start' }}>Support</p>

            <div style={{ textAlign: 'left',color:'#FFFFFF',fontSize:'14px',lineHeight:'25px' }}>
  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
    <li>Contact Us</li>
    <li>FAQ</li>
    <li>Privacy Policy</li>
  </ul>
</div>

          </div>
        </div>
        <p style={{fontSize:'14px',color:'#FFFFFF',paddingTop:'40px'}}>Copyright © {currentYear}. All Rights Reserved.</p>
      </div>
       


      </div>
      
    </div>
  )
}
