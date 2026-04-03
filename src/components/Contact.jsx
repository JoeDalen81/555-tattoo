import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tattooType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - integrate with backend or email service
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      tattooType: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Book Your Session</h2>
        <p className="contact-intro">
          Ready to start your tattoo journey? Fill out the form below and we'll
          get back to you within 24-48 hours to discuss your ideas and schedule
          a consultation.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Visit Us</h3>
              <p>
                555 Main Street
                <br />
                Your City, State 12345
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Call Us</h3>
              <p>(555) 555-5555</p>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3>Email Us</h3>
              <p>info@555tattoo.com</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h3>Hours</h3>
              <p>
                Tue - Sat: 12pm - 9pm
                <br />
                Sun - Mon: By Appointment
              </p>
            </div>

            <div className="studio-note">
              <h4>Walk-ins Welcome</h4>
              <p>
                While we recommend booking in advance for custom work, we do
                accept walk-ins for smaller pieces when availability allows.
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 555-5555"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="tattooType">Tattoo Style Interest</label>
              <select
                id="tattooType"
                name="tattooType"
                value={formData.tattooType}
                onChange={handleChange}
              >
                <option value="">Select a style...</option>
                <option value="blackwork">Blackwork</option>
                <option value="traditional">Traditional</option>
                <option value="realism">Realism</option>
                <option value="fine-line">Fine Line</option>
                <option value="geometric">Geometric</option>
                <option value="custom">Custom Design</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell Us About Your Idea *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Describe your tattoo idea, placement, size, and any reference images you'd like to share..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Send Inquiry
            </button>

            <p className="form-note">
              * Required fields. We respect your privacy and will never share
              your information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
