import React from "react";
import "./Carrer.css";



const Carrer = () =>{

    const Carrer = [
        {
            title: "AI Augmented Professional Development",
            name: "ALX Africa",
            year: "2024"
        },
        {
            title: "Brand Management",
            name: "University of London/Coursera",
            year: "2024"
        },
        {
            title: "Fullstack Software Engineering",
            name: "ALX Africa",
            year: "2023"
        },
        {
            title: "Google Digital & E-commerce Professional",
            name: "Google/Coursera",
            year: "2023"
        },
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
        <section id="Carrer">
            <div className="Carrer-education">
                <div className="Carrer" data-aos="fade-right">
                    <h3>Certifications</h3>
                    <div className="c-b-container">
                        {
                            Carrer.map((Carrer, index)=>(
                                <div className="c-box" key={index}>
                                    <h4>{Carrer.title}</h4>
                                    <strong>{Carrer.name}</strong>
                                    <span>{Carrer.year}</span>

                                </div>

                            ))
                        } 

                    </div>


                </div>
                <div className="Carrer edu" data-aos="fade-left">
                    <h3>Education</h3>
                    <div className="c-b-container">
                        {
                            educations.map((Carrer, index)=>(
                                <div className="c-box" key={index}>
                                    <h4>{Carrer.title}</h4>
                                    <strong>{Carrer.name}</strong>
                                    <span>{Carrer.year}</span>

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
export default Carrer;
