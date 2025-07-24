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

      <div className="container main-about" style={{ marginTop: "150px" }}>
        <h2 data-aos="fade-up" style={{ fontSize: "40px", fontWeight: "700", marginBottom: "70px",color:'#003C82' }}>
          About Elsoobat </h2>

        <div className="row">
          <div className="col-lg-6 col-12" data-aos="fade-right">
            <div className="about-card">
              <img src="/images/abouttop1.webp" alt="Quality" className="img-fluid"/>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="about-card" data-aos="fade-left">
              <img src="/images/abouttop2.webp" alt="Professionalism" className="img-fluid"/>
            </div>
          </div>

          <div style={{ textAlign: "start", padding: "70px" }} data-aos="fade-up" className="main-about-img">
            <p style={{ fontSize: "20px" }}>
              Established on April 24, 2019, under the visionary leadership of Chairman Hisham Hassan Mohammed Ahmed Ali, Elsoobat proudly operates as a strategic arm of the renowned El Soobat Group—a name trusted for its commitment to excellence, innovation, and integrity.
            </p>

            <p style={{ fontSize: "20px" }}>
              With a foundation built on sustainable growth and ethical practices, Elsoobat has rapidly evolved into a dynamic force in both the petroleum and agricultural sectors. Backed by a highly experienced team, we deliver premium-grade products and tailored solutions that meet the ever-changing demands of global markets.

            </p>

            <p style={{ fontSize: "20px" }}>
              Our core expertise lies in managing the entire energy and agribusiness value chains—from sourcing and logistics to compliance and distribution—ensuring every transaction is aligned with international standards, environmental responsibility, and client-specific goals.
            </p>
            <p style={{ fontSize: "20px" }}>
              At Elsoobat, we don’t just trade. We build long-term partnerships rooted in trust, performance, and a shared vision for a more sustainable future.
            </p>
          </div>
        </div>

      </div>

      <h2
        className="achieve-heading"
          style={{
            fontSize: "40px",
            fontWeight: "700",
            marginBottom: "50px",
            marginTop: "130px",
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
        
        {/* our values */}

        <h2
          style={{
            fontSize: "40px",
            fontWeight: "700",
            marginBottom: "50px",
            marginTop: "180px",
            color:'#003C82'
          }} className="value-heading"
        >
          Our Values
      </h2>
      
      <div className="container-fluid" style={{backgroundColor:'#F9FEFF',paddingBottom:'50px',paddingTop:'50px'}}>

        {/* box1 */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "40px",
          }} className="values"
        >
          <div
            className="vision1"
            style={{
              width: "604px",
              height: "auto",
              border: "1px solid #003C82",
              borderRadius: "20px",
              padding: "70px 30px",
            }}
            data-aos="fade-right"
          >
            <p style={{ fontSize: "20px", textAlign: "start",paddingTop:'50px' }}>
              At Elsoobat, quality is non-negotiable. We ensure that every product we trade — whether petroleum derivatives or agricultural commodities — meets the highest international standards. From sourcing to delivery, we maintain strict quality controls to guarantee safety, consistency, and customer satisfaction at every touchpoint.

            </p>
          </div>

          <div
            className="vision1"
            style={{
              width: "406px",
              height: "419px",
              border: "1px solid #003C82",
              borderRadius: "20px",
            }}
            data-aos="fade-left"
          >
            <div class="aboutvalue-card">
              <img src="/images/whitebowl.webp" alt="Quality" />
              <div className="glass-overlay"></div>
              <div className="aboutvalue-text">
                <h3>Quality</h3>
                <p>
                  Delivering high-quality products and exceptional services.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* box2 */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "40px",
          }}className="values"
        >
          <div
            className="vision1"
            style={{
              width: "406px",
              height: "419px",
              border: "1px solid #003C82",
              borderRadius: "20px",
            }}
            data-aos="fade-right"
          >
            <div className="aboutvalue-card">
              <img src="/images/abstract.webp" alt="Quality" />
              <div className="glass-overlay"></div>
              <div className="aboutvalue-text">
                <h3>Professionalism</h3>
                <p>
                  Upholding high ethics and performance <br /> standards.
                </p>
              </div>
            </div>
          </div>

          <div
            className="vision1"
            style={{
              width: "604px",
              height: "419px",
              border: "1px solid #003C82",
              borderRadius: "20px",
              padding: "70px 30px",
            }}
            
            data-aos="fade-left"
          >
            <p style={{ fontSize: "20px", textAlign: "start",paddingTop:'60px' }}>
              We conduct our business with integrity, respect, and a deep commitment to excellence. Our team of experienced professionals brings industry expertise, ethical discipline, and accountability to every project, ensuring seamless execution and dependable outcomes for our clients and partners.

            </p>
          </div>
        </div>

        {/* box3 */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "40px",
          }} className="values"
        >
          <div
            className="vision1"
            style={{
              width: "604px",
              height: "auto",
              border: "1px solid #003C82",
              borderRadius: "20px",
              padding: "70px 30px",
            }}
            data-aos="fade-right"
          >
            <p style={{ fontSize: "20px", textAlign: "start",paddingTop:'60px' }}>
              In a constantly evolving global market, we stay ahead by embracing change. We continuously seek smarter, more efficient ways to operate — from adopting new technologies to improving our supply chain processes — ensuring our clients benefit from modern, forward-looking trade solutions.

            </p>
          </div>

          <div
            className="vision1"
            style={{
              width: "406px",
              height: "419px",
              border: "1px solid #003C82",
              borderRadius: "20px",
            }}
            data-aos="fade-left"
          >
            <div className="aboutvalue-card">
              <img src="/images/business.webp" alt="Quality" />
              <div className="glass-overlay"></div>
              <div className="aboutvalue-text">
                <h3>Innovation</h3>
                <p>Continuously innovating in operations and products.</p>
              </div>
            </div>
          </div>
        </div>

        {/* box4 */}

        <div style={{ display: "flex", justifyContent: "space-evenly" }} className="values">
          <div
            className="vision1"
            style={{
              width: "406px",
              height: "419px",
              border: "1px solid #003C82",
              borderRadius: "20px",
            }}
            data-aos="fade-right"
          >
            <div className="aboutvalue-card">
              <img src="/images/handshake.webp" alt="Quality" />
              <div className="glass-overlay"></div>
              <div className="aboutvalue-text">
                <h3>Transparency</h3>
                <p>Maintaining integrity in all business relationships.</p>
              </div>
            </div>
          </div>

          <div
            className="vision1"
            style={{
              width: "604px",
              height: "auto",
              border: "1px solid #003C82",
              borderRadius: "20px",
              padding: "70px 30px",
            }}
            data-aos="fade-left"
          >
            <p style={{ fontSize: "20px", textAlign: "start",paddingTop:'60px' }}>
              We believe in open communication and honest business practices. Whether it’s pricing, timelines, or logistics, we ensure our partners have full visibility and confidence throughout the trade cycle — building trust that stands the test of time.

            </p>
          </div>
        </div>
      </div>

      {/* choose us */}

      <div className="container-fluid">
        <div className="row" style={{ marginTop: "150px" }}>
          
          <ChooseUsSlider></ChooseUsSlider>

        </div>
      </div>

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
          {/* <div className="col-lg-2"></div>
          <div
            className="col-lg-8"
            style={{
              border: "1px solid #003C82",
              borderRadius: "20px",
              height: "auto",
              paddingBottom: "30px",
            }}
          >
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "700",
                marginTop: "80px",
                marginBottom: "20px",
              }}
            >
              Global Operations
            </h2>

            <p>
              Our strategic location in Dubai enables us to serve clients across
              the Middle east and beyond.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginTop: "80px",
                marginBottom: "40px",
              }}
            >
              <button
                style={{
                  height: "65px",
                  width: "200px",
                  borderRadius: "40px",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                }}
              >
                <img
                  src="/images/flag.png"
                  alt=""
                  style={{
                    width: "47px",
                    height: "33px",
                    paddingRight: "10px",
                  }}
                />
                Dubai,UAE
              </button>
              <button
                style={{
                  height: "65px",
                  width: "307px",
                  borderRadius: "40px",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                }}
              >
                <img
                  src="/images/globe.png"
                  alt=""
                  style={{ width: "66px", height: "37px" }}
                />
                Middle Eastern Region
              </button>
            </div>

            <button
              style={{
                height: "65px",
                width: "332px",
                borderRadius: "40px",
                backgroundColor: "black",
                color: "white",
                border: "none",
              }}
            >
              <img src="/images/ship.png" alt="" style={{ width: "100px" }} />
              Global Supply Chain
            </button>

            <p style={{ marginTop: "120px", fontSize: "20px" }}>
              Headquarters: Unit No: 4100 DMCC, Business Centre, Level No. 1,{" "}
              <br />
              Jewellery & Gemplex 3, Dubai, United Arab Emirates
            </p>
          </div>
          <div className="col-lg-2"></div> */}


          
          <div className="col-12">
            <img src="/images/elsoobat-banner.jpg" alt="" style={{width:'100%'}}/>
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
