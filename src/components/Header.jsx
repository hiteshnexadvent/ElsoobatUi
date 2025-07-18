import React from 'react'
import './Style1.css'
import BackgroundImage from './BackgroundImage'
import { Link, useLocation } from 'react-router-dom'
import AboutBgImage from '../pages/AboutBgImage'
import ContactBgImg from '../pages/ContactBgImg'
import PetrolBgImg from '../pages/PetrolBgImg'

export default function Header() {

    const location = useLocation();
    const pathname = location.pathname;

    const renderBackground = () => {
    if (pathname === '/') return <BackgroundImage />;
    if (pathname === '/about') return <AboutBgImage />;
    if (pathname === '/contact') return <ContactBgImg />;
    if (pathname === '/petrol') return <PetrolBgImg />;
    return null; // fallback if none match
  };

  return (
      <div>
          
          <div className="container-fluid" id='navbar'>
              <div className="row" style={{height:'auto',backgroundColor:'transparent'}} >
                  <div className="col-lg-3 d-flex">
                      <img src="/images/logo.png" alt="" style={{ width: '56px', height: '58px',marginLeft:'167px' }} />
                      <p style={{fontWeight:'700',fontSize:'22px',color:'white',paddingTop:'15px'}}>ELSOOBAT</p>
                  </div>
                  <div className="col-lg-3"></div>
                  <div className="col-lg-6" style={{border:'1px solid #FFFFFF',width:'465px',height:'43px',borderRadius:'20px',paddingTop:'10px'}}>
                      <ul style={{ listStyle: 'none', display: 'flex', color: 'white', fontSize: '14px', fontWeight: '400' }}>
                          <Link to='/' style={{textDecoration:'none',color:'white'}}>Home</Link>
                          <Link to='/about' style={{textDecoration:'none',color:'white'}}><li style={{marginLeft:'30px'}}>About</li></Link>
                          <select name="" id="" style={{backgroundColor:'transparent',color:'white',border:'none',marginLeft:'30px'}}>
                              <option value="">Services</option>
                          </select>
                          <li style={{marginLeft:'30px'}}>Products</li>
                          <li style={{marginLeft:'30px'}}>Contact</li>
                      </ul>
                  </div>
              </div>
              
          </div>
          {renderBackground()}

    </div>
  )
}
