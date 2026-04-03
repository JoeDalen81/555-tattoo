import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About 555 Tattoo</h2>

        <div className="about-content">
          <div className="about-image">
            <div className="image-frame">
              {/* Placeholder image - replace with actual studio/owner photo */}
              <img
                src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&q=80"
                alt="555 Tattoo Studio"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="experience-badge">
              <span className="years">10+</span>
              <span className="label">Years Experience</span>
            </div>
          </div>

          <div className="about-text">
            <h3 className="about-subtitle">A Passion for Permanent Art</h3>
            <p className="about-description">
              Founded by Denise Craig, 555 Tattoo represents the culmination of
              a lifelong passion for art and self-expression. What began as a
              fascination with the ancient art of tattooing has evolved into a
              premier destination for those seeking meaningful, high-quality
              body art.
            </p>
            <p className="about-description">
              At 555 Tattoo, we believe that every tattoo tells a story. Whether
              it's your first piece or an addition to your collection, we
              approach each project with the same dedication to artistry and
              attention to detail. Our studio is a sanctuary where creativity
              meets professionalism.
            </p>
            <p className="about-description">
              Denise's journey in tattooing has been marked by continuous
              learning and evolution. From traditional techniques to modern
              innovations, every skill has been honed to deliver exceptional
              results that stand the test of time.
            </p>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">2000+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat">
                <span className="stat-number">5000+</span>
                <span className="stat-label">Tattoos Created</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
