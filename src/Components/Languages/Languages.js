import React from "react";
import "./Languages.css";

const Laguages = ()=>{

    const data = [
        {
            title: "Languages",
            contents: ["Node.js", "JavaScript", "HTML, CSS", "React", "Python", "Etc"]
        },
        {
            title: "Software",
            contents: ["Vscode", "Jupyter", "Notepad++", "Git,GitHub,GitLab", "MySQL", "Trello"]
        }
    ]
    return(
        <section id="languages" data-aos="fade">
            {
                data.map(item => (
                    <div className="languages-box" key={item.title}>
                        <h3>{item.title}</h3> 
                        <ul>
                            {
                                item.contents.map(content => (
                                    <li key={content}>{content}</li>
                                ))
                            }
                        </ul>

                    </div>
                ))
            }

        </section>

    )
}
export default Laguages;