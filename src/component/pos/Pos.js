import React, { useState } from "react";
import category from "../../assets/images/category.jpg";
import posprod from "../../assets/images/pos-products.jpg";

function Pos() {
  const [products, setProducts] = useState([
    {
      name: "Product 1",
      image: posprod,
      quantity: 2,
      price: 10,
    },
    {
      name: "Product 2",
      image: posprod,
      quantity: 1,
      price: 20,
    },
    // Add more products as needed
  ]);

  // const [products, setProducts] = useState([]);

  // Function to handle quantity change
  const handleQuantityChange = (index, newQuantity) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity = newQuantity;
    setProducts(updatedProducts);
  };

  // Function to handle product removal
  const handleRemoveProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  // Function to calculate total price
  const calculateTotalPrice = () => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  // Function to clear all products
  const handleClearAll = () => {
    setProducts([]);
  };

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
                <form action="" className="php-email-form">
                  <div className="pos-row">
                    <div className="pos-column pos-total">
                      <div>Total Items: {products.length}</div>
                      <button
                        type="button"
                        onClick={handleClearAll}
                        className="clear-all-btn"
                      >
                        Clear All
                      </button>
                    </div>
                  </div>
                  <div className="pos-column">
                    <button type="button" className="scan-barcode-btn">
                      <i className="fas fa-barcode"></i> Scan Barcode
                    </button>
                  </div>

                  <div className="pos-overflow">
                    {products.map((product, index) => (
                      <div key={index} className="pos-product">
                        <div className="pos-product-details">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="pos-product-image"
                          />
                          <div className="pos-product-info">
                            <div>
                              {product.name} x {product.quantity}
                            </div>
                            <div>
                              ${product.price * product.quantity}
                              <button
                                type="button"
                                onClick={() =>
                                  handleQuantityChange(
                                    index,
                                    product.quantity + 1
                                  )
                                }
                              >
                                +
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  handleQuantityChange(
                                    index,
                                    Math.max(1, product.quantity - 1)
                                  )
                                }
                              >
                                -
                              </button>
                              <button
                                type="button"
                                onClick={() => handleRemoveProduct(index)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pos-summary">
                    <div className="pos-summary-item">
                      Total Items: {products.length}
                    </div>
                    <div className="pos-summary-item">
                      Subtotal: ${calculateTotalPrice()}
                    </div>
                    <div className="pos-summary-item">Tax: $5</div>
                    <div className="pos-summary-item">
                      Total: ${calculateTotalPrice() + 5}
                    </div>
                  </div>

                  <div className="pos-row pos-checkout">
                    <button type="submit" className="checkout-btn">
                      Checkout
                    </button>
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
