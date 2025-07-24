import React, { useState } from 'react'
import './Style1.css'
import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; 

export default function BetterBgImg() {

  const [phone, setPhone] = useState('');

  return (
      <div className='betterimg'>

      
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 better-para">

            <div style={{ paddingTop:'100px' }}>
              
               <h2 style={{ fontSize: '48px', color: 'white', fontWeight: '700',marginTop:'60px', marginLeft: '25px', marginRight: '25px' }}>Partner with Us for Reliable Trade Solutions</h2>
              <p style={{ fontSize: '18px', fontWeight: '400', color: 'white', paddingTop: '20px',textAlign:'start',marginLeft:'70px' }}>From energy to agriculture, we deliver tailored sourcing  and supply plans built around your business needs. Whether it’s high-grade fuels, lubricants, or premium grains and oils <br /> — our team ensures consistency, quality, and timely delivery.</p>

         </div>

          </div>
          <div className="col-lg-6 col-md-12 col-12">

            <form style={{border:'1px solid #003C82',backgroundColor:'white',width:'auto',height:'525px',borderRadius:'20px',margin:'30px auto'}}>
                        
            
                            <div>
                            <input type="text" name='name' placeholder='Your Name' style={{width:'80%',height:'45px',marginTop:'20px',paddingLeft:'10px',border: '1px solid #cad2db',borderRadius:'8px'}}/>
                          </div>
                          <div>
                            <input type="email" name='email' placeholder='Enter Your Email' style={{width:'80%',height:'45px',marginTop:'10px',paddingLeft:'10px',border: '1px solid #cad2db',borderRadius:'8px'}}/>
                          </div>
                          <div className="phone-input" style={{ margin: '20px auto 0' ,width:'81%',height:'45px',marginTop:'10px',paddingLeft:'10px'}}>
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
                            <input type="text" name="country" style={{width:'80%',height:'45px',marginTop:'10px',paddingLeft:'10px',border: '1px solid #cad2db',borderRadius:'8px'}} placeholder="Enter Your Country" />
                          </div>
                          <div>
                            <input type="text" name="city" placeholder="Enter Your City/State" style={{width:'80%',height:'45px',marginTop:'10px',paddingLeft:'10px',border: '1px solid #cad2db',borderRadius:'8px'}}/>
                          </div>
                          <div>
                            <textarea name="message" placeholder='Please describe your query or requirenments...' rows="5" cols="50" style={{width:'80%',marginTop:'10px',paddingLeft:'10px',border: '1px solid #cad2db',paddingTop:'10px',borderRadius:'8px'}}></textarea>
                          </div>
            
            
                         
            
                          <button style={{backgroundColor:'#003C82',width:'80%',height:'50px',borderRadius:'8px',color:'white',border:'none',fontSize:'20px',fontWeight:'600',marginTop:'20px'}}>SUBMIT REQUEST</button>
                          
                        </form>
            

          </div>
        </div>
      </div>


          


    </div>
  )
}
