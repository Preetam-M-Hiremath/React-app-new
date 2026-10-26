import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faShoppingCart, 
  faCode, 
  faUserMd 
} from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: "Corporate",
    description: "Rich websites designed for authority and credibility",
    color: "#8b5cf6",
    icon: faBuilding
  },
  {
    title: "Ecommerce", 
    description: "Fully secure with product catalogs and payment integrations",
    color: "#06b6d4",
    icon: faShoppingCart
  },
  {
    title: "Custom Web",
    description: "Tailored solutions for high performance and specific needs",
    color: "#10b981",
    icon: faCode
  },
  {
    title: "Healthcare",
    description: "Websites for clinics, hospitals, and patient management systems",
    color: "#f59e0b",
    icon: faUserMd
  }
];

const ServicesGrid = () => {
  return (
    <div className="services-container">
      <div className="services-wrapper">
        <h2 className="services-title">Types of Websites We Provide</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ 
                '--card-color': service.color,
                '--delay': `${index * 0.1}s`
              }}
            >
              <div className="card-icon">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
