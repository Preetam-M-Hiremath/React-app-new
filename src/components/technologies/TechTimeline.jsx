import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDatabase, 
  faServer, 
  faLaptopCode,
  faCode 
} from '@fortawesome/free-solid-svg-icons';
import { faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import "./TechTimeline.css";

const categories = [
  { 
    name: "Backend", 
    color: "#47A07F", 
    techs: [
      { name: "MongoDB", icon: faDatabase },
      { name: "Node.js", icon: faNodeJs },
      { name: "Express", icon: faServer }
    ]
  },
  { 
    name: "Frontend", 
    color: "#4F67C1", 
    techs: [
      { name: "React", icon: faReact },
      { name: "HTML/CSS", icon: faLaptopCode },
      { name: "JavaScript", icon: faLaptopCode }
    ]
  },
  { 
    name: "Languages", 
    color: "#F59E0B", 
    techs: [
      { name: "Python", icon: faCode },
      { name: "C", icon: faCode },
      { name: "Java", icon: faCode }
    ]
  }
];

const TechTimeline = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentTechs = categories[activeCategory].techs;
  const currentCategory = categories[activeCategory];

  return (
    <div className="tech-container">
      <div className="tech-wrapper">
        {/* Category Timeline */}
        <div className="category-timeline">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`category-item ${index === activeCategory ? 'active' : ''}`}
              style={{ '--cat-color': category.color }}
              onClick={() => setActiveCategory(index)}
            >
              <div className="category-indicator" />
              <span>{category.name}</span>
            </div>
          ))}
        </div>

        {/* Tech Title */}
        <h2 
          className="tech-title"
          style={{ '--title-color': currentCategory.color }}
        >
          {currentCategory.name} Technologies
        </h2>
        
        {/* Dynamic Tech Grid */}
        <div className="tech-grid">
          {currentTechs.map((tech, index) => (
            <div 
              key={`${currentCategory.name}-${tech.name}-${index}`}
              className="tech-item"
              style={{ 
                '--tech-color': currentCategory.color,
                '--delay': `${index * 0.15}s`
              }}
            >
              <div className="tech-icon">
                <FontAwesomeIcon icon={tech.icon} className="tech-logo" />
                <span>{tech.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Title */}
        <h3 className="industries-title">Industries We Cater</h3>
      </div>
    </div>
  );
};

export default TechTimeline;
