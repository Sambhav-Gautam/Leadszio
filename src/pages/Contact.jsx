import React from "react";
import { Mail, Send, MessageSquare } from "lucide-react";
import "./Contact.css"; 

// Helper Component for repeated contact methods
function ContactItem({ Icon, title, text, link, linkText }) {
    return (
        <div className="contact-card">
            <div className="contact-icon-wrapper">
                <Icon className="contact-icon" size={32} />
            </div>
            <h2>{title}</h2>
            <p className="contact-card-text">
                {text}
                <br />
                <a href={link} target="_blank" rel="noreferrer">
                    {linkText}
                </a>
            </p>
        </div>
    );
}

export default function Contact() {
    return (
        <div className="contact-page">
            {/* Abstract Background Layer for Depth */}
            <div className="contact-abstract-bg" aria-hidden="true"></div>

            <div className="contact-header">
                <h1>Get in Touch</h1>
                <p>
                    We’d love to hear from you. Whether you’re a business seeking leads or want to collaborate — 
                    reach out and we’ll get back to you <span className="text-emphasis-bold">within 24 hours</span>.
                </p>
            </div>

            <div className="contact-container">
                <ContactItem
                    Icon={Mail}
                    title="Email Support"
                    text="For general inquiries, partnerships, or detailed support."
                    link="mailto:contact@leadszio.com"
                    linkText="contact@leadszio.com"
                />

                <ContactItem
                    Icon={Send}
                    title="Direct Telegram"
                    text="Connect directly with our team for quick queries and updates."
                    link="https://t.me/leadszio"
                    linkText="t.me/leadszio"
                />

                <ContactItem
                    Icon={MessageSquare}
                    title="Discord Community"
                    text="Be part of our growing community and get instant help from peers."
                    link="https://discord.gg/leadszio"
                    linkText="discord.gg/leadszio"
                />
            </div>

            <div className="contact-footer">
                {/* Replaced ** with <strong> for JSX compatibility and professional emphasis */}
                <h3>Ready to <strong>Grow Your Business</strong>?</h3>
                <p>
                    Schedule a quick 15-minute introductory call with our lead generation experts today and see how Leadszio can start driving real results for you.
                </p>
                <a
                    href="#" // Placeholder for a scheduling link (e.g., Calendly)
                    className="contact-btn"
                >
                    Schedule a Discovery Call 🚀
                </a>
            </div>
        </div>
    );
}