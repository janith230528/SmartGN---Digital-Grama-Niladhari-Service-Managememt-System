import React, { useState } from 'react';
import Logo from './Logo/Logo';
import NavTabs from './NavTabs/NavTabs';
import LanguageSelector from './LanguageSelector/LanguageSelector';
import './Navbar.css';

function Navbar() {
return (
    <nav className="navbar">
      <div className="nav-container">
        <Logo />
        <NavTabs />
        <LanguageSelector />
      </div>

       <div className="nav-container-hidden">
        <NavTabs />
        <Logo />
        <LanguageSelector />
      </div>
   </nav>

  );
}

export default Navbar;
