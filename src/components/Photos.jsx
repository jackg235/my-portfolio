import React, { Component } from 'react'
import Navbar from './Navbar'
import '../static/stylesheets/Photos.css'
import lake_powell from '../static/images/photos/IMG_3944.jpg'
import bryce from '../static/images/photos/IMG_0981.JPG'
import renna_prom from '../static/images/photos/FullSizeRender.jpg'
import sd from '../static/images/photos/IMG_0957.JPG'
import me_lol from '../static/images/photos/IMG_1410.JPG'
import graduation from '../static/images/photos/IMG_1917.jpg'
import birds from '../static/images/photos/IMG_3040.JPG'
import china from '../static/images/photos/IMG_3379.JPG'
import china2 from '../static/images/photos/IMG_3484.JPG'
import shanghai from '../static/images/photos/IMG_3487.JPG'
import eiffel from '../static/images/photos/IMG_2228.jpg'
import riverton from '../static/images/photos/IMG_4569.JPG'
import barharbor from '../static/images/photos/IMG_4702.jpg'

class Photos extends Component {
    render() {
        return(
            <div className='photos'>
                < Navbar />
                <div className='container'>
                    <h1 className='header'>
                        Photos
                    </h1>
                    <p>
                        Here are some cool photos I've taken (or starred in) over the years. Some of the 
                        interesting places I've been and some of the people I love. 
                    </p>
                    <div class="row"> 
                        <div class="column">
                            <figure >
                                <img className='img' src= {lake_powell} />
                                <figcaption>Lake Powell, Arizona • July 2017</figcaption>
                            </figure>
                            <figure >
                                <img className='img' src= {bryce} />
                                <figcaption>Bryce, Utah • July 2017</figcaption>
                            </figure>
                            <figure >
                                <img className='img' src= {china2} />
                                <figcaption>Beijing, China • March 2018</figcaption>
                            </figure>
                            <figure >
                                <img className='img' src= {shanghai} />
                                <figcaption>Shanghai, China • March 2018</figcaption>
                            </figure>
                            <figure >
                                <img className='img' src= {riverton} />
                                <figcaption>Riverton, NJ • July 2018</figcaption>
                            </figure>
                        </div>
                        <div class="column">
                            <figure >
                                <img className='img' src= {renna_prom} />
                                <figcaption>Prom • May 2017</figcaption>
                            </figure>
                            <figure >
                                <img className='img' src= {sd} />
                                <figcaption>La Jolla, California • May 2017</figcaption>
                            </figure>
                            <figure >
                                <img className='img' src= {graduation} />
                                <figcaption>Moorestown HS Graduation • May 2017</figcaption>
                            </figure>
                            <figure >
                                <img className='img' src= {birds} />
                                <figcaption>Minneapolis, MN • Feb 2018</figcaption>
                            </figure>
                            <figure >
                                <img className='img' src= {eiffel} />
                                <figcaption>Paris, France • June 2018</figcaption>
                            </figure>
                            <figure >
                                <img className='img' src= {barharbor} />
                                <figcaption> Bar Harbor, Maine • Aug 2018</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Photos