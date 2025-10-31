// src/pages/Home.jsx
import Hero from "../components/Hero";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <section className="home-section">
        <h2>What We Do</h2>
        <div className="cards">
          <ServiceCard
            title="Lead Generation"
            text="We identify and connect you with real clients using social media intelligence."
          />
          <ServiceCard
            title="Digital Marketing"
            text="Boost your brand with SEO, ads, and performance marketing."
          />
          <ServiceCard
            title="Website Creation"
            text="Build modern, conversion-ready websites that attract customers."
          />
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, text }) {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
