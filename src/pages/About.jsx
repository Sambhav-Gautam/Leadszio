// src/pages/About.jsx
import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <section className="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>About Leadszio</h1>

        <p className="about-tagline">
          A B2B company helping businesses grow smarter through automation, creativity, and strategy.
        </p>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Leadszio is a <strong>B2B growth and automation company</strong> built to help other businesses
              find <strong>real, high-converting clients</strong> using a mix of intelligent marketing,
              targeted lead generation, and brand development.
            </p>

            <p>
              We combine data-driven strategies with modern automation to deliver measurable results —
              allowing your business to focus on what matters most: <strong>closing deals</strong> and
              building long-term client relationships.
            </p>

            <p>
              From <strong>lead sourcing</strong> and <strong>digital marketing</strong> to
              <strong> website creation</strong> and <strong>brand growth</strong>, we offer scalable
              solutions tailored to your business goals.
            </p>
          </div>

          {/* Inline SVG illustration — no external file needed */}
          <motion.div
            className="about-illustration"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 640 480"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Teamwork illustration"
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0" stopColor="#4B6EF5" />
                  <stop offset="1" stopColor="#6578FF" />
                </linearGradient>
                <linearGradient id="g2" x1="0" x2="1">
                  <stop offset="0" stopColor="#A7B6FF" />
                  <stop offset="1" stopColor="#E6EEFF" />
                </linearGradient>
              </defs>

              <rect x="0" y="0" width="640" height="480" rx="20" fill="url(#g2)" />

              {/* simplified characters */}
              <g transform="translate(80,80)" fill="none" stroke="#fff" strokeWidth="0">
                <circle cx="120" cy="80" r="36" fill="url(#g1)" />
                <circle cx="260" cy="60" r="28" fill="#6A5ACD" />
                <circle cx="380" cy="100" r="36" fill="#4B6EF5" />

                <rect x="88" y="130" width="64" height="44" rx="10" fill="#fff" opacity="0.16" />
                <rect x="238" y="120" width="44" height="44" rx="10" fill="#fff" opacity="0.12" />
                <rect x="348" y="140" width="72" height="44" rx="10" fill="#fff" opacity="0.14" />

                <g transform="translate(40,220)" fill="#fff" opacity="0.12">
                  <rect x="0" y="40" width="40" height="60" rx="6" />
                  <rect x="60" y="10" width="40" height="90" rx="6" />
                  <rect x="120" y="25" width="40" height="75" rx="6" />
                  <rect x="180" y="0" width="40" height="100" rx="6" />
                </g>

                <path d="M150 100 C210 120, 300 120, 360 100" stroke="#fff" strokeWidth="3" fill="none" opacity="0.12" />
              </g>
            </svg>
          </motion.div>
        </div>

        <motion.div
          className="about-cta-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Let's Build Your Success Story</h2>
          <p>Ready to grow your business with strategic marketing and lead generation?</p>
          <div className="about-cta-buttons">
            <a href="/contact" className="cta-btn primary">
              Schedule a Free Consultation
            </a>
            <a href="/services" className="cta-btn secondary">
              Learn Our Services
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
