import React, { Component } from 'react'
import SideNav from './SideNav'
import pennbook from '../static/images/pennbook.png'
import wellness from '../static/images/wellness.png'
import github from '../static/images/github-logo.png'
import shandy from '../static/images/shandy4u.png'
import amazon from '../static/images/amazon-stars.png'
import hive from '../static/images/hive.svg'
import '../static/stylesheets/Projects.css'
class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: this.projects()
        }
    }
    projectsGenerator = () => {
        return (
            <div>
            {this.state.projects.map(val => 
                <div className="card flex-md-row mb-4 h-md-250" >
                    <div className={val.class}>
                        <div className="card-body media">
                            <div>
                                <h4><b>{val.title}</b></h4>
                                <p>{val.desc}</p>
                                <p><b>Technologies: </b> {val.tech}</p>
                                <a href={val.git_link}>
                                    <img class='github-logo' src={github} />
                                </a>
                                </div>
                            <img src= {val.image} class= {val.image_class} alt=''></img>
                        </div>
                    </div>
                </div>
            )}
            </div>
        );
    }
    render() {
        return(
            <div className='projects'>
                < SideNav />
                <div className='container'>
                    <h1 className='header'>
                        Projects
                    </h1>
                    {this.projectsGenerator()}
                </div>
            </div>
        )
    }

    projects() {
        return [
            {
                title : 'Pennbook',
                desc : `Final project for NETS 212: Scalable Cloud Computing. A bootstrapped Facebook clone
                equipped with messenger and hosted on AWS.`,
                tech : `Node, React, CSS, JavaScript, Amazon DynamoDB, Map Reduce, Socket.io`,
                image : pennbook,
                git_link : 'https://github.com/jackg235/',
                class : 'pennbook',
                image_class : 'project-photo'
            }, 
            {
                title : 'Wellness Buddy',
                desc : `An Android app for connecting students with health and wellness resources at
                The University of Pennsylvania. Includes an administrative web application and incorporates
                Google Maps API and Spotify API.`,
                tech : `MongoDB, Android, Node, Express, EJS, CSS, HTML`,
                git_link : 'https://github.com/jackg235/cis350-wellness-buddy',
                image : wellness,
                class : 'wellness',
                image_class : 'phone-photo'
            },
            {
                title : 'Shandy4u',
                desc : `Shandy4u is a both a cellar and a bartender - it allows you to search for and save all your
                favorite beers and it uses k-clustering to recommend
                you new beers based off what you like and what is popular. It's
                a Django web app connected to a database of over 5,000 different beers from around the world.`,
                tech : `Python, Django, Pandas, scikit-learn`,
                git_link : 'https://github.com/jackg235/shandy4u',
                image : shandy,
                class : 'shandy4u',
                image_class : 'project-photo'
            },
            {
                title : 'Amazon Reviews Classifier',
                desc : `A logistic regression model used to predict the star ratings for Amazon reviews using sentiment
                analysis.
                The model takes in 100,000 reviews from Amazon.com, along with their timestamps and star
                ratings, and utilizes textual
                and temporal data to predict the star rating of each review with 84.6% accuracy.`,
                tech : `Python, scikit-learn, Pandas`,
                git_link : 'https://github.com/jackg235/Amazon-Reviews-Classifier',
                image : amazon,
                class : 'amazon-classifier',
                image_class : 'amazon-stars'
            },
            {
                title : 'Apache Hive UDF  Tutorial',
                desc : `I built a Hive integrated UDF (User Defined Function) during my internship at Comcast and learned that end-to-end online
                documentation was rather weak. I decided to write up a Hive UDF tutorial that explains each step
                of the process with both implementation details and big picture implications and use cases.

                The UDF performs a rather simple function (reversing a string) but the process can be applied to
                any Hive UDF development. Click on the Github logo to check it out.`,
                tech : `Java, Hadoop`,
                git_link : 'https://github.com/jackg235/hive-udf-tutorial',
                image : hive,
                class : 'hive',
                image_class : 'hive-logo'
            },
        ]

    }
}

export default Projects