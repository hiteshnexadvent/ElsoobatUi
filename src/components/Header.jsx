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
    if (pathname === '/service') return <PetrolBgImg />;
    return null;
  };

  return (
      <div>
          
          <div id="navbar">

              <nav class="navbar navbar-expand-lg" style={{backgroundColor:'transparent'}}>
                <div class="container-fluid">
                      <a class="navbar-brand" href="/">
                          
                        <div className="logo d-flex">
                      <img src="/images/logo.png" alt="" style={{ width: '56px', height: '58px',marginLeft:'167px' }} className='logo img-fluid' />
                      <p style={{fontWeight:'700',fontSize:'22px',color:'white',paddingTop:'15px'}}>ELSOOBAT</p>
                      </div>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0" style={{border:'1px solid white',borderRadius:'30px',padding:'5px 40px',marginRight:'150px'}}>
        <li class="nav-item">
                                  <a class="nav-link text-light me-3" href="/" style={{ fontSize: '14px' }}>Home</a>
                              </li>
                              <li class="nav-item">
          <a class="nav-link text-light me-3" href="/about" style={{ fontSize: '14px' }}>About</a>
                              </li>

                                      {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}

                              <li class="nav-item">
          <a class="nav-link text-light me-3" href="/service" style={{ fontSize: '14px' }}>Services</a>
                              </li>
                              <li class="nav-item">
          <a class="nav-link text-light me-3" href="#" style={{ fontSize: '14px' }}>Products</a>
                              </li>
                              <li class="nav-item">
          <a class="nav-link text-light me-3" href="#" style={{ fontSize: '14px' }}>Contact</a>
        </li>

       
      </ul>
      
    </div>
  </div>
</nav>



          </div>

          {renderBackground()}
          

          
    </div>
  )
}
