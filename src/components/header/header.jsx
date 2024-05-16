import './Header.css'; // Assuming you'll use an external CSS file for styling
import React from 'react';

const Header = () => {
  const scrollToID = (id, offset) => {
    const element = document.getElementById(id);
    if (!element) {
      console.error(`Element with ID '${id}' not found.`);
      return;
    }
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };
  return (
    <header className='header'>
      <div className='content'>
        <a className='logo' href='/' > Josh Moskoff</a>
        <nav className='navigation'>
            <button onClick={() => scrollToID('projects-grid', -30)}>Projects</button>
            <button onClick={() => scrollToID('job-section', -30)}>Experience</button>
            <button>Demos</button>
        </nav>
      </div>
    </header>);
};

export default Header;
