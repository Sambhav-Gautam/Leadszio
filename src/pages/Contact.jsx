import { Mail, Send, MessageSquare } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you. Whether you’re a business seeking leads or
          want to collaborate — reach out and we’ll get back within 24 hours.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-card">
          <Mail className="contact-icon" />
          <h2>Email</h2>
          <p>
            For general inquiries, partnerships, or support.
            <br />
            <a href="mailto:contact@leadszio.com">contact@leadszio.com</a>
          </p>
        </div>

        <div className="contact-card">
          <Send className="contact-icon" />
          <h2>Telegram</h2>
          <p>
            Join our Telegram for quick queries and updates.
            <br />
            <a
              href="https://t.me/leadszio"
              target="_blank"
              rel="noreferrer"
            >
              t.me/leadszio
            </a>
          </p>
        </div>

        <div className="contact-card">
          <MessageSquare className="contact-icon" />
          <h2>Discord</h2>
          <p>
            Be part of our growing community and get instant help.
            <br />
            <a
              href="https://discord.gg/leadszio"
              target="_blank"
              rel="noreferrer"
            >
              discord.gg/leadszio
            </a>
          </p>
        </div>
      </div>

      <div className="contact-footer">
        <h3>Prefer a direct conversation?</h3>
        <p>
          Schedule a quick chat with our team and see how Leadszio can grow your business.
        </p>
        <a
          href="mailto:contact@leadszio.com"
          className="contact-btn"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
