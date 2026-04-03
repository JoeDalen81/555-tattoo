import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedWork from "./components/FeaturedWork";
import Gallery from "./components/Gallery";
import Safety from "./components/Safety";
import Artists from "./components/Artists";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedWork />
        <Gallery />
        <Safety />
        <Artists />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
