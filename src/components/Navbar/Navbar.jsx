import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">My Portfolio</div>
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: 'none' }}>
              <li>Home</li>
              <li>About</li>
              <li onClick={handleProjectsClick}>Projects</li>
              <li>Achievements</li>
            </ul>
          </div>
          <button className="button n-button" onClick={handleContactClick}>
            Contact me
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
