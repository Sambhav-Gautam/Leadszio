import React from "react";
import { motion } from "framer-motion";
import { Star, Users } from "lucide-react";
import "./Testimonials.css";

// Sample testimonials - easily replaceable with real client testimonials
const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Founder",
    text: "Leadszio helped us generate high-quality leads that converted into actual clients. Their data-driven approach and personalized outreach made all the difference.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Marketing Director",
    text: "The website they built for us is stunning and performs incredibly well. Our conversion rate increased by 40% within the first month.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Business Owner",
    text: "Their SEO and paid ads expertise took our visibility to the next level. We're now ranking on the first page for our target keywords.",
    rating: 5,
  },
  {
    id: 4,
    name: "Neha Verma",
    role: "CEO",
    text: "Professional, responsive, and results-driven. Leadszio exceeded our expectations on every metric. Highly recommended!",
    rating: 5,
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="testimonial-header">
        <div className="testimonial-info">
          <h4>{testimonial.name}</h4>
          <p className="testimonial-role">{testimonial.role}</p>
        </div>
      </div>

      <div className="testimonial-stars">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} className="star-filled" />
        ))}
      </div>

      <p className="testimonial-text">"{testimonial.text}"</p>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <motion.div
        className="testimonials-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>What Our Clients Say</h2>
        <p>
          Join hundreds of businesses that have grown exponentially with our services
        </p>
      </motion.div>

        <div className="testimonial-marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...Array(12)].map((_, i) => (
              <Users key={i} size={28} className="marquee-icon" />
            ))}
          </div>
        </div>

        <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      <motion.div
        className="testimonials-cta"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3>Ready to be our next success story?</h3>
          <a href="/contact" className="cta-btn primary">
            Get Started Today
          </a>
      </motion.div>
    </section>
  );
}
