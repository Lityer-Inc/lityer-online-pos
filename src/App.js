import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Addproduct from "./component/products/Addproduct";
import Footer from "./component/Footer";
import Headnav from "./component/Headnav";
import Sidenav from "./component/Sidenav";
import Home from "./component/Home";
import Register from "./component/Register";
import Login from "./component/Login";
// Css files
import "./assets/vendor/simple-datatables/style.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/quill/quill.bubble.css";
import "./assets/vendor/quill/quill.snow.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/dashboard.css";

function App() {
  const loggedIn = true;

  return (
    <div className="">
      {loggedIn && (
        <Router>
          <Headnav />
          <Sidenav />
          <main id="main" className="main">
            <section className="section dashboard">
              <div className="row">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/addproducts" element={<Addproduct />} />
                </Routes>
              </div>
            </section>
          </main>
          <Footer />
        </Router>
      )}

      {!loggedIn && (
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
