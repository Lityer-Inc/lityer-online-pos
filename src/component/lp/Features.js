import React from "react";

function Features() {
  return (
    <section id="featured-services" className="featured-services">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-coin"></i>
              </div>
              <h4 className="title">
                <a href="">Submit Estimate</a>
              </h4>
              <p className="description">
                Share your insights and predictions on future events with a
                global audience.
              </p>
            </div>
          </div>

          <div className="col-md-4 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-money"></i>
              </div>
              <h4 className="title">
                <a href="">Earn Point</a>
              </h4>
              <p className="description">
                Get points for accurate predictions and climb up the
                leaderboard.
              </p>
            </div>
          </div>

          <div className="col-md-4 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-tachometer"></i>
              </div>
              <h4 className="title">
                <a href="">Build Reputation</a>
              </h4>
              <p className="description">
                Establish yourself as a foresightful predictor and gain
                recognition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
