import { useEffect } from 'react'
import Header from '../components/Header'
import ServiceProduct from './ServiceProduct'
import Footer from '../components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Agriculture from './Agriculture'


export default function Service() {

    useEffect(() => {
  window.scrollTo(0, 0);
    }, []);
    

    useEffect(() => {
        AOS.init({ duration: 800, once: true })
    }, [])


  return (
      <div>
          
          <Header></Header>

          <ServiceProduct></ServiceProduct>

          <Agriculture></Agriculture>

          {/* high performance */}

          <div className="container-fluid high-performance" style={{backgroundColor:'#F9FEFF',paddingBottom:'50px'}}>
              
            <h2 style={{fontSize:'40px',fontWeight:'700',marginTop:'150px',marginBottom:'50px',paddingTop:'50px'}}>High-Performance Fuel Solutions</h2>


              <div className="row">
                  
                  <div className="col-lg-1"></div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-4 col-12 hp" style={{border:'1px solid #003C82',padding:'15px',borderRadius:'25px',marginRight:'20px'}}>
                      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <p style={{fontSize:'25px',fontWeight:'600',textAlign:'start'}}>Efficient Combustion</p>
                        <img src="/images/ser1.png" alt="" style={{height:'121px',width:'100px'}}/>
                      </div>
                      <p style={{fontSize:'20px',fontWeight:'600',textAlign:'start'}}>Fuel blends engineered for cleaner ignition, reduced emissions, and improved fuel economy across applications.</p>
                  </div>
                  <div className="col-lg-4 col-12 hp"  style={{border:'1px solid #003C82',padding:'15px',borderRadius:'25px',marginRight:'20px'}}>
                  
                      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <p style={{fontSize:'25px',fontWeight:'600',textAlign:'start'}}>Sustainable Choices</p>
                        <img src="/images/ser2.png" alt="" style={{height:'121px',width:'100px'}}/>
                      </div>
                      <p style={{fontSize:'20px',fontWeight:'600',textAlign:'start'}}>Eco-conscious fuel options designed to minimize environmental impact and support cleaner energy goals.</p>
                      
                  </div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-1"></div>

              </div>

              {/* row 2 */}

              <div className="row" style={{marginTop:'10px'}}>
                  
                  <div className="col-lg-1"></div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-4 col-12 hp" style={{border:'1px solid #003C82',padding:'15px',borderRadius:'25px',marginRight:'20px'}}>
                      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <p style={{fontSize:'25px',fontWeight:'600',textAlign:'start'}}>Engine Efficiency</p>
                        <img src="/images/ser3.png" alt="" style={{height:'121px',width:'100px'}}/>
                      </div>
                      <p style={{fontSize:'20px',fontWeight:'600',textAlign:'start'}}>Formulated to enhance engine output, boost performance, and extend operational lifespan under demanding conditions.</p>
                  </div>
                  <div className="col-lg-4 col-12 hp"  style={{border:'1px solid #003C82',padding:'15px',borderRadius:'25px',marginRight:'20px'}}>
                  
                      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <p style={{fontSize:'25px',fontWeight:'600',textAlign:'start'}}>Protective Additives </p>
                        <img src="/images/ser4.png" alt="" style={{height:'121px',width:'100px'}}/>
                      </div>
                      <p style={{fontSize:'20px',fontWeight:'600',textAlign:'start'}}>Infused with advanced additives to prevent corrosion, reduce buildup, and maintain optimal engine health.</p>
                      
                  </div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-1"></div>

              </div>

          </div>

          
          {/* safe handling */}


          <div className="container safe-handling">
              
            <h2 style={{fontSize:'40px',fontWeight:'700',marginTop:'150px',marginBottom:'50px',color:'#003C82'}}>Safe Handling & Storage Systems</h2>


              <div className="row safe">
                
                  <div className="col-lg-2"></div>
                  <div className="col-lg-8" style={{ border: '1px solid #003C82', padding: '15px', borderRadius: '25px' }} data-aos="fade-up">
                      
                  <div style={{ display: 'flex' }} className='col1'>
                          
                          <div className="text-block">
                          <p style={{ fontSize: '30px', fontWeight: '600', marginTop:'20px',textAlign:'start',color:'#003C82' }}>1. Advance Safety Protocol</p>
                          <p style={{fontSize:'20px',fontWeight:'600',marginTop:'40px',textAlign:'start'}}>We follow strict, internationally recognized safety procedures to protect people, property, and the environment at all times.</p>
                          </div>
                          <div className="glass-effect-wrapper">
                          <img src="/images/safe1.webp" alt="safe" className="glass-img" />
                          <div className="glass-overlay"></div>
                          </div>


                      </div>


                  </div>
    
                  <div className="col-lg-2"></div>

              </div>

              {/* row 2 */}

              <div className="row mt-5 safe">
                
                  <div className="col-lg-2"></div>
                  <div className="col-lg-8" style={{ border: '1px solid #003C82', padding: '15px', borderRadius: '25px' }}  data-aos="fade-up" data-aos-delay="100">
                      
                      <div style={{display:'flex'}} className='col1'>
                          
                          <div className="text-block">
                          <p style={{ fontSize: '30px', fontWeight: '600', marginTop:'20px',textAlign:'start',color:'#003C82' }}>2. Modern Storage Infrastructure</p>
                          <p style={{fontSize:'20px',fontWeight:'600',marginTop:'40px',textAlign:'start'}}>Our facilities are equipped with cutting-edge storage systems, real-time monitoring, and emergency control mechanisms to ensure secure containment.</p>
                          </div>
                          
                          <div className="glass-effect-wrapper">
  <img src="/images/safe2.webp" alt="safe" className="glass-img" />
  <div className="glass-overlay"></div>
</div>


                      </div>


                  </div>
    
                  <div className="col-lg-2"></div>

              </div>


              {/* row 3 */}

              <div className="row mt-5 safe2">
                
                  <div className="col-lg-2"></div>
                  <div className="col-lg-8" style={{ border: '1px solid #003C82', padding: '15px', borderRadius: '25px' }} data-aos="fade-up"
      data-aos-delay="200">
                      
                      <div style={{display:'flex'}} className='col2'>

                          <div className="glass-effect-wrapper">
  <img src="/images/safe3.webp" alt="safe" className="glass-img" />
  <div className="glass-overlay"></div>
</div>

                          
                          <div className="text-block">
                          <p style={{ fontSize: '30px', fontWeight: '600', marginTop:'20px',textAlign:'start',padding:'0 30px',color:'#003C82' }}>3. Quality Assurance Systems</p>
                          <p style={{fontSize:'20px',fontWeight:'600',marginTop:'40px',padding:'0 30px',textAlign:'start'}}>Continuous testing and quality control are implemented at every step to preserve product integrity and meet industry benchmarks.</p>
                          </div>
                          
                          

                      </div>


                  </div>
    
                  <div className="col-lg-2 mt-5"></div>

              </div>

              {/* row 4 */}

              <div className="row mt-5 safe2">
                
                  <div className="col-lg-2"></div>
                  <div className="col-lg-8" style={{ border: '1px solid #003C82', padding: '15px', borderRadius: '25px' }} data-aos="fade-up" data-aos-delay="300">
                      
                      <div style={{ display: 'flex' }} className='col2'>
                          
                         <div className="glass-effect-wrapper">
  <img src="/images/safe4.webp" alt="safe" className="glass-img" />
  <div className="glass-overlay"></div>
</div>

                          
                          <div className="text-block">
                          <p style={{ fontSize: '30px', fontWeight: '600', marginTop:'5px',textAlign:'start',padding:'0 13px',color:'#003C82' }}>4. Environmental Responsibility</p>
                          <p style={{fontSize:'20px',fontWeight:'600',marginTop:'40px',textAlign:'start',padding:'0 30px'}}>We maintain full compliance with environmental regulations and adopt eco-friendly handling practices to reduce operational impact.</p>
                          </div>
                          
                          

                      </div>


                  </div>
    
                  <div className="col-lg-2"></div>

              </div>


          </div>

          {/* <div className="container-fluid" style={{ marginBottom: '100px', backgroundColor: '#F9FEFF', paddingBottom: '50px' }}>
              
              <h2 style={{ fontSize: '40px', fontWeight: '700', marginTop: '150px', marginBottom: '50px' }}>Strategic Distribution Network</h2>
              <p style={{marginBottom:'50px',fontSize:'18px',fontWeight:'400'}}>Efficient logistics and distribution systems ensuring timely delivery <br /> of petroleum products across regional and global markets.</p>


              <div className="row">
                  <div className="col-3"></div>
                  <div className="col-lg-6" style={{border:'1px solid #003C82',borderRadius:'20px',height:'433px'}}>
                      


                  </div>
                  <div className="col-3"></div>
             </div>
          </div> */}

      <div className="footer" style={{marginTop:'100px'}}>
        <Footer></Footer>
          </div>


    </div>
  )
}
