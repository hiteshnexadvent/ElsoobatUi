import React from 'react'
import './Style1.css'
import BackgroundImage from './BackgroundImage'
import { useLocation } from 'react-router-dom'
import AboutBgImage from '../pages/AboutBgImage'
import ContactBgImg from '../pages/ContactBgImg'
import PetrolBgImg from '../pages/PetrolBgImg'
import BlogBgImage from '../pages/BlogBgImage'
import BlogReadBgImage from '../pages/BlogReadBgImage'

export default function Header() {

    const location = useLocation();
    const pathname = location.pathname;

    const renderBackground = () => {
    if (pathname === '/') return <BackgroundImage />;
    if (pathname === '/about') return <AboutBgImage />;
    if (pathname === '/contact') return <ContactBgImg />;
    if (pathname === '/service') return <PetrolBgImg />;
    if (pathname === '/blog') return <BlogBgImage />;
    if (pathname === '/blogread') return <BlogReadBgImage />;
    return null;
  };

  return (
      <div>
          
          <div id="navbar">

              <nav className="navbar navbar-expand-lg" style={{backgroundColor:'transparent'}}>
                <div className="container-fluid">
                      <a className="navbar-brand" href="/">
                          
                        <div className="logo d-flex">
                      <img src="/images/logo.png" alt="" style={{ width: '56px', height: '58px',marginLeft:'167px' }} className='logo img-fluid' />
                      <p style={{fontWeight:'700',fontSize:'22px',color:'white',paddingTop:'15px'}}>ELSOOBAT</p>
                      </div>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{border:'1px solid white',borderRadius:'30px',padding:'5px 40px',marginRight:'150px'}}>
        <li className="nav-item">
                              <a className="nav-link text-light me-3" href="/" style={{ fontSize: '14px' }}>Home</a>
                              </li>
                              <li className="nav-item">
          <a className="nav-link text-light me-3" href="/about" style={{ fontSize: '14px' }}>About</a>
                              </li>
                              <li className="nav-item">
          <a className="nav-link text-light me-3" href="/service" style={{ fontSize: '14px' }}>Services</a>
                              </li>
                              <li className="nav-item">
          <a className="nav-link text-light me-3" href="/blog" style={{ fontSize: '14px' }}>Blogs</a>
                              </li>
                              <li className="nav-item">
          <a className="nav-link text-light me-3" href="/contact" style={{ fontSize: '14px' }}>Contact</a>
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
