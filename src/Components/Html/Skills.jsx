import React from 'react';
import '../assert/css/skills.css';
import java from '../assert/image/java-logo1.png';
import C from '../assert/image/download.jpeg';
import Html from '../assert/image/html-5_5968267.png';
import Css from '../assert/image/css-3_5968242.png';
import Js from '../assert/image/js_5968292.png';
import MySQL from '../assert/image/Mysql-image.png';
import Reacti from '../assert/image/images.png';
import Php from '../assert/image/images (1).png';
import Photoshop from '../assert/image/adobe-photoshop-logo-0.png';
import Illustrator from '../assert/image/Illustrator-Logo.png';
import Figma from '../assert/image/png-transparent-figma-app-logo-tech-companies-thumbnail.png';
import Adobexd from '../assert/image/images (2).png';
import problemsolving from '../assert/image/png-clipart-computer-icons-problem-solving-the-noun-project-symbol-miscellaneous-text.png';
import p2 from '../assert/image/images (3).png';
import p3 from '../assert/image/images (4).png';
import p4 from '../assert/image/images (5).png';

export default function Skills() {
    
  return (
    <div className="skills">

            <div className="pl-skill">
                <h3>Programming Language</h3>
                <ul>
                    <li>Core JAVA</li>
                    <li>C </li>
                    <li>SQL</li>
                </ul>
             
                    <img className = "javaImage" src={java} alt="Java-icon" />
               
            
                    <img className = "CImage" src={C} alt="C-icon" />
                 
            </div>
            <div className="wdt-skill">
                <h3>Web Development tools</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS </li>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>React JS</li>
                    <li>My SQL</li>
                </ul>
            
                    <img className = "HTMLImage" src={Html} alt="HTML-icon" />
                 
            
                    <img className = "CSSImage" src={Css} alt="CSS-icon" />
                
            
                    <img className = "jsImage" src={Js} alt="JS-icon" />
                
            
                    <img className = "MysqlImage" src={MySQL} alt="MySql-icon" />
                
            
                    <img className = "ReactjsImage" src={Reacti}  alt="Reactjs-icon" />
                
            
                    <img className = "PhpImage" src={Php} alt="PHP-icon" />
            </div>
            <div className="uiux-skill">
                <h3>Ui/Ux Design tools</h3>
                <ul>
                    <li>Adobe photoshop</li>
                    <li>Adobe Illustrarter</li>
                    <li>coraldraw</li>
                    <li>Adobe XD</li>
                    <li>figma</li>
                </ul>
            
                    <img className = "PhotoshopImage" src={Photoshop} alt="Photoshop-icon" />
                 
            
                    <img className = "IllustratorImage" src={Illustrator} alt="Illustrator-icon" />
                
            
                    <img className = "AdobeXDImage" src={Adobexd} alt="AdobeXD-icon" />
                 
            
                    <img className = "FigmaImage" src={Figma} alt="Figma-icon" />
                
            </div>
            <div className="pro-skill">
                <h3>Pro skills</h3>
                <ul>
                    <li>Problem solving</li>
                    <li>Critical thinking</li>
                    <li>Adaptability</li>
                    <li>Teamwork and collaboration</li>
                    <li>Communication skil</li>
                </ul>
            
                    <img src={problemsolving} alt="p1" />
                 
            
                    <img src={p2} alt="p1" />
                
            
                    <img src={p3} alt="p1" />
                 
            
                    <img src={p4} alt="p1" />
                
            </div>
        </div>
  )
}
