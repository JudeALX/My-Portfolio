import React from "react";
import "./Home.css";
import emeka from "../../assets/images/emeka.svg";


const Home = ()=> {
    return(
       <section id="home">
        <div className="home-text" data-aos="fade-down">
            <strong>Hello, I'm</strong>
            <h1>Emeka Jude Okonkwo</h1>
            <p> A seasoned software engineer with extensive expertise in e-commerce, digital marketing, and  
                the use of AI tools. I have pioneered, developed and deployed scalable, secure, and user-friendly websites and e-commerce stores,   
                enhancing online shopping experiences and optimizing business operations. My expertise in digital marketing and data analytics helps me to 
                drives traffic, boost conversion rates, and enhances customer satisfaction. Additionally, my proficiency in the use of AI tools allows me 
                to integrate artificial intelligence tools into daily business operations, leveraging automation, personalization, 
                and data-driven insights to enhance efficiency and decision-making processes. This unique blend of skills enables 
                me to lead innovative projects from conception to completion, creating exceptional digital experiences that drive business success.
            </p>
            <a href="#summery" className="btn-link">Scroll Down</a>

        </div>
        <div className="home-img" data-aos="fade-up">
            <div className="img-box">
                <img src={emeka} alt="emeka"/>
                <h2>Emeka Okonkwo <br/> <br/><span> E-commerce Expert | Digital Marketer | FullStack Developer </span></h2>
                <div className="social">
                    <a href="https://www.facebook.com/EmekaJudeOkonkwo1">
                    <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/emeka-jude-okonkwo-certified-google-digital-marketing-e-commerce-professional/">
                    <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/JudeALX">
                    <i className="fa-brands fa-github"></i>
                    </a>

                </div>
                <a href="mailto:okonkwoemekajude@gmail.com" className="hire-me">Hire me</a>

            </div>
            
        </div>

       </section>


    )
}
export default Home;