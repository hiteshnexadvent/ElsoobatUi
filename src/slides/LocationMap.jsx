import React from 'react';
import './Slide.css'; 

export default function LocationMap() {
  return (
    <div className="location-section" style={{backgroundColor:'#F9FEFF'}}>
      <h2 className="location-title">Locate Us Here</h2>
      <div className="map-wrapper">
        <img
          src="/images/locate.png"
          alt="UAE Map"
          className="uae-map"
        />
        <div className="pin">
          📍
          <div className="address-bubble">
            Unit 4100,<br />
            Gemplex 3,<br />
            DMCC,<br />
            Dubai, UAE
          </div>
        </div>
      </div>
    </div>
  );
}
