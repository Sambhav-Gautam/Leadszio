// src/pages/Pricing.jsx
import "./Pricing.css";

export default function Pricing() {
  return (
    <div className="pricing">
      <h1>Pricing Plans</h1>
      <div className="pricing-grid">
        <Plan title="Starter" price="$99" desc="For small startups testing lead generation." />
        <Plan title="Growth" price="$299" desc="For growing businesses ready to scale outreach." />
        <Plan title="Enterprise" price="$599" desc="Full service suite with digital marketing + web." />
      </div>
    </div>
  );
}

function Plan({ title, price, desc }) {
  return (
    <div className="plan">
      <h2>{title}</h2>
      <h3>{price}/month</h3>
      <p>{desc}</p>
      <a href="/contact" className="plan-btn">Get Started</a>
    </div>
  );
}
