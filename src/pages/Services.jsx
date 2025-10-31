// src/pages/Services.jsx
import { motion } from "framer-motion";
import "./Services.css";

const services = [
  {
    icon: "🚀",
    title: "Lead Generation",
    desc: "Targeted outreach across social media platforms to find real, convertible leads for your business.",
  },
  {
    icon: "💼",
    title: "B2B Digital Marketing",
    desc: "We design and execute data-driven campaigns tailored for your niche and audience.",
  },
  {
    icon: "🌐",
    title: "Website & Branding",
    desc: "From landing pages to brand identities, we help you establish a strong online presence.",
  },
  {
    icon: "📈",
    title: "SEO & Paid Ads",
    desc: "Boost visibility with performance-optimized ad strategies and organic SEO improvements.",
  },
  {
    icon: "🤝",
    title: "Growth Consulting",
    desc: "Get strategic insights to scale your business and close more deals effectively.",
  },
];

export default function Services() {
  return (
    <div className="services-page">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h1>

      <motion.p
        className="services-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        We empower your business with digital solutions that drive measurable growth and visibility.
      </motion.p>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.03 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
