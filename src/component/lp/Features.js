import React from "react";

function Features() {
  return (
    <section id="featured-services" className="featured-services">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-pencil"></i>
              </div>
              <h4 className="title">
                <a href="">Create a Distribution Request</a>
              </h4>
              <p className="description">
                Enter details about your product and price. Other parties may
                counter-offer. Once an agreement is reached, your order will be
                moved to the logistics book where it can be fulfilled.
              </p>
            </div>
          </div>

          <div className="col-md-4 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-book"></i>
              </div>
              <h4 className="title">
                <a href="">View Potential Orders</a>
              </h4>
              <p className="description">
                View orders that are in need of transportation. You may accept
                or negotiate the fee you will receive here. Also, View the
                transportation orders that you are responsible for fulfilling.
                See both current and past deliveries.
              </p>
            </div>
          </div>

          <div className="col-md-4 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-tachometer"></i>
              </div>
              <h4 className="title">
                <a href="">View Purchase Orders</a>
              </h4>
              <p className="description">
                See all Purchase Orders from customers from the Grocey
                Application. Also, See what suppliers are trying to push. You
                can counter-offer with your own bid. If you come to an agreement
                the order will be pushed to the logistics book to be filled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
