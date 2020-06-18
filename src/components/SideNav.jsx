import React, { Component } from 'react'
import '../static/stylesheets/SideNav.css'
import resume from '../static/files/resume.pdf'
import insta from '../static/images/social media/insta.svg'
import fb from '../static/images/social media/fb.svg'
import linkedin from '../static/images/social media/linkedin.svg'
import twitter from '../static/images/social media/twitter.svg'

class SideNav extends Component {
 /*   render() {
        return(
            <div className="sidenav">
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                    <a href="/thoughts">Thoughts</a>
                    <a href="/photos">Photos</a>
                    <a href={resume} target = "_blank">Resume</a>
                    <a href="mailto:jackgoettle23@gmail.com">Contact</a>
            </div>
        )
    } */

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm   navbar-light bg-light">
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link"  href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/projects">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"  href="/thoughts">Thoughts</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"  href="/photos">Photos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"  href={resume} target = "_blank">Resume</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"  href="mailto:jackgoettle23@gmail.com">Contact</a>
                            </li>
                        </ul>
                        <div class="social-part">
                            <ul class='navbar-nav mr-auto mt-2 mt-lg-0'>
                                <li>
                                    <a className='fa' href='https://www.instagram.com/jackgoettle' target="_blank">
                                        <img src={insta} className='logo'/>
                                    </a>
                                </li>
                                <li>
                                    <a className = 'fa' href='https://www.linkedin.com/in/jack-goettle/' target="_blank">
                                        <img src={linkedin} className='logo'/>
                                    </a>
                                </li>
                                <li>
                                    <a className = 'fa' href='https://www.facebook.com/profile.php?id=100009383992707' target="_blank">
                                        <img src={fb} className='logo'/>
                                    </a>
                                </li>
                                <li>
                                    <a className = 'fa' href='https://www.linkedin.com/in/jack-goettle/' target="_blank">
                                        <img src={linkedin} className='logo'/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default SideNav