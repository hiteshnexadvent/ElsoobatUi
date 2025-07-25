import React from "react";
import Header from "../components/Header";
import Team from "./Team";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ChooseUsSlider from "./ChooseUsSlider";

export default function About() {

  useEffect(() => {
  window.scrollTo(0, 0);
  }, []);
  

  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true,     
  });
}, []);


  return (
    <div>
      <Header></Header>

      <div className="container-fluid main-about mt-5 px-3 px-lg-5">
  <h2
    data-aos="fade-up"
    className="fw-bold mb-5 text-center"
    style={{ fontSize: "40px", color: "#003C82" }}
  >
    About Elsoobat
  </h2>

  <div className="row g-4">
    <div className="col-lg-6 col-12" data-aos="fade-right">
      <div className="about-card">
        <img src="/images/abouttop1.webp" alt="Quality" className="img-fluid rounded" />
      </div>
    </div>
    <div className="col-lg-6 col-12" data-aos="fade-left">
      <div className="about-card">
        <img src="/images/abouttop2.webp" alt="Professionalism" className="img-fluid rounded" />
      </div>
    </div>
  </div>

  <div className="row mt-5">
    <div className="col-12" data-aos="fade-up">
      <div className="main-about-img text-start px-3 px-md-5">
        <p className="fs-5" style={{textAlign:'justify'}}>
          Established on April 24, 2019, under the visionary leadership of Chairman Hisham Hassan Mohammed Ahmed Ali, Elsoobat proudly operates as a strategic arm of the renowned El Soobat Group—a name trusted for its commitment to excellence, innovation, and integrity.
        </p>
        <p className="fs-5" style={{textAlign:'justify'}}>
          With a foundation built on sustainable growth and ethical practices, Elsoobat has rapidly evolved into a dynamic force in both the petroleum and agricultural sectors.
        </p>
        <p className="fs-5" style={{textAlign:'justify'}}>
          Our core expertise lies in managing the entire energy and agribusiness value chains—from sourcing and logistics to compliance and distribution.
        </p>
        <p className="fs-5" style={{textAlign:'justify'}}>
          At Elsoobat, we build long-term partnerships rooted in trust, performance, and a shared vision for a more sustainable future.
        </p>
      </div>
    </div>
  </div>
</div>


      <h2
        className="achieve-heading"
          style={{
            fontSize: "40px",
            fontWeight: "700",
            marginBottom: "50px",
            marginTop: "100px",
            color:'#003C82',
          }}
        >
          Our Achievements
        </h2>
      
      <div className="container-fluid" style={{backgroundColor:'#F9FEFF'}}>

        <div className="row">
          <div className="achievements-section">
            <div className="achievement-cards">
              <div className="achievement-card" style={{textAlign:'center'}}>
                <img src="/images/award.png" alt="Experience" />
                <h3>6+</h3>
                <p>Years of Expertise</p>
              </div>
              <div className="achievement-card" style={{textAlign:'center'}}>
                <img src="/images/medal.png" alt="Clients" />
                <h3>500+</h3>
                <p>Trusted Clients</p>
              </div>
              <div className="achievement-card" style={{textAlign:'center'}}>
                <img src="/images/nw.png" alt="Projects" />
                <h3>100+</h3>
                <p>Successful Projects</p>
              </div>
              <div className="achievement-card" style={{textAlign:'center'}}>
                <img src="/images/user.png" alt="Team" />
                <h3>50+</h3>
                <p>Professionals</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      <div className="container vision-top">

        <h2
          style={{
            fontSize: "40px",
            fontWeight: "700",
            marginBottom: "50px",
            marginTop: "170px",
            color:'#003C82',
          }}
        >
          Our Vision
        </h2>

        {/* <div style={{ display: "flex", justifyContent: "space-evenly" }}> */}
        <div className="row">
          <div className="col-lg-1"></div>
          <div
  className="col-lg-4 col-12 vision1"
  style={{
    width: "406px",
    height: "419px",
    border: "1px solid #003C82",
    borderRadius: "20px",
    padding: "25px",
    marginRight:'10px',
    position: "relative", // REQUIRED for absolute overlay
    overflow: "hidden",    // REQUIRED to clip the glass effect
  }}
  data-aos="fade-right"
>
  <img
    src="/images/vision.webp"
    alt="vision"
    style={{ width: "100%", height: "100%", borderRadius: "20px" }}
  />
  <div className="glass-overlay"></div> 
</div>

          <div
            className="col-lg-6 col-12  vision1"
            style={{
              width: "604px",
              height: "auto",
              border: "1px solid #003C82",
              borderRadius: "20px",
              padding: "60px 30px",
              // marginLeft:'10px'
            }}
            data-aos="fade-left"
          >
            <p style={{ fontSize: "20px", textAlign: "start" }}>
              Our vision is to be a globally trusted leader in the trading of petroleum derivatives and agricultural commodities, known for delivering high-quality products with a commitment to excellence, innovation, and sustainability. We strive to meet the evolving needs of international and local markets while upholding the highest standards of safety, environmental responsibility, and ethical business practices—building long-term value through strong relationships with our clients, partners, and stakeholders.
            </p>
          </div>
          <div className="col-lg-1"></div>
          </div>
        {/* </div> */}

        {/*----------------------  mission */}

        <h2
          style={{
            fontSize: "40px",
            fontWeight: "700",
            marginBottom: "50px",
            marginTop: "180px",
            color:'#003C82',
          }} className="mission-top"
        >
          Our Mission
        </h2>

        <div style={{ display: "flex", justifyContent: "space-evenly" }} className="mission">
          <div
            className="vision1"
            style={{
              width: "604px",
              height: "auto",
              border: "1px solid #003C82",
              borderRadius: "20px",
              padding: "70px 30px",
              
            }}
          >
            <p style={{ fontSize: "20px", textAlign: "start" }}>
              At Elsoobat, our mission is to deliver tailored, reliable solutions in the petroleum and agricultural sectors by deeply understanding our clients’ unique needs. We are committed to a customer-first approach that aligns with market dynamics and global best practices, while upholding the highest standards of quality, safety, and environmental responsibility in every aspect of our operations.
            </p>
          </div>

          <div
            className="vision1"
            style={{
              width: "406px",
              height: "419px",
              border: "1px solid #003C82",
              borderRadius: "20px",
              padding: "25px",
              position: "relative", // REQUIRED for absolute overlay
              overflow: "hidden",    // REQUIRED to clip the glass effect
            }}
          >
            <img
              src="/images/mission.webp"
              alt="mission"
              style={{ width: "100%", height: "100%", borderRadius: "20px" }}
            />
            <div className="glass-overlay"></div>
          </div>
        </div>

        </div>
        
        {/* -------------------- our values */}

      <h2
  style={{
    fontSize: "40px",
    fontWeight: "700",
    marginBottom: "50px",
    marginTop: "180px",
    color: "#003C82",
  }}
  className="value-heading"
>
  Our Values
</h2>

<div className="container-fluid" style={{ backgroundColor: "#F9FEFF", paddingBottom: "50px", paddingTop: "50px" }}>
  
  {/* Block 1: Text then image */}
  <div className="values">
    <div className="vision1 text-box" data-aos="fade-right">
      <p style={{ fontSize: "20px", paddingTop: "50px" }}>
        At Elsoobat, quality is non-negotiable. We ensure that every product we trade — whether petroleum derivatives or agricultural commodities — meets the highest international standards. From sourcing to delivery, we maintain strict quality controls to guarantee safety, consistency, and customer satisfaction at every touchpoint.
      </p>
    </div>
    <div className="vision1 image-box" data-aos="fade-left">
      <div className="aboutvalue-card">
        <img src="/images/whitebowl.webp" alt="Quality" />
        <div className="aboutvalue-text">
          <h3>Quality</h3>
          <p>Delivering high-quality products and exceptional services.</p>
        </div>
      </div>
    </div>
  </div>

  {/* Block 2: Image then text (reverse on desktop only) */}
  <div className="values reverse">
    <div className="vision1 text-box" data-aos="fade-right">
      <p style={{ fontSize: "20px", paddingTop: "60px" }}>
        We conduct our business with integrity, respect, and a deep commitment to excellence. Our team of experienced professionals brings industry expertise, ethical discipline, and accountability to every project, ensuring seamless execution and dependable outcomes for our clients and partners.

      </p>
    </div>
    <div className="vision1 image-box" data-aos="fade-left">
      <div className="aboutvalue-card">
        <img src="/images/abstract.webp" alt="Professionalism" />
        <div className="aboutvalue-text">
          <h3>Professionalism</h3>
          <p>Upholding high ethics and performance standards.</p>
        </div>
      </div>
    </div>
  </div>

  {/* Block 3: Text then image */}
  <div className="values">
    <div className="vision1 text-box" data-aos="fade-right">
      <p style={{ fontSize: "20px", paddingTop: "60px" }}>
        In a constantly evolving global market, we stay ahead by embracing change. We continuously seek smarter, more efficient ways to operate — from adopting new technologies to improving our supply chain processes — ensuring our clients benefit from modern, forward-looking trade solutions.
      </p>
    </div>
    <div className="vision1 image-box" data-aos="fade-left">
      <div className="aboutvalue-card">
        <img src="/images/business.webp" alt="Innovation" />
        <div className="aboutvalue-text">
          <h3>Innovation</h3>
          <p>Continuously innovating in operations and products.</p>
        </div>
      </div>
    </div>
  </div>

  {/* Block 4: Image then text (reverse on desktop only) */}
  <div className="values reverse">
    <div className="vision1 text-box" data-aos="fade-right">
      <p style={{ fontSize: "20px", paddingTop: "60px" }}>
        We believe in open communication and honest business practices. Whether it’s pricing, timelines, or logistics, we ensure our partners have full visibility and confidence throughout the trade cycle — building trust that stands the test of time.

      </p>
    </div>
    <div className="vision1 image-box" data-aos="fade-left">
      <div className="aboutvalue-card">
        <img src="/images/handshake.webp" alt="Transparency" />
        <div className="aboutvalue-text">
          <h3>Transparency</h3>
          <p>Maintaining integrity in all business relationships.</p>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* choose us */}
          
          <ChooseUsSlider/>

      <div className="container-fluid presence gx-0" style={{backgroundColor:'#F9FEFF',paddingBottom:'50px'}}>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: "700",
            marginTop: "150px",
            marginBottom: "50px",
          }}
        >
          Our Presence
        </h2>

        <div className="row gx-0">
          <div className="col-lg-2 col-0"></div>
          <div className="col-lg-8 col-md-12 col-12">
            <div className="presence-card" data-aos="fade-up">
              <img src="/images/presence.webp" alt="Quality" />
            </div>
          </div>
          <div className="col-lg-2 col-0"></div>
        </div>

        <div className="row gx-0" style={{marginTop:'80px'}}>
          
          <div className="col-12">
            <img src="/images/elsoobat-banner.jpg" alt="" style={{width:'100%',height:'95vh'}} className="presence-banner"/>
          </div>
          

        </div>
      </div>

      <div style={{marginBottom:'150px'}}>
        <Team></Team>
      </div>

      <Footer></Footer>

    </div>
  );
}
