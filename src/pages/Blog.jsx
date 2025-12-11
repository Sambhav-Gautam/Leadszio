import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, FileText, Video } from "lucide-react";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "5 Lead Generation Strategies That Actually Work in 2025",
    excerpt:
      "Discover proven methods to identify and engage high-quality leads using social media intelligence and data-driven outreach.",
    content: `<h3>Introduction</h3>
<p><strong>Lead generation</strong> is the lifeblood of any B2B business. This guide outlines five practical strategies you can implement immediately.</p>

<h3>Top Strategies</h3>
<ul>
  <li><strong>Social Media Intelligence:</strong> Use LinkedIn and industry signals to find decision-makers and build relationships.</li>
  <li><strong>Account-Based Marketing (ABM):</strong> Personalize outreach for high-value accounts to improve conversion rates.</li>
  <li><strong>Content-Driven Outreach:</strong> Create assets that solve problems and use them in targeted campaigns.</li>
  <li><strong>Strategic Partnerships:</strong> Collaborate with complementary services to reach new audiences.</li>
  <li><strong>Continuous Optimization:</strong> Track metrics, test variations, and scale what works.</li>
</ul>

<h3>Conclusion</h3>
<p><em>Start small, measure results, and iterate. Consistent optimization compounds over time.</em></p>`,
    author: "Sambhav Gautam",
    date: "Dec 5, 2025",
    readTime: "7 min read",
    category: "Lead Generation",
    image: "",
  },
  {
    id: 2,
    title: "Website Design Trends That Drive Conversions",
    excerpt:
      "Learn modern design principles that not only look great but also convert visitors into customers.",
    content: `<h3>Why Design Matters</h3>
<p><strong>Conversion-focused design</strong> reduces friction and guides users toward action.</p>

<h3>Key Trends</h3>
<ul>
  <li><strong>Minimalist Layouts:</strong> Use whitespace and clear visual hierarchy to improve comprehension.</li>
  <li><strong>Dark Mode:</strong> Improves accessibility and reduces eye strain for many users.</li>
  <li><strong>Micro-interactions:</strong> Subtle animations that provide feedback and delight users.</li>
  <li><strong>Mobile-First:</strong> Design for phone screens first—most traffic is mobile.</li>
  <li><strong>Performance:</strong> Fast load times are essential for both SEO and conversions.</li>
</ul>

<h3>Best Practices</h3>
<ol>
  <li>Prioritize clarity in headlines and CTAs.</li>
  <li>Use consistent branding and colors.</li>
  <li>A/B test layout and copy.</li>
</ol>
`,
    author: "Design Team",
    date: "Dec 1, 2025",
    readTime: "6 min read",
    category: "Web Design",
    image: "",
  },
  {
    id: 3,
    title: "SEO in 2025: What's Changed and What Still Matters",
    excerpt:
      "Navigate the evolving SEO landscape with insights into algorithm changes, AI, and what your strategy should focus on.",
    content: `<h3>Overview</h3>
<p>SEO is evolving, but core principles remain. Focus on helpful content and measurable user outcomes.</p>

<h3>Key Changes</h3>
<ul>
  <li><strong>AI & Semantic Search:</strong> Write content that answers user intent, not just keywords.</li>
  <li><strong>E-E-A-T:</strong> Demonstrate expertise, experience, authoritativeness, and trustworthiness.</li>
  <li><strong>Core Web Vitals:</strong> Prioritize speed, mobile friendliness, and visual stability.</li>
  <li><strong>Link Quality:</strong> Seek links from reputable, relevant sites.</li>
</ul>

<h3>Actionable Tips</h3>
<ol>
  <li>Audit top-performing pages and expand them with up-to-date information.</li>
  <li>Structure content with headings, short paragraphs, and clear answers.</li>
  <li>Monitor performance and iterate—SEO is a long-term investment.</li>
</ol>`,
    author: "SEO Expert",
    date: "Nov 25, 2025",
    readTime: "8 min read",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e565c479?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "The Complete Guide to Digital Marketing ROI",
    excerpt:
      "Learn how to measure, track, and optimize your digital marketing campaigns for maximum return on investment.",
    content: `<h3>Introduction</h3>
<p>Measuring ROI allows you to prioritize channels that drive real business value.</p>

<h3>Set Clear Metrics</h3>
<p>Decide whether success is leads, revenue, retention, or brand growth.</p>

<h3>Tracking & Attribution</h3>
<ul>
  <li>Use analytics, UTM tags, and conversion events.</li>
  <li>Choose an attribution model that fits your sales cycle (multi-touch is preferred for longer cycles).</li>
</ul>

<h3>ROI Formula</h3>
<p><strong>ROI = (Revenue - Cost) / Cost × 100</strong></p>

<h3>Improve Continuously</h3>
<p>Benchmark against industry standards, test hypotheses, and reallocate budget to high-performing channels.</p>`,
    author: "Marketing Manager",
    date: "Nov 18, 2025",
    readTime: "9 min read",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Email Marketing: Still the Highest ROI Channel in 2025",
    excerpt:
      "Unlock the power of email marketing with strategies to build engaged lists and craft high-converting campaigns.",
    content: `<h3>Why Email Still Wins</h3>
<p><strong>Email</strong> provides direct access to your most engaged audience and consistently delivers top ROI when done right.</p>

<h3>Core Tactics</h3>
<ul>
  <li><strong>Build quality lists:</strong> Use lead magnets and gated content to attract subscribers who care.</li>
  <li><strong>Segment:</strong> Personalize by behavior, purchase history, and stage in funnel.</li>
  <li><strong>Automate:</strong> Welcome sequences, cart recovery, and re-engagement save time and boost conversions.</li>
  <li><strong>Measure:</strong> Track open, CTR, and conversion; iterate on subject lines and content.</li>
</ul>

<p><em>Start with one automation and expand as you measure wins.</em></p>`,
    author: "Email Marketing Specialist",
    date: "Dec 8, 2025",
    readTime: "7 min read",
    category: "Email Marketing",
    image: "",
  },
  {
    id: 6,
    title: "Social Media Strategy: Build Authority and Engagement",
    excerpt:
      "Create a powerful social media presence that establishes you as an industry leader and builds lasting audience relationships.",
    content: `<h3>Overview</h3>
<p>Social media builds authority when used strategically—focus on meaningful engagement over raw follower counts.</p>

<h3>Core Principles</h3>
<ul>
  <li><strong>Choose Platforms:</strong> Prioritize 2-3 platforms where your audience is active.</li>
  <li><strong>Content Pillars:</strong> Define 3–5 themes to maintain consistency.</li>
  <li><strong>80/20 Rule:</strong> 80% useful content, 20% promotion.</li>
  <li><strong>Authentic Engagement:</strong> Reply to comments and participate in conversations.</li>
</ul>

<h3>Practical Steps</h3>
<ol>
  <li>Plan your content calendar a month ahead.</li>
  <li>Repurpose long-form content into short clips, carousels, and posts.</li>
  <li>Analyze metrics weekly and refine based on top performers.</li>
</ol>`,
    author: "Social Media Manager",
    date: "Dec 3, 2025",
    readTime: "6 min read",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
  },
  {
    id: 7,
    title: "Video Marketing: Why Your Business Needs Video Content",
    excerpt:
      "Discover why video is the future of marketing and how to create compelling video content that drives engagement and conversions.",
    content: `<h3>Why Video Matters</h3>
<p>Video drives engagement and can significantly boost conversions when used strategically.</p>

<h3>Effective Video Types</h3>
<ul>
  <li><strong>Product demos:</strong> Show benefits in action.</li>
  <li><strong>Testimonials:</strong> Build trust through customer stories.</li>
  <li><strong>Educational content:</strong> Establish authority and provide value.</li>
</ul>

<h3>Production Tips</h3>
<ol>
  <li>Front-load the value—capture attention in the first 3 seconds.</li>
  <li>Always add captions for accessibility and silent viewers.</li>
  <li>Repurpose long videos into short clips for social channels.</li>
</ol>`,
    author: "Video Content Creator",
    date: "Nov 30, 2025",
    readTime: "8 min read",
    category: "Video Marketing",
    image: "https://images.unsplash.com/photo-1516534775068-bb57a52f4fee?w=600&h=400&fit=crop",
  },
  {
    id: 8,
    title: "Conversion Rate Optimization: A Complete Roadmap",
    excerpt:
      "Learn how to systematically improve your website's conversion rates and turn more visitors into paying customers.",
    content: `<h3>Introduction</h3>
<p>Small improvements in conversion rate compound into meaningful revenue. Follow this roadmap to optimize systematically.</p>

<h3>Steps to Improve CRO</h3>
<ol>
  <li><strong>Establish baseline metrics:</strong> Know your current conversion rate and benchmarks.</li>
  <li><strong>Audit UX:</strong> Remove friction—shorten forms, speed up load times, simplify navigation.</li>
  <li><strong>Clarify value proposition:</strong> Make your headline and benefits obvious within seconds.</li>
  <li><strong>Optimize CTAs:</strong> Test placement, color, and copy for better visibility and persuasion.</li>
  <li><strong>Add trust signals:</strong> Testimonials, guarantees, and clear contact info reduce friction.</li>
  <li><strong>Run A/B tests:</strong> Let data guide design and copy decisions.</li>
  <li><strong>Mobile-first optimization:</strong> Ensure layouts and forms convert well on phones.</li>
</ol>

<p><em>Measure, iterate, and scale what works.</em></p>`,
    author: "CRO Consultant",
    date: "Nov 22, 2025",
    readTime: "10 min read",
    category: "Conversion Optimization",
    image: "",
  },
];


function BlogCard({ post, onClick }) {
  return (
    <motion.div
      className="blog-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onClick={onClick}
    >
      <div className="blog-image">
        <div className="blog-icon">
          {post.category === 'Video' ? (
            <Video size={48} />
          ) : (
            <FileText size={48} />
          )}
        </div>
        <span className="blog-category">{post.category}</span>
      </div>
      <div className="blog-content">
        <h3>{post.title}</h3>
        <p className="blog-excerpt">{post.excerpt}</p>
        <div className="blog-meta">
          <span className="meta-item">
            <Calendar size={16} />
            {post.date}
          </span>
          <span className="meta-item">
            <User size={16} />
            {post.author}
          </span>
          <span className="meta-item read-time">{post.readTime}</span>
        </div>
        <button className="read-more">
          Read Article <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  );
}

function BlogModal({ post, onClose }) {
  return (
    <motion.div
      className="blog-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="blog-modal"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-hero">
          <div className="modal-icon">
            {post.category === 'Video' ? (
              <Video size={64} />
            ) : (
              <FileText size={64} />
            )}
          </div>
        </div>
        <div className="modal-body">
          <span className="modal-category">{post.category}</span>
          <h2>{post.title}</h2>
          <div className="modal-meta">
            <span><Calendar size={16} /> {post.date}</span>
            <span><User size={16} /> {post.author}</span>
            <span>{post.readTime}</span>
          </div>
          <div
            className="modal-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="modal-cta">
            <a href="/contact" className="cta-btn primary">
              Let's Discuss Your Strategy
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="blog-page">
      <motion.div
        className="blog-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Insights & Strategies</h1>
        <p>
          Stay updated with the latest trends, tips, and strategies in digital
          marketing, lead generation, and business growth.
        </p>
      </motion.div>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
            onClick={() => setSelectedPost(post)}
          />
        ))}
      </div>

      {selectedPost && (
        <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}

      <motion.div
        className="blog-newsletter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Stay In The Loop</h2>
        <p>Get weekly insights delivered to your inbox</p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="cta-btn primary">
            Subscribe
          </button>
        </form>
      </motion.div>
    </div>
  );
}
