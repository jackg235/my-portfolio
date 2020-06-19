import React, { Component } from 'react'
import '../static/stylesheets/SideNav.css'
import resume from '../static/files/resume.pdf'
import insta from '../static/images/social media/insta.svg'
import fb from '../static/images/social media/fb.svg'
import linkedin from '../static/images/social media/linkedin.svg'
import twitter from '../static/images/social media/twitter.svg'
import github from '../static/images/github-logo.png'

class SideNav extends Component {
    render() {
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
    } 
}

export default SideNav