import React, { useEffect, useState } from 'react'
import './Slide.css'
import '../pages/PageStyle.css'
import Header from '../components/Header'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; 
import FAQSection from './FAQSection';
import LocationMap from './LocationMap';
import Footer from '../components/Footer';
import Captcha from './Captcha';

export default function Contact() {

  const [phone, setPhone] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');


  useEffect(() => {
  window.scrollTo(0, 0);
  }, []);

  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  };
  

  return (
    <div>

      <Header></Header>

      <div className="container gx-0">
        <div className="row gx-0 contact-form" style={{marginTop:'150px'}}>
          
          <div className="col-lg-6 col-md-12 col-12">

            <div style={{paddingTop:'250px',paddingRight:'20px'}} className='getintouch'>
               <h2 style={{ fontSize: '42px', fontWeight: '600',textAlign:'start',color:'#003C82'}}>Get In Touch</h2>
          <p style={{ fontSize: '28px', fontWeight: '400',textAlign:'start',marginTop:'40px' }}>Fill out the form below or schedule a meeting with us at your convinience </p>
           </div>

          </div>
          <div className="col-lg-6 col-md-12 col-12 getintouch-form">

            <form style={{border:'1px solid #003C82',borderTop: '10px solid #003C82',width:'auto',height:'auto',borderRadius:'20px',margin:'30px auto',padding:'30px 0px'}}>
            

                <div>
                <input type="text" name='name' placeholder='Your Name' style={{width:'80%',height:'45px',marginTop:'20px',paddingLeft:'10px',border: '1px solid #003C82',borderRadius:'8px'}}/>
              </div>
              <div>
                <input type="email" name='email' placeholder='Enter Your Email' style={{width:'80%',height:'45px',marginTop:'10px',paddingLeft:'10px',border: '1px solid #003C82',borderRadius:'8px'}}/>
              </div>
              <div className="phone-input" style={{ margin: '20px auto 0' ,width:'82%',height:'45px',marginTop:'10px',paddingLeft:'10px'}}>
                  <PhoneInput
                    country={'ae'} // UAE default
                    value={phone}
                    onChange={setPhone}
                    enableSearch={true}
                    inputProps={{
                      name: 'mobile',
                      required: true,
                      placeholder: 'Enter Your Phone Number',
                    }}
                  />
                </div>
              <div>
                <input type="text" name="country" style={{width:'80%',height:'45px',marginTop:'10px',paddingLeft:'10px',border: '1px solid #003C82',borderRadius:'8px'}} placeholder="Enter Your Country" />
              </div>
              <div>
                <input type="text" name="city" placeholder="Enter Your City/State" style={{width:'80%',height:'45px',marginTop:'10px',paddingLeft:'10px',border: '1px solid #003C82',borderRadius:'8px'}}/>
              </div>
              <div>
                <textarea name="message" placeholder='Please describe your query or requirenments...' rows="5" cols="50" style={{width:'80%',marginTop:'10px',paddingLeft:'10px',border: '1px solid #003C82',paddingTop:'10px',borderRadius:'8px'}}></textarea>
              </div>

              {/* CAPTCHA */}
              

              <div className="captcha" style={{margin:'auto'}}>
                    <Captcha onChange={`handleCaptchaChange`} />
              </div>

             

              <button style={{backgroundColor:'#003C82',width:'80%',height:'50px',borderRadius:'8px',color:'white',border:'none',fontSize:'20px',fontWeight:'600',marginTop:'20px'}}>SUBMIT REQUEST</button>
              
            </form>

          </div>

        </div>

        </div>
      
      <div className="container-fluid contact-details gx-0" style={{ backgroundColor: '#F9FEFF', padding: '20px 5vw 50px 5vw' }}>
  <h2 style={{ fontSize: '2rem', textAlign: 'start', fontWeight: '500', marginTop: '60px', paddingLeft: '10px' }}>
    You can also Contact Us via
  </h2>

  <div className="row gx-0 gy-4 mt-4">

    {/* Phone */}
    <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center contact-details-call">
      <div style={{ backgroundColor: '#003C82', borderRadius: '50%', padding: '15px', marginRight: '15px' }}>
        <img src="/images/call.png" alt="call" style={{ height: '30px', width: '30px' }} />
      </div>
      <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: 0 }}>
        <li style={{ fontSize: '18px', fontWeight: '400' }}>
  <a href="tel:+97142224414" style={{ color: 'inherit', textDecoration: 'none' }}>
    +(971) 4 222 4414
  </a>
</li>
<li style={{ fontSize: '18px', fontWeight: '400' }}>
  <a href="tel:+971502816865" style={{ color: 'inherit', textDecoration: 'none' }}>
    +(971) 50 281 6865
  </a>
</li>

      </ul>
    </div>

    {/* Email */}
    <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center contact-details-call">
      <div style={{ backgroundColor: '#003C82', borderRadius: '50%', padding: '15px', marginRight: '15px' }}>
        <img src="/images/mail.png" alt="mail" style={{ height: '30px', width: '30px' }} />
      </div>
      <p style={{ fontSize: '18px', fontWeight: '400', marginBottom: 0 }}>
  <a
    href="mailto:Info@Elsoobatenergy.com"
    style={{ color: 'inherit', textDecoration: 'none' }}
  >
    Info@Elsoobatenergy.com
  </a>
</p>

    </div>

    {/* Address */}
    <div className="col-lg-4 col-md-12 col-12 d-flex align-items-center contact-details-call">
      <div style={{ backgroundColor: '#003C82', borderRadius: '50%', padding: '15px', marginRight: '15px', marginTop: '5px' }}>
        <img src="/images/location.png" alt="location" style={{ height: '30px', width: '80px' }} />
      </div>
      <p style={{ fontSize: '18px', fontWeight: '400', marginBottom: '0',textAlign:'start' }}>
        Unit No: 4100 DMCC, Business Centre Level No. 1, Jewellery & Gemplex 3, Dubai, United Arab Emirates
        PO Box: 18630
      </p>
    </div>

  </div>
</div>

          <FAQSection/>
        
      <div className='location'>
        <LocationMap/>
          </div>
        
        <Footer/>

    </div>
  )
}
