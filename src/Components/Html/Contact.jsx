import React from 'react';
import GmailIcon from '../assert/image/gmail_5968534.png';
import WhatsappIcon from '../assert/image/social_13051741.png';
import LinkedinIcon from '../assert/image/linkedin_3992606.png';
import GithubIcon from '../assert/image/github_5968866.png';

export default function Contact() {
  return (

     <div id="contact-page">
        <h1>Get In Touch</h1>
            <div className="contact-div"><br />
                    <h2>Let's work together</h2>
                <div className="form" >
                    <form action="connect.php" method="post">
                         <label htmlFor="name" className="name">Name
                            <input type="text" className="name-input" name="name" required /><br />
                        </label>
                        <label htmlFor="mobile-number" className="mobile-number">Mobile number
                            <input type="number" className="mobile-number-input" name="mobilenumber" required  /> <br />
                        </label>
                        <label htmlFor="gmail-id" className="gmail-id">Gmail id
                             <input type="email" className="gmail-id-input" name="gmailid" required /> <br/><br/>
                        </label>
                        <label htmlFor="describe" className="describe">Describe
                             <textarea type="text" className="describe-input" name="describe" required></textarea> <br />
                        </label>
                        <button>Submit</button>
                    </form>
                    <h4>(or)</h4>
                    <div className="socialmedia-contact">
                        <a href="#"> <img src={GmailIcon} className="gmail-contact" alt="" /> </a> 
                        <a href="#"> <img src={WhatsappIcon} className="whatsapp-contact" alt="" /> </a>
                        <a href="https://www.linkedin.com/in/palanisamy-m-23a5a72b7/"> <img src={LinkedinIcon} className="linkedin-contact" alt="" /> </a>
                        <a href="https://github.com/Palanisamy2"><img src={GithubIcon} className="github-contact" alt=" " /> </a> 
                    </div>
                </div>    
            </div>   
        </div>
  )
}
