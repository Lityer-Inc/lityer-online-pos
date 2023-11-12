import React from "react";
import category from "../../assets/images/category.jpg";
import posprod from "../../assets/images/pos-products.jpg";

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
              <div className="col-lg-2 col-sm-2">
                <div className="cat-box">
                  <img src={category} alt="" id="poscat" />
                  <p>Fruit</p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-2">
                <div className="cat-box">
                  <img src={category} alt="" id="poscat" />
                  <p>Juice</p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-2">
                <div className="cat-box">
                  <img src={category} alt="" id="poscat" />
                  <p>vegetables</p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-2">
                <div className="cat-box">
                  <img src={category} alt="" id="poscat" />
                  <p>pepper</p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-2">
                <div className="cat-box">
                  <img src={category} alt="" id="poscat" />
                  <p>Milks</p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-2">
                <div className="cat-box">
                  <img src={category} alt="" id="poscat" />
                  <p>sweats</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row gy-4">
            <div className="col-xl-8">
              <div className="row">
                <div className="col-lg-4 col-sm-4">
                  <div className="prod-box">
                    <div className="hover-overlay">
                      <p>ADD</p>
                    </div>
                    <img src={posprod} alt="" id="posprod" />
                    <br />
                    <span>Fruits</span>
                    <h3>Water Melon</h3>
                    <p>$100.00</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <div className="prod-box">
                    <div className="hover-overlay">
                      <p>ADD</p>
                    </div>
                    <img src={posprod} alt="" id="posprod" />
                    <br></br>
                    <span>Fruits</span>
                    <h3>Water Melon</h3>
                    <p>$100.00</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <div className="prod-box">
                    <div className="hover-overlay">
                      <p>ADD</p>
                    </div>
                    <img src={posprod} alt="" id="posprod" />
                    <br></br>
                    <span>Fruits</span>
                    <h3>Water Melon</h3>
                    <p>$100.00</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <div className="prod-box">
                    <div className="hover-overlay">
                      <p>ADD</p>
                    </div>
                    <img src={posprod} alt="" id="posprod" />
                    <br></br>
                    <span>Fruits</span>
                    <h3>Water Melon</h3>
                    <p>$100.00</p>
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
