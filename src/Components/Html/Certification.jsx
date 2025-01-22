import React from 'react';
import CertificationLayout from '../Templates/CertificationLayout';
import '../assert/css/Modules/certification.module.css';
import '../assert/css/certification.css'

export default function Certification() {
   
    const course1 = {
        CourseName : "1. HTML  basic to advance frontend development Course | Udemy  ",
        CompletionDate: "Sept 9, 2022",
        Paragraph: "I completed the HTML Fundamentals course on Udemy, where I gained a solid understanding of HTML basics, including structuring web documents, creating forms, building tables, embedding media, and linking navigation. This course equipped me with the foundational knowledge necessary for web development and laid the groundwork for further exploration into front-end technologies.",
    };

    const course2 = {
        CourseName : "2. CSS basic to advance frontend development Course | Udemy",
        CompletionDate: "May 8, 2023",
        Paragraph: "I successfully completed the Frontend Development course on Udemy, where I gained comprehensive knowledge and practical skills in CSS from basic to advanced levels. Through this course, I deepened my understanding of CSS   fundamentals, including selectors, properties, and layouts, and expanded my proficiency in advanced concepts such as responsive design, Flexbox, and CSS Grid.",
     };

    const course3 = {
        CourseName : "3. HTML,CSS,JAVA complete Course | Udemy  ",
        CompletionDate: "Oct 31, 2023",
        Paragraph: " I successfully completed the Frontend Web Development course on Udemy, which provided a comprehensive overview of HTML, CSS, and JavaScript. Throughout this course, I acquired essential skills in frontend development, including: HTML Fundamentals ,CSS Styling, JavaScript Programming. This course equipped me with the knowledge and expertise to develop modern, user-friendly web interfaces and solidified my foundation in frontend development.",
    };

    const course4 = {
        CourseName : "4. PHP and My SQL backend development Course | Udemy  ",
        CompletionDate: "Sept 9, 2023",
        Paragraph: " I successfully completed the PHP and MySQL Development course on Udemy, where I acquired a solid foundation in server-side scripting with PHP and database management with MySQL. Through this comprehensive course, I learned to design and develop dynamic web applications, create database-driven websites, and implement secure authentication systems using PHP and MySQL.",
    };
    const course5 = {
        CourseName : "5. Fundamental of python Course | Udemy ",
        CompletionDate: "Mar 27, 2022",
        Paragraph: "I successfully completed the Fundamentals of Python course at Imagecon Academy, where I gained a solid understanding of Python programming concepts and principles. Through this comprehensive course, I learned Basic Syntax and Data Types,Control Structures,Functions and Modules, File Handling, Introduction to Object-Oriented Programming (OOP). This course provided me with a strong foundation in Python programming, enabling me to write efficient, maintainable, and scalable code for a wide range of applications.",
     };

    const course6 = {
        CourseName : "6. JAVA Course | Udemy  ",
        CompletionDate: "Aug 20, 2023",
        Paragraph: "I successfully completed the Java Programming course at Optimus, where I gained comprehensive knowledge and practical skills in Java development. Through this course, I learned:Core Java Concepts,Object-Oriented Programming (OOP), Exception Handling, Java Collections Framework, File Handling,Introduction to GUI Development. This course equipped me with the skills and expertise to develop robust and scalable Java applications, laying a solid foundation for my career as a Java developer.",
    };

    const course7 = {
        CourseName : "7. Web Development | GLOBAL GATE   ",
        CompletionDate: "Sept 14, 2023",
        Paragraph: "I successfully completed the Web development Workshop at Global igate, where I gained comprehensive knowledge and practical skills in web development. Through this course, I learned: frontend scripting and backend scripting.This course equipped me with the skills and expertise to develop a web site as atractively and dynamically.",
    };


  return (
        <div className='certificationfull' >
                 <CertificationLayout 
                    certificateDetail = {course1}
                    CertificateLogo = {require('../assert/image/udemy-new-20212512.jpg')}
                 />

                <CertificationLayout 
                    certificateDetail = {course2}
                    CertificateLogo = {require('../assert/image/udemy-new-20212512.jpg')}
                 />

                <CertificationLayout 
                    certificateDetail = {course3}
                    CertificateLogo = {require('../assert/image/udemy-new-20212512.jpg')}
                 />

                <CertificationLayout 
                    certificateDetail = {course4}
                    CertificateLogo = {require('../assert/image/udemy-new-20212512.jpg')}
                 />

                <CertificationLayout 
                    certificateDetail = {course5}
                    CertificateLogo = {require('../assert/image/udemy-new-20212512.jpg')}
                 />

                <CertificationLayout 
                    certificateDetail = {course6}
                    CertificateLogo = {require('../assert/image/udemy-new-20212512.jpg')}
                 />

                <CertificationLayout 
                    certificateDetail = {course7}
                    CertificateLogo = {require('../assert/image/udemy-new-20212512.jpg')}
                 />
        </div>
  )
}
