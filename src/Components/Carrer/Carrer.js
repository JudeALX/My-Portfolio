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
            title: "Brand Management: Aligning Business, Brand and Behaviour",
            name: "University of London/Coursera",
            year: "2024"
        },
        {
            title: "Fullstack Software Engineering",
            name: "ALX Africa",
            year: "2023"
        },
        {
            title: "Google Digital Marketing & E-commerce Professional",
            name: "Google/Coursera",
            year: "2023"
        },
    ]
    const educations = [
        {
            title: "University of Nigeria",
            name: "M.Sc. Banking and Finance",
            year: "2023"
        },
        {
            title: "Godfrey Okoye Univeristy",
            name: "M.Sc. Banking and Finance (Distinction)",
            year: "2019"
        },
        {
            title: "Godfrey Okoye University",
            name: "B.Sc. Banking and Finance (First Class Honours)",
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
                    <a href="https://drive.google.com/file/d/1FbW_xLzFsfQQh-Bjt-Rbv5Z3rUwBE2qR/view?usp=sharing" download className="btn-link">
                        Click to view my CV <i className="fa-solid fa-download"></i>
                    </a>

                </div>
            
        </section>
    )
}
export default Carrer;
