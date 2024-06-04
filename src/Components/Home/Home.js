import React from "react";
import "./Home.css";
import emeka from "../../assets/images/emeka.svg";


const Home = ()=> {
    return(
       <section id="home">
        <div className="home-text" data-aos="fade-down">
            <strong>Hello, I'm</strong>
            <h1>Emeka Okonkwo</h1>
            <p> A seasoned software engineer with extensive expertise in e-commerce, digital marketing, and 
                finance. With a diverse skill set and a hands-on approach, I have successfully developed and  
                deployed various e-commerce websites and platforms. My technical proficiency in multiple 
                programming languages, frameworks, and tools ensures the delivery of scalable, secure, and user-friendly
                digital solutions. 
                As an e-commerce expert, I have led numerous projects that enhance online shopping experiences
                and optimize business operations. I specialize in strategies that drive traffic, increase conversion
                rates, and boost customer satisfaction. Additionally, my deep understanding of digital marketing
                allows me to create comprehensive campaigns using SEO, SEM, content marketing, social media,
                email campaigns, and data analytics to maximize ROI.
                My strong foundation in finance brings a strategic and analytical perspective to my work, ensuring
                initiatives are financially viable and sustainable. I excel in budgeting, financial planning, and 
                performance analysis, making informed decisions that drive profitable growth. This unique blend of 
                skills positions me as a versatile professional capable of leading innovative projects from conception 
                to completion, creating exceptional digital experiences that drive business success.    
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