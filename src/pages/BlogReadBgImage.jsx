import React from "react";
import { useLocation } from "react-router-dom";

export default function BlogReadBgImage() {

    const location = useLocation();

    const { title } = location.state || {};

  return (
    <div>
      <div className="container-fluid gx-0">
        <div className="row gx-0" id="page-img">
          <div className="col-12">
            <h1
              style={{
                marginTop: "200px",
                fontSize: "85px",
                color: "white",
                fontWeight: "700",
                marginLeft: "100px",
                marginRight: "100px",
              }}
            >
              Blogs
            </h1>
            <p
              style={{
                fontSize: "45px",
                fontWeight: "600",
                color: "white",
                padding:'20px 200px'
              }}
            >
             {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
