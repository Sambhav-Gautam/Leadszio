// src/components/Navbar.js
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Added a simple wrapper for centering the logo on mobile */}
      <div className="nav-logo-wrapper">
        <div className="nav-logo">
          <Link to="/">Leadszio</Link>
        </div>
      </div>
      
      {/* The list of links, now forced to one scrollable row on small screens */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}