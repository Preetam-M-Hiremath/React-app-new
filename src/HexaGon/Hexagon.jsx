import React, { useEffect, useState } from "react";
import "./HexGrid.css";
import Hero from "../../src/assets/Hero.png";

const headlines = [
  "Design. Develop. Deploy for the Web",
  "Building Modern Websites for Brands & Businesses",
  "From Idea to Responsive, Production-Ready UI",
];

const subtitles = [
  "I design and build fast, responsive websites that help businesses look professional and convert more visitors.",
  "From landing pages to full multi-page sites, I focus on clean UI, smooth UX, and scalable front-end architecture.",
  "Need a portfolio, product site, or small business website? I turn your requirements into polished, production-ready code.",
];

const HexGrid = () => {
  const [lightPos, setLightPos] = useState({ x: 0, y: 0 });
  const [index, setIndex] = useState(0);

  const handleMouseMove = (e) => {
    setLightPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="container">
      <div id="hex-grid" onMouseMove={handleMouseMove}>
        {/* Light that follows mouse */}
        <div
          className="light"
          style={{ left: `${lightPos.x}px`, top: `${lightPos.y}px` }}
        />

        {/* Hero content wrapper */}
        <div className="hero-content">
          {/* Left hero text block */}
          <div className="hero-left">
            <div className="text-content">
              <h1>{headlines[index]}</h1>
              <p className="hero-subtitle">{subtitles[index]}</p>
              <div className="hero-buttons">
                <button className="btn btn-primary">Start Learning</button>
                <button className="btn btn-secondary">Build With Us</button>
              </div>
              <p className="hero-trust">
                Hands-on learning • Real-world projects • Enterprise-ready solutions
              </p>
            </div>
          </div>

          {/* Right hero visual block - STATIC */}
          <div className="hero-right">
            <div className="hero-visual-placeholder">
              <img src={Hero} alt="Hero visual" />
            </div>
          </div>
        </div>

        {/* Hex grid background */}
        <div className="grid"></div>
      </div>
    </div>
  );
};

export default HexGrid;
