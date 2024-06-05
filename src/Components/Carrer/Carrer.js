import React from "react";
import "./Carrer.css";
// import "./Carrer"


const Carrer = () =>{

    const carrers = [
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
        <section id="carrer">
            <div className="carrer-education">
                <div className="carrer" data-aos="fade-right">
                    <h3>Carrer</h3>
                    <div className="c-b-container">
                        {
                            carrers.map((carrer, index)=>(
                                <div className="c-box" key={index}>
                                    <h4>{carrer.title}</h4>
                                    <strong>{carrer.name}</strong>
                                    <span>{carrer.year}</span>

                                </div>

                            ))
                        } 

                    </div>


                </div>
                <div className="carrer edu" data-aos="fade-left">
                    <h3>Education</h3>
                    <div className="c-b-container">
                        {
                            educations.map((carrer, index)=>(
                                <div className="c-box" key={index}>
                                    <h4>{carrer.title}</h4>
                                    <strong>{carrer.name}</strong>
                                    <span>{carrer.year}</span>

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
