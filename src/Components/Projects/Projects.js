
import React from 'react';



import "./Projects.css";
import Project1 from "../../assets/images/project1.jpg";
import Project2 from "../../assets/images/project2.jpg";
import Project3 from "../../assets/images/project3.jpg";
import Project4 from "../../assets/images/project4.jpg";
import Project5 from "../../assets/images/project5.jpg";
import Project6 from "../../assets/images/project6.jpg";
import Project7 from "../../assets/images/project7.jpg";
import Project8 from "../../assets/images/project8.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';


const Projects = () =>{

    const data = [
        {
            src: Project1,
            url: "https://lushhairafrica.com/home-nigeria/"
        },
        {
            src: Project2,
            url: "https://bebeautifulhair.com//"
        },
        {
            src: Project3,
            url: "https://cotedivoire.lushhairafrica.com/"
        },
        {
            src: Project4,
            url: "https://ghana.lushhairafrica.com/"
        },
        {
            src: Project5,
            url: "https://lushhairafrica.com/"
        },
        {
            src: Project6,
            url: "https://mgtravelandsafaris.com/"
        },
        {
            src: Project7,
            url: "https://tezzasolutions.com/"
        },
        {
            src: Project8,
            url: "https://emeka-rho.vercel.app/"
        },
    ]
    return(
        <section id="projects">
            <div className="project-heading">
                <h3>Recent Projects</h3>
                <p>*Some are group project while some are personal project, click on it to take you to the website*</p>
                
            </div>

            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        //   768: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //   },
        //   1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 50,
        //   },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {
            data.map(project => (
                <SwiperSlide key={project.src}>
                    <div className="project-box">
                        <a href={project.url}>
                            <img src={project.src} alt="project"/>
                            <div className="p-overlayer">
                                <strong>Outserved Reports</strong>

                            </div>

                        </a>

                    </div>
                    
                </SwiperSlide>

            ))
        }
        
       
      </Swiper>


            <div className="github-link">
                <a href="https://github.com/JudeALX" className="btn-link">
                Check out my Github <i className="fa-brands fa-github"></i>
                </a>

            </div>
            
        </section>
    )
}
export default Projects; 