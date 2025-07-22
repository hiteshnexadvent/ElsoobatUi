import React from "react";
import Header from "../components/Header";
import Team from "./Team";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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

      <div className="container" style={{ marginTop: "150px" }}>
        <h2
  data-aos="fade-up"
  style={{ fontSize: "40px", fontWeight: "700", marginBottom: "70px" }}
>
  About Elsoobat
</h2>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-card">
              <img src="/images/abouttop1.webp" alt="Quality" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-card" data-aos="fade-left">
              <img src="/images/abouttop2.webp" alt="Professionalism" />
            </div>
          </div>

          <div style={{ textAlign: "start", padding: "70px" }} data-aos="fade-up">
            <p style={{ fontSize: "20px" }}>
              Established on April 24, 2019, under the visionary leadership of
              Chairman Hisham Hassan Mohammed Ahmed Ali, Elsoobat is a proud
              member of the prestigious El Soobat Group—a name synonymous with
              excellence, trust, and innovation.
            </p>

            <p style={{ fontSize: "20px" }}>
              With a strong foundation rooted in integrity and sustainable
              growth, Elsoobat has emerged as a dynamic player in both the
              petroleum and agriculture sectors. Our commitment to delivering
              high-quality products and services is driven by a team of seasoned
              professionals who bring decades of combined experience and
              expertise to every project.
            </p>

            <p style={{ fontSize: "20px" }}>
              We specialize in providing innovative solutions across the energy
              and agribusiness value chains, constantly aligning with evolving
              market demands and international standards. Our operations are
              guided by a deep respect for environmental sustainability, health
              and safety regulations, and community development.
            </p>
          </div>
        </div>

      </div>

      <h2
          style={{
            fontSize: "40px",
            fontWeight: "700",
            marginBottom: "50px",
            marginTop: "130px",
          }}
        >
          Our Achievements
        </h2>
      
      <div className="container-fluid" style={{backgroundColor:'#F9FEFF'}}>

        

        <div className="row">
          <div className="achievements-section">
            <div className="achievement-cards">
              <div className="achievement-card">
                <img src="/images/award.png" alt="Experience" />
                <h3>6+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="achievement-card">
                <img src="/images/medal.png" alt="Clients" />
                <h3>500+</h3>
                <p>Satisfied Clients</p>
              </div>
              <div className="achievement-card">
                <img src="/images/nw.png" alt="Projects" />
                <h3>100+</h3>
                <p>Completed Projects</p>
              </div>
              <div className="achievement-card">
                <img src="/images/user.png" alt="Team" />
                <h3>50+</h3>
                <p>Team Members</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      <div className="container">



        <h2
          style={{
            fontSize: "40px",
            fontWeight: "700",
            marginBottom: "50px",
            marginTop: "170px",
          }}
        >
          Our Vision
        </h2>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div
            className="vision1"
            style={{
              width: "406px",
              height: "419px",
              border: "1px solid #003C82",
              borderRadius: "20px",
              padding: "25px",
            }}
            data-aos="fade-right"
          >
            <img
              src="/images/vision.webp"
              alt="vision"
              style={{ width: "100%", height: "100%", borderRadius: "20px" }}
            />
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
            <p style={{ fontSize: "20px", textAlign: "start" }}>
              We aim to be recognized as leaders in the trading industry of
              petroleum derivatives and agricultural crops, driven by a
              commitment to excellence, innovation, and customer satisfaction.
              Our primary goal is to deliver high-quality products that meet the
              evolving needs of global and local markets, while maintaining the
              highest standards of safety and environmental responsibility.By
              building strong relationships with clients, partners, and
              stakeholders, we strive to create lasting value and trust.
            </p>
          </div>
        </div>

        {/* mission */}

        <h2
          style={{
            fontSize: "40px",
            fontWeight: "700",
            marginBottom: "50px",
            marginTop: "180px",
          }}
        >
          Our Mission
        </h2>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div
            className="vision1"
            style={{
              width: "604px",
              height: "419px",
              border: "1px solid #003C82",
              borderRadius: "20px",
              padding: "70px 30px",
            }}
          >
            <p style={{ fontSize: "20px", textAlign: "start" }}>
              At Elsoobat, we strive to understand and fulfill the unique needs
              of our customers by offering tailored solutions and reliable
              products in the fields of petroleum and agricultural crops. Our
              customer-centric approach ensures that every service we provide is
              aligned with client expectations, market demands, and global best
              practices. We are committed to upholding the highest standards of
              quality, safety, and environmental compliance across all areas of
              our operations.
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
            }}
          >
            <img
              src="/images/mission.webp"
              alt="mission"
              style={{ width: "100%", height: "100%", borderRadius: "20px" }}
            />
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
          }}
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
          }}
        >
          <div
            className="vision1"
            style={{
              width: "604px",
              height: "419px",
              border: "1px solid #003C82",
              borderRadius: "20px",
              padding: "70px 30px",
            }}
            data-aos="fade-right"
          >
            <p style={{ fontSize: "20px", textAlign: "start" }}>
              At Elsoobat, we strive to understand and fulfill the unique needs
              of our customers by offering tailored solutions and reliable
              products in the fields of petroleum and agricultural crops. Our
              customer-centric approach ensures that every service we provide is
              aligned with client expectations, market demands, and global best
              practices. We are committed to upholding the highest standards of
              quality, safety, and environmental compliance across all areas of
              our operations.
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
          }}
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
            <p style={{ fontSize: "20px", textAlign: "start" }}>
              At Elsoobat, professionalism is the cornerstone of everything we
              do. We are committed to delivering services with the highest
              levels of integrity, reliability, and efficiency. Our team of
              skilled professionals brings deep industry knowledge, attention to
              detail, and a proactive approach to every project. From initial
              consultation to final delivery, we ensure transparent
              communication, timely execution, and unwavering dedication to
              quality.
            </p>
          </div>
        </div>

        {/* box3 */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "40px",
          }}
        >
          <div
            className="vision1"
            style={{
              width: "604px",
              height: "419px",
              border: "1px solid #003C82",
              borderRadius: "20px",
              padding: "70px 30px",
            }}
            data-aos="fade-right"
          >
            <p style={{ fontSize: "20px", textAlign: "start" }}>
              At Elsoobat, innovation is at the heart of our growth and success.
              We are continuously exploring new ideas, technologies, and
              strategies to enhance our operations and deliver cutting-edge
              solutions. Whether in the trading of petroleum derivatives or
              agricultural products, we embrace innovation to improve
              efficiency, sustainability, and customer satisfaction. Our
              commitment to research, development, and forward-thinking
              practices enables us to stay ahead in a competitive market.
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
              <div className="aboutvalue-text">
                <h3>Innovation</h3>
                <p>Continuously innovating in operations and products.</p>
              </div>
            </div>
          </div>
        </div>

        {/* box4 */}

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
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
              height: "419px",
              border: "1px solid #003C82",
              borderRadius: "20px",
              padding: "70px 30px",
            }}
            data-aos="fade-left"
          >
            <p style={{ fontSize: "20px", textAlign: "start" }}>
              At Elsoobat, transparency is fundamental to the way we conduct
              business. We believe that open and honest communication builds
              trust, strengthens relationships, and ensures long-term success.
              From internal operations to external partnerships, we maintain
              clear, consistent, and ethical practices that reflect our
              commitment to accountability and fairness. Our clients, partners,
              and stakeholders are always kept informed, with full visibility
              into our processes, decisions, and outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* choose us */}

      <div className="container-fluid">
        <div className="row" style={{ marginTop: "150px" }}>
          <h2 style={{ fontSize: "40px", fontWeight: "700" }}>Why Choose Us</h2>
          <div class="aboutchoose-container">

            <div class="aboutchoose-card" data-aos="zoom-in-up">
              <img src="/images/choose1.webp" alt="Quality" />
              <div class="aboutchoose-text">
                <h3>Experience Team</h3>
              </div>
            </div>
            <div class="aboutchoose-card" data-aos="zoom-in-up">
              <img src="/images/choose2.webp" alt="Professionalism" />
              <div class="aboutchoose-text">
                <h3>Environmental Compliance</h3>
              </div>
            </div>
            <div class="aboutchoose-card" data-aos="zoom-in-up">
              <img src="/images/choose3.webp" alt="Innovation" />
              <div class="aboutchoose-text">
                <h3>Customer-Centric</h3>
              </div>
            </div>
            <div class="aboutchoose-card" data-aos="zoom-in-up">
              <img src="/images/choose4.webp" alt="Transparency" />
              <div class="aboutchoose-text">
                <h3>Comprehensive Services</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{backgroundColor:'#F9FEFF',paddingBottom:'50px'}}>
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

        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="presence-card" data-aos="fade-up">
              <img src="/images/presence.webp" alt="Quality" />
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-2"></div>
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
          <div className="col-lg-2"></div>
        </div>
      </div>

      <div style={{marginBottom:'150px'}}>
        <Team></Team>
      </div>

      <Footer></Footer>

    </div>
  );
}
