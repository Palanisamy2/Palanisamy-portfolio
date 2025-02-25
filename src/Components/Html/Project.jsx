import React from 'react';
import '../assert/css/project.css';
import tourist from '../assert/image/trip-project.png';
import portfolio from '../assert/image/portfolio-project.png';
import calculator from '../assert/image/calculator-project.png';

export default function Project() {
  return (
    <div className="project">
        <div className="proj-1">
            <h2>1. Tourist Places in Tamil Nadu </h2>

            <img src={tourist} alt="tourist project image" />
            
            <div className="project-data-description">
            <h3>Duration : Mar 2024 - Present</h3> 
                    <p>I am developing a website aimed at helping travelers plan their trips by providing comprehensive 
                        information on various tourist places in Tamil Nadu. The website features an interactive map 
                        and a list of tourist attractions, each with detailed information including images and descriptions. 
                        The site is designed with a user-friendly interface to facilitate easy navigation and search, making it
                        accessible for all types of users.
                    </p>
            </div>
            <div className="key-features">
                <h3>Key features :</h3>
                <ul>
                <li><b>Tourist Information:</b> Detailed descriptions, images, and essential information about each destination.</li>
                <li><b>User-friendly Interface:</b>Simplified navigation and search functionality to improve the user experience.</li>
                <li><b>Interactive Map:</b>Displaying key tourist attractions across Tamil Nadu</li>
                </ul>
            </div>
            <div className="tools">
                <h3>Tools:</h3>
                    <ul>
                        <li><b> VS Code: </b>Primary development environment.</li>
                        <li><b>GitHub: </b>  Used for version control and project management.</li>
                    </ul>
            </div>
            <div className="Languages">
            <h3>Languages:</h3>
                <ul>
                    <li><b>HTML, CSS, JavaScript, PHP: </b> Utilized for the website's structure, styling, interactivity, 
                        and server-side scripting.</li>
                </ul>
            </div>
            <button><a href="https://palanisamy2.github.io/Trip-project/trip/index.html"  target="_blank">view project</a></button>
        </div>

        <div className="proj-2">
             <h2>2. My Portfolio </h2>
             <img src={portfolio} alt="" />
             <div className="project-data-description">
                <h3>Duration: Oct 2023 - Dec 2023</h3>

                     <p>I built a personal website to comprehensively showcase my skills, projects, certifications, 
                        and services. The website features a well-structured Home page introducing my background, 
                        detailed sections for Skills, Projects, Certifications, and Services, and a Contact form to 
                        facilitate communication with potential clients and employers. Each section is designed to 
                        provide a clear and user-friendly overview of my capabilities as a web developer.
                     </p>
              </div>
              <div className="key-features">
                 <h3>Key features :</h3>
                  <ul>
                    <li><b>Home Page:</b> A welcoming introduction with a summary of my profile.</li>
                    <li><b>Skills Section: </b>Detailed list of my technical proficiencies. </li>
                    <li><b>Projects Section: </b>Overview of the projects I have worked on, including technologies used</li>
                    <li><b>Certifications Section: </b> Displaying my achievements and certifications.</li>
                    <li><b>Services Section: </b> Highlighting the services I offer as a web developer.</li>
                    <li><b> Contact Form: </b> For potential employers or clients to easily get in touch.
                    </li>
                  </ul>
              </div>
              <div className="tools">
                 <h3>Tools:</h3>
                     <ul>
                         <li><b> VS Code: </b>Primary development environment.</li>
                         <li><b>GitHub: </b>  Used for version control and project management.</li>
                     </ul>
              </div>
              <div className="Languages">
                <h3>Languages:</h3>
                    <ul>
                        <li><b>HTML, CSS, JavaScript, PHP: </b> Utilized for the website's structure, styling, interactivity, 
                            and server-side scripting.</li>
                    </ul>
             </div>
             <button><a href="https://palanisamy2.github.io/palani-portfolio/portfolio-palanisamy/index.html"  target="_blank">view project</a></button>
         </div>


         <div className="proj-2">
            <h2>3. Mini Project – Calculator </h2>
            <img src={calculator} alt="" />
            <div className="project-data-description">
               <h3>Duration: Mar 2024 - Jun 2024</h3>
                    <p> Developed a fully functional calculator capable of handling basic arithmetic operations such as 
                        addition, subtraction, multiplication, and division. The calculator features a responsive user 
                        interface, providing seamless interaction across various devices. Additionally, error handling 
                        mechanisms were implemented to ensure that users are informed of invalid inputs, such as division 
                        by zero. The project was designed with a clear, intuitive layout to enhance the user experience.
                    </p>
             </div>
             <div className="key-features">
                <h3>Key features :</h3>
                 <ul>
                   <li>Responsive design for mobile and desktop devices.</li>
                   <li>Real-time calculation updates as numbers and operations are inputted. </li>
                   <li>Error handling for invalid inputs, such as division by zero.</li>
                   <li>Clean and intuitive user interface for ease of use.</li>
                   <li>Cross-browser compatibility ensuring consistent performance.</li>
                 </ul>
             </div>
             <div className="tools">
                <h3>Tools:</h3>
                    <ul>
                        <li><b> VS Code: </b>Primary development environment.</li>
                        <li><b>GitHub: </b>  Used for version control and project management.</li>
                    </ul>
             </div>
             <div className="Languages">
               <h3>Languages:</h3>
                   <ul>
                       <li> CSS for styling the interface, JavaScript for handling the calculator’s logic and user interactions.</li>
                   </ul>
            </div>
            <button><a href="https://palanisamy2.github.io/claculator-js/calculator/index.html"  target="_blank">view project</a></button>
        </div>
        <br />
    </div>

  )
}
