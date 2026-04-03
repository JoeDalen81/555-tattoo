import React from "react";
import "./Safety.css";

function Safety() {
  const safetyPractices = [
    {
      icon: "🧤",
      title: "Single-Use Equipment",
      description:
        "All needles, tubes, and grips are single-use and disposed of immediately after each session. We never reuse equipment.",
    },
    {
      icon: "🧴",
      title: "Hospital-Grade Sterilization",
      description:
        "Our autoclave sterilization process meets and exceeds health department standards. All reusable equipment is thoroughly sterilized.",
    },
    {
      icon: "✨",
      title: "Pristine Environment",
      description:
        "Our studio is cleaned and sanitized multiple times daily. Work stations are completely sterilized between each client.",
    },
    {
      icon: "📋",
      title: "Licensed & Certified",
      description:
        "All artists are fully licensed and certified. We maintain current bloodborne pathogen training and first aid certification.",
    },
    {
      icon: "🧪",
      title: "Premium Inks",
      description:
        "We use only top-quality, vegan-friendly inks that are FDA-compliant and free from harmful chemicals.",
    },
    {
      icon: "💊",
      title: "Aftercare Support",
      description:
        "Every client receives detailed aftercare instructions and premium aftercare products. We're available for follow-up questions.",
    },
  ];

  return (
    <section id="safety" className="safety">
      <div className="container">
        <h2 className="section-title">Your Safety, Our Priority</h2>
        <p className="safety-intro">
          At 555 Tattoo, we believe that exceptional art begins with
          uncompromising safety standards. Denis Craig has built this studio on
          the foundation of cleanliness, professionalism, and client well-being.
          Your health is never a compromise.
        </p>

        <div className="safety-grid">
          {safetyPractices.map((practice, index) => (
            <div key={index} className="safety-card">
              <div className="safety-icon">{practice.icon}</div>
              <h3 className="safety-title">{practice.title}</h3>
              <p className="safety-description">{practice.description}</p>
            </div>
          ))}
        </div>

        <div className="safety-commitment">
          <div className="commitment-content">
            <h3>Our Commitment to You</h3>
            <p>
              "Safety isn't just a practice at 555 Tattoo—it's a philosophy.
              Every decision we make, from the products we use to the procedures
              we follow, is guided by our commitment to your well-being. When
              you sit in our chair, you can focus entirely on the excitement of
              your new tattoo, knowing that every precaution has been taken."
            </p>
            <span className="commitment-signature">— Denis Craig, Owner</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Safety;
