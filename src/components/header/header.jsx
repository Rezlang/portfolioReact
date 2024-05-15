import './Header.css'; // Assuming you'll use an external CSS file for styling
import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <div className='content'>
        <a className='logo' href='/' > Josh Moskoff</a>
        <nav className='navigation'>
            <button>Projects</button>
            <button>Experience</button>
            <button>Demos</button>
        </nav>
      </div>
    </header>);
};

export default Header;
