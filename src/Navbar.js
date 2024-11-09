import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/findClinic">Find Clinic</Link>
     <Link to="/imageAI">Medical Analyse</Link>

      <Link to="/talkAI">Medical AI</Link>

    </nav>
  );
}

export default Navbar;
