import { useEffect } from 'react'
import Header from '../components/Header'
import ServiceProduct from './ServiceProduct'
import Footer from '../components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'


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

          {/* high performance */}

          <div className="container-fluid" style={{backgroundColor:'#F9FEFF',paddingBottom:'50px'}}>
              
            <h2 style={{fontSize:'40px',fontWeight:'700',marginTop:'150px',marginBottom:'50px'}}>High-Performance Fuel Solutions</h2>


              <div className="row">
                  
                  <div className="col-lg-1"></div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-4" style={{border:'1px solid #003C82',padding:'15px',borderRadius:'25px',marginRight:'20px'}}>
                      <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                        <p style={{fontSize:'25px',fontWeight:'600',textAlign:'start'}}>Enhanced Combustion</p>
                        <img src="/images/ser1.png" alt="" style={{height:'121px',width:'100px'}}/>
                      </div>
                      <p style={{fontSize:'20px',fontWeight:'600',textAlign:'start'}}>Optimized fuel formulations for cleaner burning and improved <br /> energy output.</p>
                  </div>
                  <div className="col-lg-4"  style={{border:'1px solid #003C82',padding:'15px',borderRadius:'25px',marginRight:'20px'}}>
                  
                      <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                        <p style={{fontSize:'25px',fontWeight:'600',textAlign:'start'}}>Eco-Friendly Options</p>
                        <img src="/images/ser2.png" alt="" style={{height:'121px',width:'100px'}}/>
                      </div>
                      <p style={{fontSize:'20px',fontWeight:'600',textAlign:'start'}}>Sustainable fuel alternatives with reduced environmental impact <br /> and lower carbon footprint.</p>
                      
                  </div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-1"></div>

              </div>

              {/* row 2 */}

              <div className="row" style={{marginTop:'50px'}}>
                  
                  <div className="col-lg-1"></div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-4" style={{border:'1px solid #003C82',padding:'15px',borderRadius:'25px',marginRight:'20px'}}>
                      <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                        <p style={{fontSize:'25px',fontWeight:'600',textAlign:'start'}}>Superior Performance</p>
                        <img src="/images/ser3.png" alt="" style={{height:'121px',width:'100px'}}/>
                      </div>
                      <p style={{fontSize:'20px',fontWeight:'600',textAlign:'start'}}>High-octane fuels engineered for <br /> maximum power, efficiency, and <br /> engine longevity.</p>
                  </div>
                  <div className="col-lg-4"  style={{border:'1px solid #003C82',padding:'15px',borderRadius:'25px',marginRight:'20px'}}>
                  
                      <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                        <p style={{fontSize:'25px',fontWeight:'600',textAlign:'start'}}>Engine Protection</p>
                        <img src="/images/ser4.png" alt="" style={{height:'121px',width:'100px'}}/>
                      </div>
                      <p style={{fontSize:'20px',fontWeight:'600',textAlign:'start'}}>Advanced additives that protect <br />against corrosion, deposits, and <br /> wear.</p>
                      
                  </div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-1"></div>

              </div>

          </div>

          
          {/* safe handling */}


          <div className="container">
              
            <h2 style={{fontSize:'40px',fontWeight:'700',marginTop:'150px',marginBottom:'50px'}}>Safe Handling & Storage Systems</h2>


              <div className="row">
                
                  <div className="col-lg-2"></div>
                  <div className="col-lg-8" style={{ border: '1px solid #003C82', padding: '15px', borderRadius: '25px' }} data-aos="fade-up">
                      
                      <div style={{display:'flex'}}>
                          
                          <div style={{width:'70%'}}>
                          <p style={{ fontSize: '30px', fontWeight: '600', marginTop:'20px',textAlign:'start',color:'#003C82' }}>1. Advance Safety Protocol</p>
                          <p style={{fontSize:'20px',fontWeight:'600',marginTop:'40px',textAlign:'start'}}>Rigorous safety standards and procedures <br /> compliant with international regulations, ensuring maximum protection for personnel and environment.</p>
                          </div>
                          
                          <img src="/images/safe1.webp" alt="safe" style={{width:'237px',height:'213px',borderRadius:'14px'}}/>

                      </div>


                  </div>
    
                  <div className="col-lg-2"></div>

              </div>

              {/* row 2 */}

              <div className="row mt-5">
                
                  <div className="col-lg-2"></div>
                  <div className="col-lg-8" style={{ border: '1px solid #003C82', padding: '15px', borderRadius: '25px' }}  data-aos="fade-up"
      data-aos-delay="100">
                      
                      <div style={{display:'flex'}}>
                          
                          <div style={{width:'70%'}}>
                          <p style={{ fontSize: '30px', fontWeight: '600', marginTop:'20px',textAlign:'start',color:'#003C82' }}>2. Modern Storage Facilities</p>
                          <p style={{fontSize:'20px',fontWeight:'600',marginTop:'40px',textAlign:'start'}}>State-of-the-art storage tanks and terminals <br /> equipped with advanced monitoring systems  and emergency  response capabilities.</p>
                          </div>
                          
                          <img src="/images/safe2.webp" alt="safe" style={{width:'237px',height:'213px',borderRadius:'14px'}}/>

                      </div>


                  </div>
    
                  <div className="col-lg-2"></div>

              </div>


              {/* row 3 */}

              <div className="row mt-5">
                
                  <div className="col-lg-2"></div>
                  <div className="col-lg-8" style={{ border: '1px solid #003C82', padding: '15px', borderRadius: '25px' }} data-aos="fade-up"
      data-aos-delay="200">
                      
                      <div style={{display:'flex'}}>

                          <img src="/images/safe3.webp" alt="safe" style={{width:'237px',height:'213px',borderRadius:'14px'}}/>
                          
                          <div style={{width:'70%'}}>
                          <p style={{ fontSize: '30px', fontWeight: '600', marginTop:'20px',textAlign:'start',padding:'0 30px',color:'#003C82' }}>3. Quality Monitoring</p>
                          <p style={{fontSize:'20px',fontWeight:'600',marginTop:'40px',padding:'0 30px',textAlign:'start'}}>Continuous quality control and testing procedures to maintain product integrity and safety throughout the supply chain.</p>
                          </div>
                          
                          

                      </div>


                  </div>
    
                  <div className="col-lg-2 mt-5"></div>

              </div>

              {/* row 4 */}

              <div className="row mt-5">
                
                  <div className="col-lg-2"></div>
                  <div className="col-lg-8" style={{ border: '1px solid #003C82', padding: '15px', borderRadius: '25px' }} data-aos="fade-up" data-aos-delay="300">
                      
                      <div style={{ display: 'flex' }}>
                          
                          <img src="/images/safe4.webp" alt="safe" style={{width:'237px',height:'213px',borderRadius:'14px'}}/>
                          
                          <div style={{width:'70%'}}>
                          <p style={{ fontSize: '30px', fontWeight: '600', marginTop:'20px',textAlign:'start',padding:'0 30px',color:'#003C82' }}>4. Environmental Compliance</p>
                          <p style={{fontSize:'20px',fontWeight:'600',marginTop:'40px',textAlign:'start',padding:'0 30px'}}>Strict adherence to environmental regulations with sustainable practices and eco-friendly handling procedures.</p>
                          </div>
                          
                          

                      </div>


                  </div>
    
                  <div className="col-lg-2"></div>

              </div>


          </div>

          <div className="container-fluid" style={{ marginBottom: '100px', backgroundColor: '#F9FEFF', paddingBottom: '50px' }}>
              
              <h2 style={{ fontSize: '40px', fontWeight: '700', marginTop: '150px', marginBottom: '50px' }}>Strategic Distribution Network</h2>
              <p style={{marginBottom:'50px',fontSize:'18px',fontWeight:'400'}}>Efficient logistics and distribution systems ensuring timely delivery <br /> of petroleum products across regional and global markets.</p>


              <div className="row">
                  <div className="col-3"></div>
                  <div className="col-lg-6" style={{border:'1px solid #003C82',borderRadius:'20px',height:'433px'}}>
                      


                  </div>
                  <div className="col-3"></div>
             </div>
          </div>

          <Footer></Footer>


    </div>
  )
}
