import React from 'react'

export default function Footer() {
  return (
    <div className="footer"> 
    <div className="footer-about">
       <h5>About </h5>
       <a href="skills.html">Skills</a> <br /> 
       <a href="project.html">Project & Experience</a> <br /> 
       <a href="certification.html">Certification</a>  <br />
        <a href="extra.html">Extra Activities</a> 
    </div>
    <div className="footer-services">
       <h5>Services</h5> 
       <a href="#services">Web development service</a>  <br />
        <a href="#services"> Ui/Ux design service </a><br />
        <a href="#services">Photoshop service</a>  
    </div>
    <div className="footer-contact">
       <h5> Contact </h5>
        <a href="#">Whatsapp</a>  <br />
       <a href="#">Gmail</a>  <br />
        <a href="https://www.linkedin.com/in/palanisamy-m-23a5a72b7/">linkedin</a>  <br /> 
        <a href="#">Twitter</a>  <br />  
    </div>
    <div className="footer-all">
        <a href="#home">Home</a>  <br />
        <a href="#about">About </a>  <br /> 
        <a href="#service">Services</a>  <br />
         <a href="#contact-page">Contact me</a>  <br /> 
         <a href="#contact-page">Footer</a>  
     </div>
    <div className="footer-portfolio">
        <a  href="#home">Portfolio</a> 
    </div>
 </div>
  )
}
