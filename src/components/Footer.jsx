import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">Leadszio</h2>
        <p className="footer-tagline">
          Helping businesses grow through smart lead generation & digital marketing.
        </p>

        <div className="footer-contact">
          <p>
            📧 Email: <a href="mailto:contact@leadszio.com">contact@leadszio.com</a>
          </p>
          <p>
            💬 Telegram: <a href="https://t.me/leadszio" target="_blank" rel="noreferrer">@leadszio</a>
          </p>
          <p>
            🕹 Discord: <a href="https://discord.gg/leadszio" target="_blank" rel="noreferrer">Join our server</a>
          </p>
        </div>

        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span> | </span>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

        <p className="footer-copy">© 2025 Leadszio. All rights reserved.</p>
      </div>
    </footer>
  );
}
