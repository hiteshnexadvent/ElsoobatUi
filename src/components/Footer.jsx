import React from 'react'
import BetterBgImg from './BetterBgImg'
import { FiInstagram, FiFacebook, FiYoutube, FiTwitter } from "react-icons/fi";
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      {/* ------------------- better life */}
      <BetterBgImg />

      {/* ------------------- footer */}
      <div className="footer" style={{ width: '100%', backgroundColor: '#003C82' }}>
        <div className="container-fluid gx-0 py-5 px-4">
          <div className="row gx-0  justify-content-space-evenly">

            {/* Logo & Description */}
            <div className="col-lg-3 col-md-4 col-12 mb-4 p-3 me-3" style={{ border: '1px solid #FFFFFF', borderRadius: '20px' }}>
              <div className="logo d-flex align-items-center gap-2 pt-2">
                <img src="/images/logo.png" alt="" style={{ width: '56px', height: '58px' }} />
                <p style={{ fontWeight: '700', fontSize: '22px', color: 'white', marginBottom: 0 }}>ELSOOBAT</p>
              </div>
              <p style={{ textAlign: 'start', color: '#FFFFFF', paddingTop: '13px' }}>
                We deliver reliable solutions and premium products that fuel your success for years to come.
              </p>
              <div className="d-flex justify-content-start gap-3 pt-3">
                <FiInstagram style={{ fontSize: '2rem', color: '#fff' }} />
                <FiFacebook style={{ fontSize: '2rem', color: '#fff' }} />
                <FiYoutube style={{ fontSize: '2rem', color: '#fff' }} />
                <FiTwitter style={{ fontSize: '2rem', color: '#fff' }} />
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-lg-4 col-md-7 col-12 mb-4 p-3 me-3" style={{ border: '1px solid #FFFFFF', borderRadius: '20px' }}>
              <p style={{ fontSize: '24px', fontWeight: '700', color: '#FFFFFF', textAlign: 'start' }}>Take a ride with us</p>
              <p style={{ fontSize: '14px', color: '#FFFFFF', textAlign: 'start' }}>
                Subscribe to be the first to know <br />
                about our latest product <br />
                launches, industry updates, and <br />
                exclusive offers.
              </p>
              <div className="newsletter-wrapper pt-2">
                <div className="newsletter-input-group d-flex flex-wrap gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="newsletter-input"
                    style={{
                      flex: 1,
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: 'none',
                      minWidth: '200px',
                    }}
                  />
                  <button className="newsletter-button" style={{
                    padding: '8px 16px',
                    backgroundColor: '#003C82',
                    color: '#fff',
                    fontWeight: 600,
                    borderRadius: '6px',
                    border: 'none',
                  }}>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="col-lg-2 col-md-4 col-12 mb-4 p-3 me-3" style={{ border: '1px solid #FFFFFF', borderRadius: '20px' }}>
              <p style={{ fontSize: '24px', fontWeight: '700', color: '#FFFFFF', textAlign: 'start' }}>About</p>
              <div style={{ textAlign: 'left', color: '#FFFFFF', fontSize: '14px', lineHeight: '25px' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <Link to='/about' style={{textDecoration:'none',color: '#FFFFFF'}}><li>About Us</li></Link>
                                    <Link to='/service' style={{textDecoration:'none',color: '#FFFFFF'}}><li>Services</li></Link>
                                    <Link to='/blog' style={{textDecoration:'none',color: '#FFFFFF'}}><li>Blogs</li></Link>
                  
                </ul>
              </div>
            </div>

            {/* Support */}
            <div className="col-lg-2 col-md-7 col-12 mb-4 p-3" style={{ border: '1px solid #FFFFFF', borderRadius: '20px' }}>
              <p style={{ fontSize: '24px', fontWeight: '700', color: '#FFFFFF', textAlign: 'start' }}>Support</p>
              <div style={{ textAlign: 'left', color: '#FFFFFF', fontSize: '14px', lineHeight: '25px' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <Link to='/contact'style={{textDecoration:'none',color: '#FFFFFF'}}><li>Contact Us</li></Link>
                                    <Link to='/contact' style={{textDecoration:'none',color: '#FFFFFF'}}><li>FAQ</li></Link>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>

          </div>

          <p style={{ fontSize: '14px', color: '#FFFFFF', paddingTop: '20px', textAlign: 'center' }}>
            Copyright © {currentYear}. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
