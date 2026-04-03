import React from "react";
import "./Artists.css";

function Artists() {
  const artists = [
    {
      id: 1,
      name: "Denis Craig",
      role: "Owner & Lead Artist",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      specialties: ["Blackwork", "Realism", "Custom Design"],
      bio: "With over a decade of experience, Denis founded 555 Tattoo with a vision to create a space where artistry meets professionalism. His passion for tattooing began at a young age, and he has since dedicated his life to mastering the craft. Denis specializes in blackwork and realism, bringing each client's vision to life with precision and creativity.",
      instagram: "#",
    },
    {
      id: 2,
      name: "Artist Name",
      role: "Senior Artist",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      specialties: ["Traditional", "Neo-Traditional", "Color Work"],
      bio: "[Placeholder bio text] This artist brings years of experience and a unique perspective to every piece. Specializing in traditional and neo-traditional styles, they combine classic techniques with modern innovation to create stunning, timeless tattoos.",
      instagram: "#",
    },
    {
      id: 3,
      name: "Artist Name",
      role: "Tattoo Artist",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      specialties: ["Fine Line", "Minimalist", "Geometric"],
      bio: "[Placeholder bio text] Known for delicate fine line work and minimalist designs, this artist has developed a devoted following. Their attention to detail and steady hand make them the go-to choice for intricate, subtle pieces.",
      instagram: "#",
    },
  ];

  return (
    <section id="artists" className="artists">
      <div className="container">
        <h2 className="section-title">Meet Our Artists</h2>
        <p className="artists-intro">
          Our team of talented artists brings diverse styles and expertise to
          every piece. Each artist is dedicated to creating custom work that
          exceeds expectations.
        </p>

        <div className="artists-grid">
          {artists.map((artist) => (
            <div key={artist.id} className="artist-card">
              <div className="artist-image">
                {/* Replace placeholder images with actual artist photos */}
                <img src={artist.image} alt={artist.name} />
                <div className="artist-overlay">
                  <a
                    href={artist.instagram}
                    className="artist-social"
                    aria-label="Instagram"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="artist-info">
                <h3 className="artist-name">{artist.name}</h3>
                <span className="artist-role">{artist.role}</span>
                <div className="artist-specialties">
                  {artist.specialties.map((specialty, index) => (
                    <span key={index} className="specialty-tag">
                      {specialty}
                    </span>
                  ))}
                </div>
                <p className="artist-bio">{artist.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Artists;
