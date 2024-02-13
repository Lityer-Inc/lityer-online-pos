import React from "react";
import img1 from "../../assets/lpassets/img/about1.png";
import img2 from "../../assets/lpassets/img/about2.png";

function Imagesection() {
  return (
    <section id="about" className="about section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src={img1}
              className="img-fluid"
              alt=""
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center">
            <img
              src={img2}
              className="img-fluid"
              alt=""
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Imagesection;
