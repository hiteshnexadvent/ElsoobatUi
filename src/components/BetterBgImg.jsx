import React, { useState } from "react";
import "./Style1.css";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Captcha from "../slides/Captcha";
import { toast } from 'react-toastify';

export default function BetterBgImg() {
  const [captchaValue, setCaptchaValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
    message: "",
  });

  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, mobile: phone });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      toast.warning("Please complete the CAPTCHA");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_API_URL}/admin/user-query`,
        {
          ...formData,
          captcha: captchaValue,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.data.message) {
        toast.success(response.data.message);
      }

      setFormData({
        name: "",
        email: "",
        mobile: "",
        country: "",
        city: "",
        message: "",
      });
      setCaptchaValue("");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="betterimg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 better-para">
            <div style={{ paddingTop: "100px" }}>
              <h2
                style={{
                  fontSize: "48px",
                  color: "white",
                  fontWeight: "700",
                  marginTop: "60px",
                  marginLeft: "60px",
                  marginRight: "25px",
                  textAlign: "start",
                }}
              >
                Partner with Us for Reliable Trade Solutions
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "white",
                  paddingTop: "20px",
                  textAlign: "start",
                  marginLeft: "70px",
                }}
              >
                From energy to agriculture, we deliver tailored sourcing and
                supply plans built around your business needs. Whether it’s
                high-grade fuels, lubricants, or premium grains and oils our
                team ensures consistency, quality, and timely delivery.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <form
              onSubmit={handleSubmit}
              style={{
                border: "1px solid #003C82",
                backgroundColor: "white",
                width: "auto",
                height: "auto",
                borderRadius: "20px",
                margin: "30px auto",
                paddingBottom: "30px",
              }}
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: "80%",
                    height: "45px",
                    marginTop: "20px",
                    paddingLeft: "10px",
                    border: "1px solid #cad2db",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: "80%",
                    height: "45px",
                    marginTop: "10px",
                    paddingLeft: "10px",
                    border: "1px solid #cad2db",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <div
                className="phone-input"
                style={{
                  margin: "20px auto 0",
                  width: "81%",
                  height: "45px",
                  marginTop: "10px",
                  paddingLeft: "10px",
                }}
              >
                <PhoneInput
                  country={"ae"}
                  value={formData.mobile}
                  onChange={handlePhoneChange}
                  enableSearch={true}
                  inputProps={{
                    name: "mobile",

                    required: true,

                    placeholder: "Enter Your Phone Number",
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  style={{
                    width: "80%",
                    height: "45px",
                    marginTop: "10px",
                    paddingLeft: "10px",
                    border: "1px solid #cad2db",
                    borderRadius: "8px",
                  }}
                  placeholder="Enter Your Country"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter Your City/State"
                  value={formData.city}
                  onChange={handleChange}
                  style={{
                    width: "80%",
                    height: "45px",
                    marginTop: "10px",
                    paddingLeft: "10px",
                    border: "1px solid #cad2db",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Please describe your query or requirenments..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  cols="50"
                  style={{
                    width: "80%",
                    marginTop: "10px",
                    paddingLeft: "10px",
                    border: "1px solid #cad2db",
                    paddingTop: "10px",
                    borderRadius: "8px",
                  }}
                ></textarea>
              </div>

              {/* CAPTCHA */}

              <div className="captcha" style={{ margin: "auto" }}>
                <Captcha onChange={handleCaptchaChange} />
              </div>

              <button
                style={{
                  backgroundColor: "#003C82",
                  width: "80%",
                  height: "50px",
                  borderRadius: "8px",
                  color: "white",
                  border: "none",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "20px",
                }}
              >
                SUBMIT REQUEST
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
