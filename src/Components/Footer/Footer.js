import React from "react";
import "./Footer.css";

const Footer = ()=>{
    return(
        <footer>
            <span>Copyright &copy;2024</span>
            <div className="social-links">
                <a href="https://www.facebook.com/EmekaJudeOkonkwo1">
                    <i className="fa-brands fa-facebook"></i>
                     
                </a>
                <a href="https://www.instagram.com/official_judey/">
                    <i className="fa-brands fa-instagram"></i>
                     
                </a>
                <a href="https://www.linkedin.com/in/emeka-jude-okonkwo-certified-google-digital-marketing-e-commerce-professional/">
                    <i className="fa-brands fa-linkedin"></i>
                </a>

                
            </div>
            <a href="#!" className="footer-logo">Emeka~Jude~Okonkwo*</a>
        </footer>
    )
}
export default Footer;