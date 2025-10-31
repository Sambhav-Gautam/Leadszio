// src/pages/Contact.jsx
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Let's talk! Reach out to us via email or our social platforms below.</p>
      <div className="contact-box">
        <p><strong>Email:</strong> contact@leadszio.com</p>
        <p><strong>Telegram:</strong> <a href="https://t.me/leadszio">t.me/leadszio</a></p>
        <p><strong>Discord:</strong> <a href="https://discord.gg/leadszio">discord.gg/leadszio</a></p>
      </div>
    </div>
  );
}
