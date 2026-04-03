import React from "react";
import Carousel from "./Carousel";
import "./FeaturedWork.css";

function FeaturedWork() {
  // Placeholder featured work items - easily replaceable with actual client work
  const featuredItems = [
    {
      image:
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1200&q=80",
      title: "Full Sleeve Masterpiece",
      description: "Custom blackwork design - 20 hours of work",
    },
    {
      image:
        "https://images.unsplash.com/photo-1590246814883-57c511e76a2c?w=1200&q=80",
      title: "Traditional Rose Collection",
      description: "Classic American traditional style",
    },
    {
      image:
        "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=1200&q=80",
      title: "Portrait Realism",
      description: "Hyper-realistic portrait work",
    },
    {
      image:
        "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=1200&q=80",
      title: "Geometric Mandala",
      description: "Sacred geometry and dotwork",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542359649-31e03cd4d909?w=1200&q=80",
      title: "Japanese Inspired",
      description: "Traditional Japanese motifs with modern execution",
    },
  ];

  return (
    <section className="featured-work">
      <div className="featured-header">
        <h2 className="section-title">Featured Work</h2>
        <p className="featured-intro">
          Swipe through our latest and most celebrated pieces. Each tattoo
          represents a unique collaboration between artist and client.
        </p>
      </div>
      <Carousel items={featuredItems} autoPlay={true} interval={5000} />
      <div className="featured-cta">
        <a href="#gallery" className="btn btn-secondary">
          View Full Gallery
        </a>
      </div>
    </section>
  );
}

export default FeaturedWork;
