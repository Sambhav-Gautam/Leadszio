import React from "react";
import { Link } from "react-router-dom";
import { Mail, Send, MessageCircle } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Wave Divider */}
      <div className="footer-wave"></div>

      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="footer-logo">Leadszio</h2>
          <p className="footer-desc">
            Helping businesses grow with smart lead generation, automation & digital marketing.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Connect</h3>
          <ul>
            <li>
              <Mail size={18} />
              <a href="mailto:contact@leadszio.com">contact@leadszio.com</a>
            </li>
            <li>
              <Send size={18} />
              <a href="https://t.me/leadszio" target="_blank" rel="noreferrer">@leadszio</a>
            </li>
            <li>
              <MessageCircle size={18} />
              <a href="https://discord.gg/leadszio" target="_blank" rel="noreferrer">
                Discord Community
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-policy">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span> • </span>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
        <p>© 2025 Leadszio. All rights reserved.</p>
      </div>
    </footer>
  );
}
