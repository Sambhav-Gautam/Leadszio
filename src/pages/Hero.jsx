// src/pages/Hero.jsx
export default function Hero() {
  return (
    <section className="bg-blue-600 text-white text-center py-20 px-4">
      <h1 className="text-4xl font-bold mb-4">
        We Find Real Clients. You Focus on Growing Your Business.
      </h1>
      <p className="text-lg mb-8">
        Leadszio helps B2B companies grow through lead generation, digital marketing, and web presence creation.
      </p>
      <a
        href="/contact"
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl"
      >
        Get Started
      </a>
    </section>
  );
}
