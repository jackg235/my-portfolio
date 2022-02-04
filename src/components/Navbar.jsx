import "bootstrap/js/src/collapse.js";
import React from 'react'
import '../static/stylesheets/Navbar.css'
import resume from '../static/files/resume.pdf'
import insta from '../static/images/social media/insta.svg'
import fb from '../static/images/social media/fb.svg'
import linkedin from '../static/images/social media/linkedin.svg'
import twitter from '../static/images/social media/twitter.svg'
import github from '../static/images/social media/github.svg'

class Navbar extends React.Component {

    render() {
        return (
                <nav className="navbar navbar-expand-md navbar-light bg-light ">
                    <p className='navbar-brand brand'> <a className='brand-name' href='/'>Jack Goettle</a></p>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav" >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link home-nav" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link projects-nav" href="/projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  href={resume} target = "_blank" rel="noopener noreferrer">Resume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  href="mailto:jackgoettle23@gmail.com">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" target = "_blank" rel="noopener noreferrer" href="/zoom">Zoom</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link wordle-nav" href="/wordle">Wordle</a>
                            </li>
                        </ul>
                        <ul className='navbar-nav social-part flex-row ml-md-auto d-md-flex'>

                            <li>
                                <a className='fa' href='https://www.instagram.com/jackgoettle' target="_blank" rel="noopener noreferrer">
                                    <img src={insta} className='logo-nav' alt=''/>
                                </a>
                            </li>
                            <li>
                                <a className = 'fa' href='https://www.linkedin.com/in/jack-goettle/' target="_blank" rel="noopener noreferrer">
                                    <img src={linkedin} className='logo-nav' alt=''/>
                                </a>
                            </li>
                            <li>
                                <a className = 'fa' href='https://www.facebook.com/profile.php?id=100009383992707' target="_blank" rel="noopener noreferrer">
                                    <img src={fb} className='logo-nav' alt=''/>
                                </a>
                            </li>
                            <li>
                                <a className = 'fa' href='https://twitter.com/jackgoettle' target="_blank" rel="noopener noreferrer">
                                    <img src={twitter} className='logo-nav' alt=''/>
                                </a>
                            </li>
                            <li>
                                <a className = 'git' href='https://github.com/jackg235' target="_blank" rel="noopener noreferrer">
                                    <img src={github} className='logo-git' alt=''/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
        )

    }
}
export default Navbar