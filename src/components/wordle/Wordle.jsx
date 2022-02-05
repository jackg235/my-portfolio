import React, {useState, useEffect} from "react";
import WordleGrid from "./WordleGrid";
import NavBar from "../Navbar"
import '../../static/stylesheets/Wordle.css'
import Footer from '../Footer'
import WordleAboutPopup from './WordleAboutPopup'
import {Helmet} from "react-helmet";

const answer = "Renna"
const Wordle = () => {
  const [popupVisible, setPopupVisibility] = useState(false);
  const popupHandler = (e) => {
    setPopupVisibility(!popupVisible);
  };

    return (
        <div className="wordle">
          <Helmet>
            <meta property="og:url"                content="%PUBLIC_URL%/wordle" />
            <meta property="og:type"               content="page" />
            <meta property="og:title"              content="Jack Goettle" />
            <meta property="og:description"        content="Drexel PT-themed Wordle" />
            <meta property="og:image"              content="%PUBLIC_URL%/china.PNG" />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.ico" />
        </Helmet>
        <NavBar/>
        <div className="container wordle-container">
            <h1>Renna's PT Wordle</h1>
            <WordleGrid answer={answer}/>
            <button className="btn about-button" onClick={popupHandler}>About this project</button>
            <WordleAboutPopup
                onClose={popupHandler}
                show={popupVisible}
                >
            </WordleAboutPopup>
        </div>
        <Footer/>
      </div>
    );
  };


  export default Wordle;