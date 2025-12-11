import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react"; // Using CheckCircle for features
import "./Pricing.css";

// --- Pricing Data Structure (Reflecting new services) ---

// 1. A La Carte Services (One-Time Fees)
const aLaCartePlans = [
  {
    title: "Basic Website Build",
    price: "₹5,000",
    desc: "A professionally designed, responsive website for simple digital presence.",
    features: [
      "Custom Frontend/Backend Design",
      "Built on Free Hosting (e.g., Vercel, Netlify)",
      "Standard UI/UX principles",
      "One-time project fee",
    ],
  },
  {
    title: "Advanced Website Build",
    price: "₹15,000",
    desc: "Complex, high-performance website with custom features and integration.",
    features: [
      "Full Stack Development & Integration",
      "Advanced API implementation",
      "SEO-ready structure",
      "Launch & 30-day support",
    ],
  },
  {
    title: "Ad Campaign Setup",
    price: "₹4,000 to ₹5,000",
    desc: "Creation and launch preparation for a highly optimized digital ad campaign.",
    features: [
      "In-depth market research",
      "Campaign strategy & targeting",
      "Ad creative development",
      "Platform integration (Cost of Ads excluded)",
    ],
  },
];

// 2. Monthly Growth Subscriptions
const monthlyPlans = [
  {
    title: "Growth Acceleration",
    price: "₹5,000 - ₹8,000",
    desc: "Focused monthly plan for brand building and consistent digital growth.",
    highlight: true,
    features: [
      "SEO Optimization & Monitoring",
      "Dedicated Social Media Management (SMM)",
      "Landing Page Creation/Optimization",
      "Monthly performance analytics & meeting",
    ],
  },
  // We can add a simple "Maintenance" plan if desired, but here we focus on core value.
];

// 3. E-commerce Full Management
const eCommercePlan = [
  {
    title: "E-commerce Elite",
    price: "₹40,000 - ₹48,000",
    desc: "Full-service package for physical product handling, sales, and optimization.",
    features: [
      "Product photography & listing on Amazon/Etsy/etc.",
      "Inventory management & updates",
      "Sales performance tracking",
      "Order fulfillment processing (Excludes shipping costs)",
    ],
  },
];


export default function Pricing() {
  const allPlans = [...aLaCartePlans, ...monthlyPlans, ...eCommercePlan];
  const containerVariants = {
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };


  return (
    <section className="pricing-section">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Flexible Pricing & Growth Plans
      </motion.h1>
      <motion.p
        className="pricing-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Select the services you need, from one-time builds to full-scale monthly partnerships.
      </motion.p>
      
      {/* --- A LA CARTE SERVICES --- */}
      <h2 className="pricing-group-heading">One-Time Project Services</h2>
      <motion.div 
        className="pricing-cards a-la-carte"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {aLaCartePlans.map((plan, i) => (
          <motion.div
            key={i}
            className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
            variants={itemVariants}
          >
            <h2>{plan.title}</h2>
            <h3>{plan.price}<span> {plan.title.includes("Build") ? " (One-time)" : " (Setup)"}</span></h3>
            <p>{plan.desc}</p>
            <ul>
              {plan.features.map((f, idx) => <li key={idx}><CheckCircle size={16} className="feature-icon" /> {f}</li>)}
            </ul>
            <a href="/contact" className="plan-btn">Inquire Now</a>
          </motion.div>
        ))}
      </motion.div>

      {/* --- MONTHLY GROWTH SERVICES --- */}
      <h2 className="pricing-group-heading">Monthly Growth Subscriptions</h2>
      <motion.div 
        className="pricing-cards monthly-growth"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {monthlyPlans.map((plan, i) => (
          <motion.div
            key={i}
            className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
            variants={itemVariants}
          >
            <div className="card-tag">{plan.highlight ? "Recommended" : ""}</div>
            <h2>{plan.title}</h2>
            <h3>{plan.price}<span>/month</span></h3>
            <p>{plan.desc}</p>
            <ul>
              {plan.features.map((f, idx) => <li key={idx}><CheckCircle size={16} className="feature-icon" /> {f}</li>)}
            </ul>
            <a href="/contact" className="plan-btn">Start Growing</a>
          </motion.div>
        ))}
      </motion.div>

      {/* --- E-COMMERCE MANAGEMENT --- */}
      <h2 className="pricing-group-heading">Full E-commerce Management</h2>
      <motion.div 
        className="pricing-cards full-management"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {eCommercePlan.map((plan, i) => (
          <motion.div
            key={i}
            className={`pricing-card`}
            variants={itemVariants}
          >
            <h2>{plan.title}</h2>
            <h3>{plan.price}<span>/month</span></h3>
            <p>{plan.desc}</p>
            <ul>
              {plan.features.map((f, idx) => <li key={idx}><CheckCircle size={16} className="feature-icon" /> {f}</li>)}
            </ul>
            <a href="/contact" className="plan-btn">Get Dedicated Manager</a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}