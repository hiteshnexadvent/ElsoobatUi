import React, { useEffect, useState } from 'react'
import './Slide.css'
import Header from '../components/Header'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; 
import FAQSection from './FAQSection';
import LocationMap from './LocationMap';
import Footer from '../components/Footer';

export default function Contact() {

  const [phone, setPhone] = useState('');

  useEffect(() => {
  window.scrollTo(0, 0);
  }, []);
  

  return (
    <div>

      <Header></Header>

      <div className="container">
        <div className="row" style={{marginTop:'150px'}}>
          
          <div className="col-lg-6 col-md-6 col-12">

            <h2 style={{ fontSize: '42px', fontWeight: '600' , marginTop: '50px'}}>Get In Touch</h2>
          <p style={{ fontSize: '28px', fontWeight: '400',textAlign:'start' }}>Fill out the form below or schedule a meeting with us at your convinience </p>

          </div>
          <div className="col-lg-6 col-md-6 col-12">

            <form style={{border:'1px solid #003C82',borderTop: '10px solid #003C82',width:'550px',height:'525px',borderRadius:'20px',margin:'30px auto'}}>
            

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


             

              <button style={{backgroundColor:'#003C82',width:'250px',height:'50px',borderRadius:'8px',color:'white',border:'none',fontSize:'20px',fontWeight:'600',marginTop:'20px'}}>Submit Request</button>
              
            </form>

          </div>

        </div>

        </div>
      
      <div className="container-fluid" style={{backgroundColor:'#F9FEFF',padding:'20px 150px 50px 50px'}}>

        <h2 style={{fontSize:'35px',textAlign:'start',fontWeight:'500',marginTop:'60px',paddingLeft:'20px'}}>You can also Contact Us via</h2>
        
        <div className="row">

          <div className="col-lg-4" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>

            <div style={{backgroundColor:'#003C82',height:'70px',width:'70px',borderRadius:'50%',padding:'20px'}}>
              <img src="/images/call.png" alt="" style={{ height: '30px', width: '30px'}} />
            </div>
            <div>
              <ul style={{listStyle:'none'}}>
                <li style={{fontSize:'20px',fontWeight:'400'}}>+(971) 4 222 4414</li>
                <li style={{fontSize:'20px',fontWeight:'400'}}>+(971) 50 281 6865</li>
              </ul>
            </div>

          </div>
          <div className="col-lg-4" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>

            <div style={{backgroundColor:'#003C82',height:'70px',width:'70px',borderRadius:'50%',padding:'20px'}}>
              <img src="/images/mail.png" alt="" style={{ backgroundColor: '#003C82', height: '30px', width: '30px', borderRadius: '50%' }} />
            </div>
            <div>
              <p style={{fontSize:'20px',fontWeight:'400',paddingLeft:'20px'}}>Info@Elsoobatenergy.com</p> 
            </div>

          </div>
          <div className="col-lg-4" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>

            <div style={{backgroundColor:'#003C82',height:'70px',width:'70px',borderRadius:'50%',padding:'20px'}}>
              <img src="/images/location.png" alt="" style={{ backgroundColor: '#003C82', height: '30px', width: '30px', borderRadius: '50%' }} />
            </div>
            <div>
              <p style={{fontSize:'20px',fontWeight:'400',paddingLeft:'20px',textAlign:'start'}}>Unit No: 4100 DMCC, Business Centre Level No. 1, Jewellery & Gemplex 3 Dubai, United Arab Emirates PO Box: 18630</p>
            </div>

          </div>

        </div>

      </div>

          <FAQSection></FAQSection>
        
          <LocationMap></LocationMap>
        
        <Footer></Footer>

    </div>
  )
}
