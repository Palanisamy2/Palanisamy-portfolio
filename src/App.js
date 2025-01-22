import './App.css';
import './Components/assert/css/certification.css';
import Home from './Components/Html/Home';
import './Components/assert/css/index.css'
import About from './Components/Html/About';
import Services from './Components/Html/Services';
import Contact from './Components/Html/Contact';
import Footer from './Components/Html/Footer';


function App() {
  return (
          <div className="App">
            <nav className="navbar">
                <div className="logo">
                    <a  href="#home">Portfolio</a> 
                </div>
                <ul className="nav-links">
                  <li><a href="#home">Home</a> </li>
                  <li><a href="#about"> About </a></li>
                  <li><a href="#services1"> Service</a></li>
                  <li><a href="#contact-page">Contact</a></li>
                </ul>
             </nav>
            <Home />
            <About />
            <Services />
            <Contact />
            <Footer />
         </div>
  );
}

export default App;
