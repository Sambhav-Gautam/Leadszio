// src/pages/FAQ.jsx
import "./FAQ.css";

export default function FAQ() {
  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-item">
        <h3>What does Leadszio do?</h3>
        <p>
          Leadszio is a B2B growth company that helps other businesses find genuine clients,
          build stronger digital presence, and scale faster using automation and creative strategy.
        </p>
      </div>

      <div className="faq-item">
        <h3>How does Leadszio find leads?</h3>
        <p>
          We use intelligent automation, targeted outreach, and social media research to identify
          high-potential clients that match your ideal customer profile.
        </p>
      </div>

      <div className="faq-item">
        <h3>Do I need to sign up to get started?</h3>
        <p>
          No sign-up is required. You can directly reach out through Telegram or Email to discuss
          your business goals and get a personalized plan.
        </p>
      </div>

      <div className="faq-item">
        <h3>Can you create my business website too?</h3>
        <p>
          Absolutely! We design fast, responsive, and conversion-focused websites tailored to
          your brand and marketing needs.
        </p>
      </div>
    </div>
  );
}
