import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const ref = useRef(null);

  // scroll progress limited to this section for subtle parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // map scroll progress to gentle offsets for layers
  const layer1Y = useTransform(scrollYProgress, [0, 1], [0, 50]);   // foreground shapes
  const layer2Y = useTransform(scrollYProgress, [0, 1], [0, -40]);  // mid shapes
  const layer3Y = useTransform(scrollYProgress, [0, 1], [0, 20]);   // distant glow

  return (
    <section className="hero-section" ref={ref} aria-label="Leadszio hero">
      {/* SVG background with layered abstract shapes */}
      <div className="hero-svg-wrap" aria-hidden="true">
        <motion.svg
          className="hero-svg layer-3"
          style={{ y: layer3Y }}
          viewBox="0 0 1440 720"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="g-neutral-1" x1="0" x2="1">
              <stop offset="0" stopColor="#e6eefb" />
              <stop offset="1" stopColor="#dbe7ff" />
            </linearGradient>

            <radialGradient id="glow-neutral" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0.28" />
              <stop offset="1" stopColor="#cfdffb" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="g-neutral-2" x1="0" x2="1">
              <stop offset="0" stopColor="#ccd9f8" />
              <stop offset="1" stopColor="#c0d2f2" />
            </linearGradient>
          </defs>

          {/* distant soft glow */}
          <circle cx="1200" cy="120" r="260" fill="url(#glow-neutral)" opacity="0.5" />
          <circle cx="200" cy="520" r="220" fill="url(#glow-neutral)" opacity="0.45" />

          {/* large background blob */}
          <path
            d="M0 360 C160 280 360 220 560 250 C760 280 980 340 1180 300 C1320 270 1440 240 1440 240 L1440 720 L0 720 Z"
            fill="url(#g-neutral-1)"
            opacity="0.85"
          />
        </motion.svg>

        <motion.svg
          className="hero-svg layer-2"
          style={{ y: layer2Y }}
          viewBox="0 0 1440 720"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="g-curve" x1="0" x2="1">
              <stop offset="0" stopColor="#c7d7f7" />
              <stop offset="1" stopColor="#b9ccf2" />
            </linearGradient>
            <linearGradient id="g-blob" x1="0" x2="1">
              <stop offset="0" stopColor="#eaf2ff" />
              <stop offset="1" stopColor="#dbe9ff" />
            </linearGradient>
          </defs>

          {/* mid-layer abstract curve */}
          <path
            d="M0 420 C200 360 420 320 640 360 C860 400 1080 430 1440 380 L1440 720 L0 720 Z"
            fill="url(#g-curve)"
            opacity="0.9"
          />

          {/* smaller decorative soft blob shapes */}
          <ellipse cx="300" cy="200" rx="120" ry="80" fill="url(#g-blob)" opacity="0.95" />
          <ellipse cx="980" cy="140" rx="160" ry="110" fill="url(#g-blob)" opacity="0.85" />
        </motion.svg>

        <motion.svg
          className="hero-svg layer-1"
          style={{ y: layer1Y }}
          viewBox="0 0 1440 720"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="g-accent" x1="0" x2="1">
              <stop offset="0" stopColor="#9fb3e8" />
              <stop offset="1" stopColor="#8ea7dd" />
            </linearGradient>
            <linearGradient id="g-outline" x1="0" x2="1">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0.06" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0.03" />
            </linearGradient>
          </defs>

          {/* foreground abstract accents (outlines, subtle geometry) */}
          <path
            d="M120 260 C180 220 260 200 340 220 C420 240 520 300 700 300 C880 300 1020 260 1180 280"
            stroke="url(#g-outline)"
            strokeWidth="1.8"
            fill="none"
            opacity="0.9"
          />
          <ellipse cx="520" cy="480" rx="68" ry="40" fill="url(#g-accent)" opacity="0.9" />
          <ellipse cx="1120" cy="340" rx="92" ry="56" fill="url(#g-accent)" opacity="0.85" />
          <rect x="60" y="520" width="140" height="80" rx="30" fill="url(#g-accent)" opacity="0.7" />
        </motion.svg>
      </div>

      {/* subtle diagonal shimmer layer (very low opacity) */}
      <div className="hero-shimmer" aria-hidden="true" />

      {/* content block on top of SVGs */}
      <div className="hero-content" role="article">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          We Help Businesses Find <span className="highlight">Real Clients</span> and Grow Faster.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          Leadszio is a B2B company that empowers other businesses with data-driven lead generation,
          targeted outreach, and conversion-focused digital marketing.
        </motion.p>

        <motion.a
          href="/contact"
          className="hero-cta"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          Get Started
        </motion.a>
      </div>
    </section>
  );
}
