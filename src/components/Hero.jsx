import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">Est. 2015</div>
        <h1 className="hero-title">
          <span className="hero-number">555</span>
          <span className="hero-text">TATTOO</span>
        </h1>
        <p className="hero-tagline">Where Art Meets Skin</p>
        <p className="hero-description">
          Premium tattoo artistry by Denise Craig. Every piece tells a story,
          crafted with passion, precision, and an unwavering commitment to
          safety.
        </p>
        <div className="hero-cta">
          <a href="#gallery" className="btn btn-primary">
            View Our Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Book Consultation
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
