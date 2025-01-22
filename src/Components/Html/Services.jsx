import { useEffect, useState } from "react";
import React from 'react'

export default function Services() {

  return (
        <div>
                <div id="services1" >
                <h1 className="h1c">Services</h1> <br />
                <div id="services">
                <div className= 'webdevelop-service'>
                        <h3>Web Development service</h3>
                            <p>Creating robust and user-friendly websites that deliver results is my passion. With expertise in the latest 
                            web technologies and a commitment to excellence, I offer a range of web development services tailored to meet 
                            your unique needs.</p>
                        <h4>What I offer </h4>
                        <ul>
                            <li>Frontend Development</li>
                            <li>Backend Development</li>
                            <li>Content Management Systems (CMS)</li>
                            <li>E-commerce Solutions</li>
                        </ul>
                        <h4>Why Choose Me:</h4>
                        <ul>
                            <li><p><b>Custom Solutions:</b> I believe in crafting tailored solutions that align with your business 
                            goals and objectives. Whether you're a small business or a large enterprise, I can create a bespoke web 
                            solution that meets your needs.</p></li>
                            <li><p><b>Continuous Improvement:</b> The web development landscape is constantly evolving, and I stay 
                            up-to-date with the latest trends and technologies. From new frameworks to best practices, I leverage my 
                            knowledge to deliver cutting-edge solutions.</p></li>
                        </ul>
                        <a href="#contact-page"><button className="webdevelop-service-btn">let's work together</button></a>
                </div>
                    <div className="uiuxdesign-service">
                        <h3>Ui/Ux Design Service</h3>
                            <p>Crafting intuitive and visually captivating user interfaces (UI) and seamless user experiences (UX) is at the 
                            heart of what I do. With a keen eye for aesthetics and a deep understanding of user behavior, I specialize in 
                            creating digital experiences that engage and delight users.</p>
                        <h4>What I offer </h4>
                        <ul>
                            <li>UI Design</li>
                            <li>UX Design</li>
                            <li>Responsive Design</li>
                            <li>Prototyping</li>
                        </ul>
                        <h4>Why Choose Me:</h4>
                        <ul>
                            <li><p><b>Attention to Detail:</b> Every pixel matters. I pay meticulous attention to detail, ensuring 
                            every aspect of the design contributes to a cohesive and delightful user experience.</p></li>
                            <li><p><b>Continuous Learning:</b> The field of UI/UX design is constantly evolving, and I am committed to 
                            staying updated with the latest trends, tools, and techniques to deliver cutting-edge solutions.</p></li>
                        </ul>
                        <a href="#contact-page"> <button className="uiuxdesign-service-btn">let's work together</button></a> 
                </div>
                <div className="photoshop-service">
                    <h3>Photoshop Service</h3>
                        <p>Transforming ideas into captivating visuals is my specialty. With expertise in Adobe Photoshop and a keen eye for 
                        detail, I offer a range of professional Photoshop services to enhance your images and bring your vision to life.</p>
                    <h4>What I offer </h4>
                        <ul>
                            <li>Photo Editing</li>
                            <li>Graphic Design</li>
                            <li>Photo Manipulation</li>
                            <li>Product Image Enhancement</li>
                        </ul>
                    <h4>Why Choose Me:</h4>
                        <ul>
                            <li><p><b> Attention to Detail:</b> I believe that every pixel counts. Whether it's a minor touch-up or a complex design project, I pay meticulous attention to detail to ensure the highest quality results.</p></li>
                            <li><p><b> Creativity and Innovation:</b> I'm constantly pushing the boundaries of creativity and innovation. Whether it's experimenting with new techniques or exploring the latest trends in design, I strive to deliver fresh and impactful visuals.</p></li>
                        </ul>
                    <a href="#contact-page"> <button className="photoshop-service-btn">let's work together</button></a>
                </div>
            </div>
                </div>

      </div>
  )
}
