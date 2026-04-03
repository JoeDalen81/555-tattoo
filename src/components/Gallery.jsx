import React, { useState } from "react";
import "./Gallery.css";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Placeholder gallery items - easily replaceable with actual work
  const galleryItems = [
    {
      id: 1,
      category: "blackwork",
      title: "Geometric Sleeve",
      image:
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80",
    },
    {
      id: 2,
      category: "traditional",
      title: "Classic Rose",
      image:
        "https://images.unsplash.com/photo-1590246814883-57c511e76a2c?w=600&q=80",
    },
    {
      id: 3,
      category: "realism",
      title: "Portrait Work",
      image:
        "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&q=80",
    },
    {
      id: 4,
      category: "blackwork",
      title: "Mandala Design",
      image:
        "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&q=80",
    },
    {
      id: 5,
      category: "traditional",
      title: "Eagle Chest Piece",
      image:
        "https://images.unsplash.com/photo-1542359649-31e03cd4d909?w=600&q=80",
    },
    {
      id: 6,
      category: "realism",
      title: "Nature Scene",
      image:
        "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=600&q=80",
    },
    {
      id: 7,
      category: "blackwork",
      title: "Dotwork Pattern",
      image:
        "https://images.unsplash.com/photo-1604941598738-5c587e4a3a2a?w=600&q=80",
    },
    {
      id: 8,
      category: "traditional",
      title: "Anchor Design",
      image:
        "https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=600&q=80",
    },
  ];

  const categories = [
    { id: "all", label: "All Work" },
    { id: "blackwork", label: "Blackwork" },
    { id: "traditional", label: "Traditional" },
    { id: "realism", label: "Realism" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Our Work</h2>
        <p className="gallery-intro">
          Every piece is a unique collaboration between artist and client.
          Browse our portfolio to see the range of styles and techniques we
          offer.
        </p>

        <div className="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${
                activeCategory === cat.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-image">
                {/* Replace these placeholder images with actual tattoo work */}
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <span className="gallery-category">{item.category}</span>
                  <h4 className="gallery-title">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <p>Want to see more? Follow us on social media for daily updates.</p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
