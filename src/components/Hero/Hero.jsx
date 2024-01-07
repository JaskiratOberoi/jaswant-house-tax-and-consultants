import React from "react";

import lawLogo from "../../assets/law-logo.avif";

function Hero() {
  return (
    <div className="hero">
      <div className="desc-content">
        <div className="desc-title">
          One stop office for all your Tax Needs!
        </div>
        <div className="desc-body">
          We are a reputed business, based in West Delhi, that has been
          providing the best in class drafting, registration, licensing and
          consultancy services for almost 21 years. Our team consists of highly
          qualified professionals, proficient in their respective field.
        </div>
      </div>
      <img className="hero-img" src={lawLogo} alt="Law Logo" />
    </div>
  );
}

export default Hero;
