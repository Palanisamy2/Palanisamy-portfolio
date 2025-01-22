import React from 'react';
import { useState } from 'react';
import Certification from './Certification';
import Skills from './Skills';
import Extra from './Extra';
import Project from './Project';
import EducationLayout from '../Templates/EducationLayout';
import '../assert/css/Modules/Education.module.css'

export default function About() {
    const [visibleComponent, setVisibleComponent] = useState("");

    const displayComponent = (component) => {
      setVisibleComponent(component);
    };  

    const UGdetails = {    
      Board: "Anna University",
      collegename: "R P Sarathy Institute of Technology, Salem",
      Percentage: "81.7%",
      StartYear: "2021",
      EndYear: "2025",
      course : "B.tech - Information Technology"
    };
  
    const schoolDetails = {
      Board: "State Board",
      collegename: "SRV Matric Higher Secondary School, Salem",
      Percentage: "87.64%",
      StartYear: "2020",
      EndYear: "2021",
      course : "Higher Secondary"
    };

    const schoolDetails2 = {
      Board: "State Board",
      collegename: "SRV Matric Higher Secondary School, Salem",
      Percentage: "88%",
      StartYear: "2019",
      EndYear: "2018",
      course : "10th Standard"
    };

  return (
    
    <div className ="aboutp">
         <div id="about">
            <div className="aboutme">
                <div className="about-intro">
                    <h1 id="intro">Introduction</h1>
                    <p id="intro-para">
                    Hello, I'm Palanisamy M, a budding web developer with a passion for crafting engaging 
                    user experiences. I am pursuing B.Tech-IT in RPSIT with specializing in web development and junior UI/UX design, 
                    I bring fresh perspectives and a hunger for learning to the table. I'm excited about the intersection of technology 
                    and creativity, and I'm eager to contribute my skills to projects that push boundaries and delight users. With a 
                    foundation in HTML, CSS, JavaScript, ReactJS, PHP, MySQL, Adobe illustrater, Adobe Photoshop, Figma, I'm ready to tackle 
                    new challenges and grow alongside dynamic teams. I invite you to explore my portfolio and witness my dedication to 
                    creating intuitive, visually appealing digital experiences. Let's collaborate to build something extraordinary!</p>
                </div>
                <div className='Educationhead'>
                  <h1 id="intro">Education Details</h1>
                </div>
                <div className="myphoto">
                    <img className="myphoto-palani" src={require('../assert/image/myy.jpg')} />
                    <div className='resumeDown'>
                      <button>Reume</button>
                    </div>
                </div>
                <div className="about-education">
                    
                    <EducationLayout
                        educationDetails = {UGdetails}
                        logoSrc={require('../assert/image/rpsit logo.jpeg')}
                      />
                      <EducationLayout
                        educationDetails={schoolDetails}
                        logoSrc={require('../assert/image/SRV-logo.jpeg')}
                      />
                      <EducationLayout
                        educationDetails={schoolDetails2}
                        logoSrc={require('../assert/image/SRV-logo.jpeg')}
                      />
                  </div>
                <div className="about-deatils">
                    <div className="btn1-skill">
                         <button onClick={() => displayComponent("skills")} className="btn1" target="_blank" >skills</button>
                    </div>
                    <div className="btn2-project">
                         <button onClick={() => displayComponent("projects")} className="btn2" target="_blank" >Projects</button> 
                    </div>
                    <div className="btn3-certification">
                         <button  onClick={() => displayComponent("certifications")} className="btn3"  target="_blank">Certification</button> 
                    </div>
                    <div className="btn4-extra">
                         <button onClick={() => displayComponent("extras")}  className="btn4"  target="_blank" >Extra Activities</button>
                    </div>
                </div>        
            </div>
      </div>
              
      <div className="dynamic-content">
        {visibleComponent === "skills" && <Skills />}
        {visibleComponent === "projects" && <Project />}
        {visibleComponent === "certifications" && <Certification />}
        {visibleComponent === "extras" && <Extra />}
      </div>
    </div>

  );
}
