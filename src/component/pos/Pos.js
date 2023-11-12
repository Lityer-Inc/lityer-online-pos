import React from "react";

function Pos() {
  return (
    <>
      <div classNameName="col-lg-12">
        <div className="pagetitle">
          <h1>POS</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active">Categories</li>
            </ol>
          </nav>
        </div>

        <section className="section contact">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-lg-2">
                <div className="info-box card">
                  <i className="bi bi-geo-alt"></i>
                  <p>Address</p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="info-box card">
                  <i className="bi bi-telephone"></i>
                  <p>Call Us</p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="info-box card">
                  <i className="bi bi-envelope"></i>
                  <p>Email Us</p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="info-box card">
                  <i className="bi bi-envelope"></i>
                  <p>Email Us</p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="info-box card">
                  <i className="bi bi-envelope"></i>
                  <p>Email Us</p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="info-box card">
                  <i className="bi bi-clock"></i>
                  <p>Open Hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row gy-4">
            <div className="col-xl-8">
              <div className="row">
                <div className="col-lg-4">
                  <div className="info-box card">
                    <i className="bi bi-geo-alt"></i>
                    <h3>Address</h3>
                    <p>
                      A108 Adam Street,<br></br>United state, NY 535022
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="info-box card">
                    <i className="bi bi-telephone"></i>
                    <h3>Call Us</h3>
                    <p>
                      +1 5589 55488 55<br></br>+1 6678 254445 41
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="info-box card">
                    <i className="bi bi-envelope"></i>
                    <h3>Email Us</h3>
                    <p>
                      info@example.com<br></br>contact@example.com
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="info-box card">
                    <i className="bi bi-clock"></i>
                    <h3>Open Hours</h3>
                    <p>
                      Monday - Friday<br></br>9:00AM - 05:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="card p-4">
                <form action="" method="post" className="php-email-form">
                  <div className="row gy-4">
                    <button type="submit">Add Customer</button>

                    <div className="col-md-12">
                      <select id="inputState" class="form-select">
                        <option selected>Walk in customer</option>
                        <option>Search customer</option>
                        <option>Tolu john</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <select id="inputState" class="form-select">
                        <option selected>Product</option>
                        <option>Search product</option>
                        <option>Barcode</option>
                      </select>
                    </div>

                    <div className="col-md-12 text-center">
                      <button type="submit">Checkout</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Pos;
