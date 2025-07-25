import React from 'react';
import './Slide.css'; 

export default function LocationMap() {
  return (
    <div className="container gx-0">
      <div className="row gx-0 map">
        <div className="col-12">
          
      <h2 className="location-title" style={{ textAlign: 'center', color: '#003C82', fontSize: '36px', marginBottom: '30px' }}>
        Locate Us Here
      </h2>
      
      <div className="map-wrapper">
        <div className="map-responsive">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.2819703895907!2d55.133219174436704!3d25.05843043730916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f134ae10f0c45%3A0x5a311cb63c3abf1e!2sJewellery%20%26%20Gemplex%20Building!5e0!3m2!1sen!2sin!4v1753360624806!5m2!1sen!2sin" width="95%" height="450" style={{ border: "0",margin:'auto' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
        
      </div>
    </div>
  );
}
