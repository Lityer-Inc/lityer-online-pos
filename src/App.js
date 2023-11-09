import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Addproduct from "./component/products/Addproduct";
import Footer from "./component/Footer";
import Headnav from "./component/Headnav";
import Sidenav from "./component/Sidenav";
import Home from "./component/Home";
import Register from "./component/Register";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Products from "./component/products/Products";
import Purchaseorder from "./component/orders/Purchaseorder";
import Collections from "./component/products/Collections";
import Createcollection from "./component/products/Createcollection";
import Nocustomer from "./component/customers/Nocustomer";
import Nodriver from "./component/driver/Nodriver";
import Noorder from "./component/orders/Noorder";
import Noproduct from "./component/products/Noproduct";
import Createsore from "./component/settings/Createsore";
import Profile from "./component/Profile/Profile";
import Security from "./component/settings/Security";
import Createprofile from "./component/Profile/Createprofile";
import Notifications from "./component/notification/Notifications";
import Messages from "./component/message/Messages";

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
                  <Route path="/createsore" element={<Createsore />} />
                  <Route path="/addproducts" element={<Addproduct />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/createprofile" element={<Createprofile />} />
                  <Route path="/security" element={<Security />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/collections" element={<Collections />} />
                  <Route
                    path="/createcollection"
                    element={<Createcollection />}
                  />
                  <Route path="/purchaseorder" element={<Purchaseorder />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/messages" element={<Messages />} />
                  <Route path="/nocustomer" element={<Nocustomer />} />
                  <Route path="/nodriver" element={<Nodriver />} />
                  <Route path="/noorder" element={<Noorder />} />
                  <Route path="/noproduct" element={<Noproduct />} />
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
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
