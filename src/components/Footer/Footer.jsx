// Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top section with brand and social links */}
      <div className="footer-top">
        <div className="footer-brand">
          <h3 className="footer-logo">WAC</h3>
          <p className="footer-tagline">
            We design, develop, and deliver modern digital solutions that help
            brands grow, scale, and stand out online.
          </p>
        </div>

        <div className="footer-social">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="social-link"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="social-link"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Main content grid */}
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">Who We Are</a></li>
            <li><a href="/services">What We Do</a></li>
            <li><a href="/portfolio">Our Work</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Core Services</h4>
          <ul>
            <li><a href="/services/web-development">Website Development</a></li>
            <li><a href="/services/web-design">UI / UX Design</a></li>
            <li><a href="/services/ui-ux">Frontend Engineering</a></li>
            <li><a href="/services/ecommerce">E-Commerce Solutions</a></li>
            <li><a href="/services/seo">Performance & SEO</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Details</h4>
          <div className="contact-info">
            <p>
              <i className="fas fa-map-marker-alt"></i>
              Belagavi, Karnataka, India
            </p>
            <p>
              <i className="fa-chisel fa-regular fa-at"></i>
              wearecreater@gmail.com
            </p>
            <p>
              <i className="fas fa-globe"></i>
              wearecreater.web.app
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Website Solutions</h4>
          <ul>
            <li><a href="/services/corporate">Corporate Websites</a></li>
            <li><a href="/services/landing">High-Converting Landing Pages</a></li>
            <li><a href="/services/startups">Startup & MVP Websites</a></li>
            <li><a href="/services/institutional">Educational & Institutional</a></li>
            <li><a href="/services/hosting">Hosting & Maintenance</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-text">
          © {new Date().getFullYear()} We Are Creater — Building modern, scalable
          web experiences. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
