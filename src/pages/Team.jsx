import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Team() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <div className="team">
        <h2
          style={{ fontSize: '40px', fontWeight: '700' }}
          data-aos="fade-up"
        >
          Meet Our Team
        </h2>

        <div className="values-container">
          <div className="value-card" data-aos="fade-up" data-aos-delay="100">
            <img src="/images/team.avif" alt="Mary Lee" />
            <div className="value-text">
              <h3>Mary Lee</h3>
              <p>Chief Marketing Officer (CMO)</p>
            </div>
          </div>

          <div className="value-card" data-aos="fade-up" data-aos-delay="200">
            <img src="/images/team.avif" alt="Melisa Doe" />
            <div className="value-text">
              <h3>Melisa Doe</h3>
              <p>Chief Marketing Officer (CMO)</p>
            </div>
          </div>

          <div className="value-card" data-aos="fade-up" data-aos-delay="300">
            <img src="/images/team.avif" alt="Ekim Kazama" />
            <div className="value-text">
              <h3>Ekim Kazama</h3>
              <p>Chief Marketing Officer (CMO)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
