import React from "react";
import "./Process.css";


const Process = () =>{

    const data = [
        {
            id: "01",
            title: "Digital Marketing Services",
            contents: ["I have managed digital marketing activities for clients across various industries, including logistics, fintech, fashion, and restaurants. My efforts have consistently resulted in increased traffic, leads, and conversion rates."] 
        },
        {
            id: "02",
            title: "E-commerce Website Development and Integration",
            contents: ["Design robust e-commerce platforms that facilitate secure online transactions, effective product displays, and seamless payment gateway integration, ensuring a smooth shopping experience."] 
        },
        {
            id: "03",
            title: "Custom School or Educational Institution Websites",
            contents: ["Draft tailored websites for educational institutions, providing a platform for efficient communication, course management, event promotion, and student engagement"] 
        }
    ]
    return(
        <section id="process" data-aos="fade">
            <div className="process-heading">
                <h3>Projects</h3>
                <div className="process-container">
                    {
                        data.map(process=>(
                            <div className="process-box" key={process.id}>
                                <span>{process.id}</span>
                                <strong>{process.title}</strong>
                                <ul>
                                    {
                                        process.contents.map(content =>(
                                            <li key={content}>{content}</li>
                                        ) )
                                    }
                                </ul>

                            </div>
                        ))
                    }

                </div>

            </div>
        </section>
    )
}
export default Process;