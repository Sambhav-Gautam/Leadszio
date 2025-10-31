// src/pages/Pricing.jsx
import { motion } from "framer-motion";
import "./Pricing.css";

const plans = [
  {
    title: "Starter",
    price: "$99",
    desc: "Perfect for small startups testing lead generation and initial outreach.",
    features: [
      "100 targeted leads/month",
      "Basic email support",
      "Social media profiling",
      "Monthly growth report",
    ],
  },
  {
    title: "Growth",
    price: "$299",
    highlight: true,
    desc: "For growing businesses ready to scale their client acquisition.",
    features: [
      "500 targeted leads/month",
      "Priority support",
      "Full digital marketing suite",
      "Weekly growth insights",
    ],
  },
  {
    title: "Enterprise",
    price: "$599",
    desc: "Full-service solution with dedicated campaign management.",
    features: [
      "Unlimited lead access",
      "Dedicated success manager",
      "SEO + Ads optimization",
      "Custom analytics dashboard",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="pricing-section">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Pricing Plans
      </motion.h1>
      <motion.p
        className="pricing-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Choose the perfect plan tailored to your business growth stage.
      </motion.p>

      <div className="pricing-cards">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h2>{plan.title}</h2>
            <h3>{plan.price}<span>/month</span></h3>
            <p>{plan.desc}</p>
            <ul>
              {plan.features.map((f, idx) => <li key={idx}>✅ {f}</li>)}
            </ul>
            <a href="/contact" className="plan-btn">Get Started</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
