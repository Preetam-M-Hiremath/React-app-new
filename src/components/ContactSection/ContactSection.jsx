import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-section-wrapper">
      <div className="contact-container">
        {/* Left Services Cards */}
        <div className="services-column">
          <div className="service-card seo">
            <div className="card-icon">🚀</div>
            <h3>SEO Optimized</h3>
            <p>Top Bangalore solutions</p>
          </div>
          
          <div className="service-card speed">
            <div className="card-icon">⚡</div>
            <h3>Fast Loading</h3>
            <p>Lightning fast performance</p>
          </div>
          
          <div className="service-card mobile">
            <div className="card-icon">📱</div>
            <h3>Mobile First</h3>
            <p>Responsive design</p>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="contact-column">
          <div className="contact-header">
            <h2>Contact Us</h2>
            <p>Let's discuss your project</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Enter Name*"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Enter Email*"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Enter Phone*"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="company"
                placeholder="Enter Company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <select name="subject" value={formData.subject} onChange={handleChange}>
                <option value="">Select Subject</option>
                <option value="website-development">Website Development</option>
                <option value="mobile-app">Mobile App</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Enter Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
          
          <div className="form-footer">
            <p>or email us directly</p>
            <a href="#">wearecreater@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
