import React from "react";
import "./About.css";


const About = ()=>{
    return(
        <section id="about"> 
        <div className="about-container">
            <div className="about-heading" data-aos="flip-left">
                <strong> About me</strong>
                <h3> I am passionate about using digital solutions to solve business problems </h3>
                <a href="tel:+2347035087938" className="btn-link">
                    +2347035087938 <i className="fa-solid fa-phone-flip"></i>
                </a>
            </div> 
            <div className="about-details" data-aos="flip-right"> 
            <p>  A very dedicated E-commerce professional with a proven track record in pioneering and 
                optimizing online retail stores operations. Specializing in strategic planning, inventory management, 
                and digital marketing. I have consistently propelled revenue growth for diverse businesses e.g. 
                transportation, multi-brand-fashion, financial service, and FMCG. Leveraging my technical expertise in software 
                integration, analytics, and customer experience, I thrive in enhancing operational efficiency.
                </p>
            
            </div>

        </div>

        </section>
    )
}
export default About;