import Header from "./lp/Header";
import Hero from "./lp/Hero";
import Lpfooter from "./lp/Lpfooter";
import Features from "./lp/Features";
import Imagesection from "./lp/Imagesection";
import Join from "./lp/Join";

import "../assets/lpassets/vendor/aos/aos.css";
import "../assets/lpassets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/lpassets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/lpassets/vendor/boxicons/css/boxicons.min.css";
import "../assets/lpassets/vendor/glightbox/css/glightbox.min.css";
import "../assets/lpassets/vendor/swiper/swiper-bundle.min.css";
import "../assets/lpassets/css/style.css";

function Landingpage() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Imagesection />
      <Join />
      <Lpfooter />
    </>
  );
}

export default Landingpage;