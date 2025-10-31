// src/pages/Services.jsx
import { motion } from "framer-motion";
import { Briefcase, Rocket, Globe, BarChart } from "lucide-react"; // clean icons
import "./Services.css";

const services = [
  {
    icon: <Rocket size={36} strokeWidth={1.5} color="#4B6EF5" />,
    title: "Lead Generation",
    desc: "We identify and connect you with genuine, high-conversion leads using intelligent outreach and data-driven strategies.",
  },
  {
    icon: <Briefcase size={36} strokeWidth={1.5} color="#4B6EF5" />,
    title: "B2B Digital Marketing",
    desc: "Performance-focused campaigns built to engage the right audience and amplify your business visibility.",
  },
  {
    icon: <Globe size={36} strokeWidth={1.5} color="#4B6EF5" />,
    title: "Website & Branding",
    desc: "Modern websites and cohesive branding that communicate trust, credibility, and a strong digital presence.",
  },
  {
    icon: <BarChart size={36} strokeWidth={1.5} color="#4B6EF5" />,
    title: "SEO & Paid Ads",
    desc: "Boost visibility through optimized ad strategies, keyword-focused SEO, and data-backed performance growth.",
  },
];

export default function Services() {
  return (
    <div className="services-page">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h1>

      <motion.p
        className="services-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        We offer end-to-end digital solutions that help your business grow faster, smarter, and stronger.
      </motion.p>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
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
