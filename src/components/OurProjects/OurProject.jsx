import React, { useState, useEffect } from "react";
import "./OurProject.css";
import SSMS from "../../assets/SSMS.png";
import MORAYA_IMG from "../../assets/MORAYA_IMG.png";

const OurProject = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const projects = [
    {
      id: 1,
      eyebrow: "Our Project",
      title: "Shree Sangameshwara Medical Store",
      body1: "We designed a clean, responsive website for Shree Sangameshwara Medical Store to give the pharmacy a professional online presence and make it easy for people to find them.",
      body2: "The site focuses on clear contact details, an integrated location map, and essential store information, so customers can quickly see where the medical store is, when it is open, and how to reach them.",
      link: "https://shree-sangameshwara-medical.web.app/",
      image: SSMS,
    },
    
  ];

  const goToPrev = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(id);
  }, [isPaused, projects.length]);

  const current = projects[index];

  return (
    <div className="Carsual">
    <div className="projects-wrapper">
      <div
        className="projects-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Section */}
        <section className="project-section project-left-section">
          <div className="project-content">
            <p className="project-eyebrow">{current.eyebrow}</p>
            <h2 className="project-title">{current.title}</h2>

            <p className="project-body">{current.body1}</p>
            <p className="project-body">{current.body2}</p>

            <button className="project-cta">
              <a href={current.link}>View Project</a>
              <i class="project-cta-icon  fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </section>

        {/* Right Section - Image */}
        <section className="project-section project-right-section">
          <div className="project-image-container">
            <a href={current.link}>
              <img src={current.image} alt={current.title} />
            </a>
          </div>
        </section>

        {/* Navigation Controls */}
        <button className="project-nav-btn project-nav-prev" onClick={goToPrev}>
          ‹
        </button>
        <button className="project-nav-btn project-nav-next" onClick={goToNext}>
          ›
        </button>

        {/* Indicators */}
        <div className="project-indicators">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`project-indicator ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default OurProject;
