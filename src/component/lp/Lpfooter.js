import React from "react";

function Lpfooter() {
  return (
    <div className="lpfooter">
      <footer id="lpfooter">
        <div className="lpfooter-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 lpfooter-contact">
                <h3>
                  Lityer<span>.</span>
                </h3>
                <p>
                  <strong>Email:</strong> lityer@mail.com
                  <br />
                </p>
              </div>

              <div className="col-lg-4 col-md-6 lpfooter-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="/">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/">community</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 lpfooter-links">
                <h4>Our Social Networks</h4>
                <div className="social-links mt-3">
                  <a href="/" target="_blank" className="twitter">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  {/* <a href="#" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="#" className="google-plus">
                  <i className="bx bxl-skype"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bx bxl-linkedin"></i>
                </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container py-4"
          style={{ borderTop: "1px solid deeppink" }}
        >
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Lityer</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Lpfooter;