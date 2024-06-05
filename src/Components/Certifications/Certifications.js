import React from "react";
import "./Certifications.css";



const Certifications = () =>{

    const certifications = [
        {
            title: "AI Augmented Professional Development",
            name: "ALX Career Essentials",
            year: "2024"
        },
        {
            title: "Google Digital & E-commerce Professional Certification",
            name: "Google/Coursera",
            year: "2023"
        },
        {
            title: "Fullstack Software Engineering",
            name: "ALX Africa",
            year: "2023"
        },
        {
            title: "Brand Management",
            name: "Coursera",
            year: "2024"
        }
    ]
    const educations = [
        {
            title: "University of Nigeria",
            name: "M.Sc. Banking anf Finance",
            year: "2023"
        },
        {
            title: "Godfrey Okoye Univeristy",
            name: "M.Sc. Banking and Finance",
            year: "2019"
        },
        {
            title: "Godfrey Okoye University",
            name: "B.Sc. Banking and Finance",
            year: "2014"
        }
    ]
    return (
        <section id="certifications">
            <div className="certifications-education">
                <div className="certifications" data-aos="fade-right">
                    <h3>certifications</h3>
                    <div className="c-b-container">
                        {
                            certifications.map((certifications, index)=>(
                                <div className="c-box" key={index}>
                                    <h4>{certifications.title}</h4>
                                    <strong>{certifications.name}</strong>
                                    <span>{certifications.year}</span>

                                </div>

                            ))
                        } 

                    </div>


                </div>
                <div className="certifications edu" data-aos="fade-left">
                    <h3>Education</h3>
                    <div className="c-b-container">
                        {
                            educations.map((certifications, index)=>(
                                <div className="c-box" key={index}>
                                    <h4>{certifications.title}</h4>
                                    <strong>{certifications.name}</strong>
                                    <span>{certifications.year}</span>

                                </div>

                            ))
                        } 

                    </div>


                </div>
                
            </div>
            <div className="btn-c">
                    <a href="https://drive.google.com/file/d/1b8AoerokBaJUCttnL4EywLZXTMCWqXoM/view" download className="btn-link">
                        Get CV <i className="fa-solid fa-download"></i>
                    </a>

                </div>
            
        </section>
    )
}
export default Certifications;