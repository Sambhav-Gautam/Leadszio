// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Send, MessageCircle } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* SVG Abstract Background */}
      <div className="footer-bg">
        <svg
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.25" />
            </linearGradient>
          </defs>

          {/* background wave */}
          <path
            d="M0,300 Q360,150 720,300 T1440,300 L1440,400 L0,400 Z"
            fill="url(#grad)"
          />

          {/* dotted circle and lines */}
          <circle cx="200" cy="120" r="80" stroke="#a5b4fc" strokeWidth="0.8" fill="none" opacity="0.4" />
          <circle cx="1240" cy="200" r="120" stroke="#93c5fd" strokeWidth="1" fill="none" opacity="0.3" />
          <line x1="220" y1="110" x2="1240" y2="200" stroke="#93c5fd" strokeWidth="0.6" opacity="0.3" />
        </svg>
      </div>

      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2 className="footer-logo">Leadszio</h2>
          <p className="footer-desc">
            Helping businesses grow through smart automation, lead generation, and data-driven digital marketing.
          </p>
          <div className="footer-socials">
            <a href="#"><i className="ri-twitter-fill"></i></a>
            <a href="#"><i className="ri-linkedin-fill"></i></a>
            <a href="#"><i className="ri-instagram-fill"></i></a>
          </div>
        </div>

        {/* Explore */}
        <div className="footer-col">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-col">
          <h3>Resources</h3>
          <ul>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div className="footer-col">
          <h3>Connect</h3>
          <ul>
            <li>
              <Mail size={16} />
              <a href="mailto:contact@leadszio.com">contact@leadszio.com</a>
            </li>
            <li>
              <Send size={16} />
              <a href="https://t.me/leadszio" target="_blank" rel="noreferrer">@leadszio</a>
            </li>
            <li>
              <MessageCircle size={16} />
              <a href="https://discord.gg/leadszio" target="_blank" rel="noreferrer">Discord Community</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <p>© 2025 Leadszio. All rights reserved.</p>
      </div>
    </footer>
  );
}
