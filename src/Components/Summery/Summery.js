import React from "react";
import "./Summery.css";


const Summery = ()=>{
    return(
        <section id="summery" data-aos="fade-right">
            <div className="summery-heading">
                <strong>My Skills</strong>
                <h2>E-commerce Management (WooCommerce, Magento, Shopify)</h2>
                <h2>Artificial Intelligence</h2>
                <h2>Payment gateway integration</h2>
                <h2>Web Performance Optimization</h2>
                <h2>SEO & SEM (Keyword research, On-Page & Off-Page SEO, Google Ads & Bing Ads, PPC Campaign, Google Analytics, SEMrush)</h2>
                <h2>Social media marketing (platform-specific strategies for Facebook, Instagram, Twitter, LinkedIn, etc.)</h2>
                <h2>Email marketing (MailChimp, Constant Contact, Brevo)</h2>
                <h2>A/B testing</h2>
                <h2>Product listings and optimization</h2>
                <h2>Inventory management</h2>
                <h2>Data-driven decision-making</h2>
                <h2>Strategic planning</h2>
                <h2>Team leadership</h2>
                <h2>Mentoring and coaching</h2>
                {/* <h2>Cross-Browser Compatibility</h2>
                <h2>Testing and Debugging</h2>
                <h2>SEO Basics</h2>
                <h2>Communication</h2>
                <h2>Collaboration</h2> */}
                <a href="https://drive.google.com/file/d/1b8AoerokBaJUCttnL4EywLZXTMCWqXoM/view" download className="btn-link"> Get CV <i className="fa-solid fa-download"></i></a>

            </div>
            <div className="summery-details" data-aos="fade-left">
                <p>In summary, I bring a multifaceted skill sets in digital marketing, e-commerce management, and software engineering.</p>
                <p>These multifaceted skill sets makes me a valuable asset in today’s dynamic digital landscape.</p>
                {/* <p>Familiarity with version control systems like Git to collaborate effectively with other team members and manage codebase.</p>
                <p>Knowledge of techniques to optimize website speed and performance, including minification, lazy loading, and caching.</p>
                <p>Strong communication skills and ability to work collaboratively with designers, developers, and other stakeholders.</p>
                <p>Proficiency in testing, identifying, and fixing bugs and issues to ensure a seamless user experience.</p>
                <p>Understanding of basic SEO principles and techniques to optimize web content for search engines.</p>
                <p>Keeping up with industry trends, new tools, and technologies to continuously improve skills and stay relevant.</p>
                <p>Clearly articulating design and development concepts and decisions to team members and clients.</p> */}
            </div>

        </section>

    )
}
export default Summery;