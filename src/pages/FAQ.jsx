import React, { useState } from "react";
// Import the icon for the accordion chevron
import { ChevronDown } from "lucide-react"; 

import "./FAQ.css";

// --- Accordion Item Component (Unchanged) ---
function AccordionItem({ title, children, isOpen, onClick }) {
    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            {/* The header is clickable and includes the chevron icon */}
            <h3 className="faq-question" onClick={onClick}>
                {title}
                <ChevronDown className="faq-chevron" size={24} />
            </h3>
            {/* The content area collapses/expands based on isOpen state */}
            <div className="faq-answer-container">
                <div className="faq-answer-content">
                    {children}
                </div>
            </div>
        </div>
    );
}

// --- Main FAQ Component ---
export default function FAQ() {
    // State to manage which item is currently open. Initialized to null (none open)
    const [openIndex, setOpenIndex] = useState(null);

    // Toggle function: if the clicked index is already open, close it (set to null), otherwise open it.
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            q: "What exactly is Leadszio’s core mission?",
            a: "Leadszio is a B2B growth company dedicated to helping businesses find genuine clients, build a stronger digital presence, and achieve faster scaling through automation, data-driven strategy, and creative outreach.",
        },
        {
            q: "How does Leadszio ensure high-quality leads?",
            a: "We utilize intelligent automation, targeted outreach methods, and in-depth social media research to precisely identify high-potential clients that perfectly match your Ideal Customer Profile (ICP), guaranteeing conversion-ready leads.",
        },
        // --- EXPANDED QUESTIONS WITH RUPEE PRICING ---
        {
            q: "What is the cost structure for website design and development?",
            a: "Our one-time project fee for website development starts at ₹2,000 for a basic, responsive website and goes up to ₹10,000 for an advanced, complex build. This fee is strictly for design and development and does not include the ongoing costs of hosting or domain registration.",
        },
        {
            q: "Is there an additional charge for hosting or domain in website builds?",
            a: "Yes, our quoted project fee only covers the design and building of the website on free services. The ongoing costs for your domain name and web hosting subscription are managed and paid for directly by you.",
        },
        {
            q: "What services are included in the ₹5,000/month Growth Acceleration plan?",
            a: "The Growth Acceleration plan (₹5,000/month) is a focused subscription covering essential services like SEO optimization, dedicated Social Media Marketing (SMM), and new landing page creation. It also includes monthly performance analytics and strategy meetings.",
        },
        {
            q: "How does the Ad Campaign Setup fee of ₹2,000 work?",
            a: "We charge a one-time fee of ₹2,000 to design and prepare a high-quality, targeted ad campaign (including strategy, creatives, and platform setup). *The actual money invested in running the ads (ad spend) is managed and paid for entirely by the client.*",
        },
        {
            q: "Tell me more about the Full E-commerce Management package.",
            a: "The E-commerce Elite package (₹30,000/month) is a comprehensive solution covering product photography, listing on sales platforms (like Amazon), inventory handling, managing sales, and processing product deletion. Please note that all shipping costs per package are excluded from this monthly fee.",
        },
        {
            q: "Do I need to sign up or create an account to start?",
            a: "No sign-up is required to get started. You can directly reach out through our dedicated contact channels (Telegram or Email) to schedule a consultation, discuss your business objectives, and receive a personalized growth plan.",
        },
        {
            q: "Can Leadszio integrate my existing systems into a new website?",
            a: "For our Advanced Website Build (₹10,000 tier), we can integrate complex features, APIs, and existing backend systems, ensuring a seamless and fully functional digital environment tailored to your operational needs.",
        },
    ];

    return (
        <div className="faq">
            <h1>Frequently Asked Questions</h1>
            <div className="faq-list">
                {faqData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.q}
                        isOpen={openIndex === index}
                        onClick={() => handleToggle(index)}
                    >
                        <p>{item.a}</p>
                    </AccordionItem>
                ))}
            </div>
        </div>
    );
}