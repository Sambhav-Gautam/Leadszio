import React from "react";
// Assuming Hero component is in '../components/Hero'
// Since this is just code export, we'll keep the import syntax for clarity
import Hero from "../components/Hero"; 
// Imports for the ServiceCard icons
import { Zap, TrendingUp, Monitor } from "lucide-react"; 
// Assuming './Home.css' is linked for styling
import "./Home.css"; 

// Helper component for the services section
function ServiceCard({ Icon, title, text }) {
  return (
    <div className="service-card">
      <div className="card-icon-wrapper">
        <Icon className="card-icon" size={32} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="home">
      {/* Assuming Hero is rendered here */}
      <Hero /> 
      
      <section className="home-section">
        <h2>What We Do</h2>
        <div className="cards">
          <ServiceCard
            Icon={Zap} 
            title="Lead Generation"
            text="We identify and connect you with real clients using social media intelligence."
          />
          <ServiceCard
            Icon={TrendingUp} 
            title="Digital Marketing"
            text="Boost your brand with SEO, ads, and performance marketing."
          />
          <ServiceCard
            Icon={Monitor} 
            title="Website Creation"
            text="Build modern, conversion-ready websites that attract customers."
          />
        </div>
      </section>
    </div>
  );
}