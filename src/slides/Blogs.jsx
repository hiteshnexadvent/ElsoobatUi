import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from "axios";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Blogs() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
  window.scrollTo(0, 0);
  }, []);
  

  useEffect(() => {
    const fetchapi=async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/admin/manage-blogapi`, {
        withCredentials: true
      })
      setBlogs(response.data);

      } catch (error) {
        console.log(error.message);
      }
    }

    fetchapi();

  }, [])

    if (!blogs) return <div>Loading blogs...</div>;
  

  return (
      <div>
          
      <Header></Header>

    <div className="container py-2 gx-0">
    <h2
    className="text-center mb-4 blogs"
    style={{ fontSize: "42px", fontWeight: "600",marginTop:'150px'}}
    >
    Trending Blogs
    </h2>
  <div className="row gx-0 blogs-row">
    {blogs.map((item, index) => (
      <div key={index} className="col-lg-4 col-md-6 col-12 mb-4 mt-5">
        <div
          className="card h-100 shadow"
          style={{
            border: "1px solid #8d9094",
            padding: "20px",
            width: "300px",
            height:'50vh',
          }}
          id="blog-cards"
        >
          <Link
            to="/blogread"
            style={{ textDecoration: "none", color: "inherit" }}
            state={{ title: item.title, para_one: item.para_one, para_two: item.para_two, image: item.image }}
          >
            <img
              src={`${process.env.REACT_APP_BACKEND_API_URL}${item.image}`}
              className="card-img-top"
              alt={item.title}
              style={{ height: "250px", objectFit: "cover" }}
            />
            <div
              className="card-body"
              style={{ textAlign: "start", lineHeight: "60px" }}
            >
              <h5
                className="card-title"
                style={{ lineHeight: "35px", fontSize: "1.4rem",height:'180px' }}
              >
                {item.title}
              </h5>
              

              <button style={{width:'120px',height:'auto',borderRadius:'5px',border:'none',backgroundColor:'#0629a7',color:'white',fontWeight:'600'}}>Read More</button>

            </div>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>
      

      <div style={{marginTop:'150px'}}>
              <Footer></Footer>
            </div>

    </div>
  )
}
