import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import pennbook from "../static/images/pennbook.png";
import wellness from "../static/images/wellness.png";
import github from "../static/images/github-logo.png";
import shandy from "../static/images/shandy4u.png";
import amazon from "../static/images/amazon-stars.png";
import hive from "../static/images/hive.svg";
import nn from "../static/images/nn_quantiles.png";
import "../static/stylesheets/Projects.css";
import dfs from "../static/files/Beating Fanduel Daily Fantasy Baskteball.pdf";
import trivia from "../static/images/bball-trivia.png";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: this.projects(),
    };
  }
  projectsGenerator = () => {
    return (
      <div>
        {this.state.projects.map((val) => (
          <div className="card flex-md-row mb-4 h-md-250 project-card ">
            <div className="card-body">
              <div className="row">
                <div className={val.col_class}>
                  <h4>
                    <b>{val.title}</b>
                  </h4>
                  <p className="card-text">{val.desc}</p>
                  <p className="card-text">
                    <b>Technologies: </b> {val.tech}
                  </p>
                  <a href={val.git_link}>
                    <img class="github-logo" src={github} alt="" />
                  </a>
                </div>
                <div className={val.col_class}>
                  <img src={val.image} class={val.image_class} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  render() {
    return (
      <div className="projects">
        <Navbar />
        <div className="container">
          <h1 className="header">Projects</h1>
          {this.projectsGenerator()}
        </div>
        <Footer />
      </div>
    );
  }

  projects() {
    return [
      {
        title: "Beating the Daily Fantasy Basketball 50/50 Challenge",
        desc: `As a side project (that ultimately turned into a final
                    project for CIS 519: Applied Machine Learning), I built a
                    quantile neural network and linear optimizer that beat the
                    NBA Fanduel DFS 50/50 challenge. This project was perhaps my
                    biggest undertaking as an engineer - it required 8 different
                    Selenium web crawlers for data collection, weeks of data
                    cleaning and engineering, multiple hyperparameter tuning
                    iterations across a handful of ML techniques, GCP
                    deployment, and a custom linear optimizer. The final model
                    and optimizer beat the challenge (described in the linked
                    paper) 64.3% of the time, far surpassing the required
                    55.5% win rate for a positive expected profit. My project received the
                    highest marks out of all undergraduate and graduate students. I haven't published the code
                    yet but the paper is linked below.`,
        tech: `Python, Selenium, Google Cloud AI
                    Platform, PyTorch, Pulp (linear optimizer), Beautiful Soup`,
        image: nn,
        col_class: "col-lg-6",
        git_link: dfs,
        image_class: "project-photo",
      },
      {
        title: "Baseball Trivia Web Application",
        desc: `Baseball Trivia was my group final project for CIS 550: Databases and Information Systems.
        The goal of the project was to test our database knowledge and query optimization strategy
        (indexing, left-deep plan, restricting search space). It's a trivia web app that allows users to quiz 
        themselves on their baseball knowledge and play with friends. Users can also search for information 
        such as team and player stats, as well as player specific information. The app queries an Oracle DB 
        hosted on AWS - some of the data was gathered from an online DB and 
        some was a quired through web scraping.`,
        tech: `AWS, MySQL, Javascript (Node), React, Selenium, Beautiful Soup`,
        image: trivia,
        col_class: "col-lg-6",
        git_link: "https://github.com/jackg235/CIS550_baseball_trivia",
        image_class: "project-photo",
      },
      {
        title: "Pennbook",
        desc: `Final project for NETS 212: Scalable Cloud Computing. A bootstrapped Facebook clone
                equipped with messenger and hosted on AWS.`,
        tech: `Node, React, CSS, JavaScript, Amazon DynamoDB, Map Reduce, Socket.io`,
        image: pennbook,
        col_class: "col-lg-6",
        git_link: "https://github.com/jackg235/",
        image_class: "project-photo",
      },
      {
        title: "Wellness Buddy",
        desc: `An Android app for connecting students with health and wellness resources at
                The University of Pennsylvania. Includes an administrative web application and incorporates
                Google Maps API and Spotify API.`,
        tech: `MongoDB, Android, Node, Express, EJS, CSS, HTML`,
        git_link: "https://github.com/jackg235/cis350-wellness-buddy",
        image: wellness,
        col_class: "col-sm-6",
        image_class: "phone-photo",
      },
      {
        title: "Shandy4u",
        desc: `Shandy4u is a both a cellar and a bartender - it allows you to search for and save all your
                favorite beers and it uses k-clustering to recommend
                you new beers based off what you like and what is popular. It's
                a Django web app connected to a database of over 5,000 different beers from around the world.`,
        tech: `Python, Django, Pandas, scikit-learn`,
        git_link: "https://github.com/jackg235/shandy4u",
        image: shandy,
        col_class: "col-lg-6",
        image_class: "project-photo",
      },
      {
        title: "Amazon Reviews Classifier",
        desc: `A logistic regression model used to predict the star ratings for Amazon reviews using sentiment
                analysis.
                The model takes in 100,000 reviews from Amazon.com, along with their timestamps and star
                ratings, and utilizes textual
                and temporal data to predict the star rating of each review with 84.6% accuracy.`,
        tech: `Python, scikit-learn, Pandas`,
        git_link: "https://github.com/jackg235/Amazon-Reviews-Classifier",
        image: amazon,
        col_class: "col-lg-6",
        image_class: "amazon-stars",
      },
      {
        title: "Apache Hive UDF  Tutorial",
        desc: `I built a Hive integrated UDF (User Defined Function) during my internship at Comcast and learned that end-to-end online
                documentation was rather weak. I decided to write up a Hive UDF tutorial that explains each step
                of the process with both implementation details and big picture implications and use cases.

                The UDF performs a rather simple function (reversing a string) but the process can be applied to
                any Hive UDF development. Click on the Github logo to check it out.`,
        tech: `Java, Hadoop`,
        git_link: "https://github.com/jackg235/hive-udf-tutorial",
        image: hive,
        class: "hive",
        col_class: "col-lg-6",
        image_class: "hive-logo",
      },
    ];
  }
}

export default Projects;
