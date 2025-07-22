import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

export default function BlogRead() {

  useEffect(() => {
  window.scrollTo(0, 0);
  }, []);
  

  const location = useLocation();

  const { para_one, para_two, image } = location.state || {};

  return (
    <div>

      <Header></Header>
      
      
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src={`${process.env.REACT_APP_BACKEND_API_URL}${image}`}
              alt=""
              style={{ height:'370px',width:'100%',borderRadius:'20px' }}/>
          </div>
          <div className="col-lg-6">
            <p style={{padding:'30px',textAlign:'start'}}>{para_one}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p style={{textAlign:'start',marginTop:'50px'}}>{para_two}</p>
          </div>
        </div>
      </div>


      <div style={{marginTop:'150px'}}>
        <Footer></Footer>
      </div>

    </div>
  )
}
