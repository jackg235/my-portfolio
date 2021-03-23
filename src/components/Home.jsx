import React, { Component } from "react";
import ProfileHeader from "./ProfileHeader";
import Navbar from "./Navbar";
import "../static/stylesheets/Home.css";
import moorestown from "../static/images/moorestown-logo.png";
import penn from "../static/images/penn-logo.png";
import square from "../static/images/square-logo.png";
import comcast from "../static/images/comcast.png";
import trhc from "../static/images/tabularasa.png";
import bdp from "../static/images/bdp.png";
import resume from "../static/files/resume.pdf";
import Footer from "./Footer";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: this.getEducation(),
      experience: this.getWorkExperience(),
    };
  }

  educationGenerator = () => {
    return (
      <div>
        {this.state.education.map((val) => (
          <div class="card mb-4">
            <div class="card-body d-flex flex-column align-items-start">
              <h5 className="card-title">
                <b>{val.title}</b>
              </h5>
              <h6 className="card-text">{val.subtitle}</h6>
              <img src={val.image} class={val.image_class} alt=""></img>
              <p className="card-text">
                {val.date} • GPA: {val.gpa}
              </p>
              <p className="card-text">{val.p1}</p>
              <p className="card-text">{val.p2}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  experienceGenerator = () => {
    return (
      <div>
        {this.state.experience.map((val) => (
          <div class="card mb-4">
            <div class="card-body d-flex flex-column align-items-start">
              <h5 className="card-title">
                <b>{val.title}</b>
              </h5>
              <img src={val.image} class={val.image_class} alt=""></img>
              <p className="card-text">
                {val.date} • {val.loc}
              </p>
              <p className="card-text">{val.p1}</p>
              <p className="card-text">{val.p2}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  render() {
    return (
      <div className="home">
        <Navbar />
        <ProfileHeader />
        <div className="container">
          <h4 className="title">
            <b>About Me</b>
          </h4>
          <div className="about">
            I'm a Computer Science student at the University of Pennsylvania
            pursuing Bachelor's and Master's degrees in engineering. I enjoy
            traveling to national parks with my family, watching my Philadelphia
            Eagles, and playing with my Bernese Mountain Dog, Carson. I'm
            unabatingly curious and love to build cool stuff and learn new
            things.
          </div>
          <div className="buttons-container">
            <a class="btn proj-btn" href="/projects" role="button">
              Check out my projects
            </a>
            <a
              class="btn thoughts-btn"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download my resume
            </a>
          </div>
          <h4 class="title">Education</h4>
          {this.educationGenerator()}
          <h4 class="title">Professional Experience</h4>
          {this.experienceGenerator()}
          <h4 class="title">Skills</h4>
          <div class="card box-shadow skills-container mb-4">
            <div class="card-body">
              <div className="row">
                <div className="col-sm-7">
                  <div className="row skill-title">
                    <b>General Purpose</b>
                  </div>
                  <div className="row d-flex justify-content-between">
                    <p>Java</p>
                    <p className="stars">
                      &#9733; &#9733; &#9733; &#9733; &#9733;
                    </p>
                  </div>
                  <div className="row d-flex justify-content-between">
                    <p>Python</p>
                    <p className="stars">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </p>
                  </div>
                  <div className="row d-flex justify-content-between">
                    <p>Javascript</p>
                    <p className="stars">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </p>
                  </div>
                  <div className="row d-flex justify-content-between">
                    <p>Go</p>
                    <p className="stars">
                      &#9733; &#9733; &#9733; &#9734; &#9734;
                    </p>
                  </div>
                  <div className="row d-flex justify-content-between">
                    <p>C</p>
                    <p className="stars">
                      &#9733; &#9733; &#9733; &#9734; &#9734;
                    </p>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="row skill-title">
                    <b>Web</b>
                  </div>
                  <div className="row">
                    Node.js, React, Redux, HTML, CSS, EJS, jQuery, Bootstrap
                  </div>
                  <div className="row skill-title-sub">
                    <b>Databases &amp; cloud</b>
                  </div>
                  <div className="row sub">
                    AWS (DynamoDB, S3, EC2), GCP, MongoDB, Firebase
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-7">
                  <div className="row skill-title">
                    <b>Mobile</b>
                  </div>
                  <div className="row d-flex justify-content-between">
                    <p>iOS (Swift)</p>
                    <p className="stars">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </p>
                  </div>
                  <div className="row d-flex justify-content-between">
                    <p>Android (Java)</p>
                    <p className="stars">
                      &#9733; &#9733; &#9733; &#9734; &#9734;
                    </p>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="row skill-title">
                    <b>Data &amp; ML</b>
                  </div>
                  <div className="row">
                    SQL, Map Reduce, Pandas, NumPy, Sklearn, Torch, Tensorflow,
                    Spark, Selenium
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  getEducation() {
    var education = [];
    education.push({
      title:
        "University of Pennsylvania, School of Engineering and Applied Science",
      subtitle: "Master of Engineering - Computer Science Candidate",
      image: penn,
      image_class: "company-logo",
      date: "2020-2022",
      gpa: "4.0",
      p1:
        "Coursework: Applied Machine Learning, Databases, Engineering Entrepreneurship",
    });
    education.push({
      title:
        "University of Pennsylvania, School of Engineering and Applied Science",
      subtitle:
        "Bachelor of Science in Engineering - Computer Science Candidate",
      image: penn,
      image_class: "company-logo",
      date: "2017-2021",
      gpa: 3.60,
      p1: "Minors: Math | Data Science | Entrepreneurship",
      p2: `Coursework: Data Structures and Algorithms, Scalable and Cloud Computing, 
            iOS Development, Advanced Probability, Software Design, 
            Linear Algebra, Blockchain`,
    });
    education.push({
      title: "Moorestown High School",
      subtitle: "",
      image: moorestown,
      image_class: "company-logo",
      date: "2013-2017",
      gpa: 4.61,
      p1:
        "Tests: SAT | 2300 - (M 770, CR 750, WR 780), Awards: National Merit Commended Scholar, National AP Scholar",
      p2: `Involvement: Student Council President, Honors and Service Society President, Varsity Cross Country,
            Technology Student Association President`,
    });
    return education;
  }

  getWorkExperience() {
    var exp = [];
    exp.push({
      title: "Software Engineer Intern - Square",
      image: square,
      image_class: "company-logo",
      date: "May-August 2020",
      loc: "San Francisco, CA (remote)",
      p1: `Building OAuth solutions on the Identity and Access Management team for the Square Developer API. 
      Designed and implemented a public-facing webhook in Go to notify 3rd party applications when a merchant 
      has revoked an access token. Created internal feed for OAuth revocations, integrated with AWS, 
      and setup Signalform monitoring. `,
      p2: `Won Square’s Intern Hack Week. Worked on a team of 5 to construct a hardware recommendation engine 
      and web application for guiding Square sellers in choosing a point-of-sale device. 
      Demoed application to CEO and core team.`,
    });

    exp.push({
      title: "Strategic Analyst Intern - Comcast",
      image: comcast,
      image_class: "comcast-logo",
      date: "May-August 2019",
      loc: "Philadelphia, PA",
      p1: `Tasked with building a Hive User Defined Function (UDF) that enables efficient customer
            engagement classification. Built the UDF in Java using a Poisson distribution and integrated
            with Apache Hive to leverage parallelism in Hadoop MapReduce framework and improve SQL
            querying capabilities. Decreased classification runtime from 1+ hours to a few seconds.`,
      p2: `Built a random forest model to uncover most predictive attributes of a customer’s propensity
            to opt into "mini tier" plan. Used voting-based methodology and 6 ML techniques (RF, Chi
            Square, RFE, etc.) for dimensionality reduction and classification. Model performed at 90%
            accuracy with 86% opt-in TPR.`,
    });

    exp.push({
      title: "Data Scientist Intern - Tabula Rasa Healthcare",
      image: trhc,
      image_class: "company-logo",
      date: "July-August 2018",
      loc: "Moorestown, NJ",
      p1: `Built K-means clustering algorithm using Python and SQL to better understand cohort of
            patients who were at low risk for medical emergency yet were paying a lot for medical
            services (low risk / high cost). `,
      p2: `Gained experience in SQL, Python, and basic data science techniques. Piloted RapidMiner
            software which is now widely used within company.`,
    });

    exp.push({
      title: "Supply Chain Management Intern - BDP International",
      image: bdp,
      image_class: "company-logo",
      date: "May-June 2018",
      loc: "Antwerp, Belgium",
      p1: `Summer 6-week logistics and supply chain management optimization intern. Coordinated
            chemical exports and expedited supply chain for chemical companies including Bayer,
            Covestro, and Lanxess.`,
      p2: `Learned SQL, shipping logistics, and traveled around Europe.`,
    });
    return exp;
  }
}

export default Home;

/*
<div class="card flex-md-row mb-4 box-shadow h-md-250 skills-container">
            <div className="card-body d-flex flex-column align-items-start">
              <div class="row">
                <div class="col">
                  <b className="skill-title">General Purpose</b>
                  <div class="row">
                    <div class="col">
                      <ul class="list-unstyled">
                        <li>Java</li>
                        <li>Python</li>
                        <li>Javascript</li>
                        <li>Go</li>
                        <li>C</li>
                      </ul>
                    </div>
                    <div class="col">
                      <ul class="list-unstyled">
                        <li>&#9733; &#9733; &#9733; &#9733; &#9733;</li>
                        <li>&#9733; &#9733; &#9733; &#9733; &#9733;</li>
                        <li>&#9733; &#9733; &#9733; &#9733; &#9734;</li>
                        <li>&#9733; &#9733; &#9733; &#9734; &#9734;</li>
                        <li>&#9733; &#9733; &#9733; &#9734; &#9734;</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <b className="skill-title">Web</b>
                  <p>
                    Node.js, React, Redux, HTML, CSS, EJS, jQuery, Bootstrap
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <b className="skill-title">Mobile</b>
                  <div class="row">
                    <div class="col">
                      <ul class="list-unstyled">
                        <li>iOS (Swift)</li>
                        <li>Android (Java)</li>
                      </ul>
                    </div>
                    <div class="col">
                      <ul class="list-unstyled">
                        <li>&#9733; &#9733; &#9733; &#9733; &#9734;</li>
                        <li>&#9733; &#9733; &#9733; &#9734; &#9734;</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <b className="skill-title">Databases &amp; cloud</b>
                  <p>AWS (DynamoDB, S3, EC2), GCP, MongoDB, Firebase</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <b className="skill-title">Data &amp; ML</b>
                  <p>
                    SQL, Map Reduce, Pandas, NumPy, Sklearn, Torch, Tensorflow,
                    Spark, Selenium,
                  </p>
                </div>
                <div class="col-6">
                  <b className="skill-title">APIs</b>
                  <p>Square,...</p>
                </div>
              </div>
            </div>
          </div>
          */
