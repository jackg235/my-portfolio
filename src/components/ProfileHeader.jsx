import React, { Component} from 'react'
import '../static/stylesheets/ProfileHeader.css'
import headshot from '../static/images/headshot-circle.png'
import wall from '../static/images/china.PNG'

class ProfileHeader extends Component {

    render() {
        return (
            <div className='header-wrapper'>
                <img className='wall'  src= {wall} />
                <h1 className='name'>Hi, I'm Jack.</h1>
            </div>
        )
    }
}

export default ProfileHeader