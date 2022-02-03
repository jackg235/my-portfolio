import React, {useState, useEffect} from "react";
import WordleKeyboard from "./WordleKeyboard";
import WordleGrid from "./WordleGrid";
import NavBar from "../Navbar"
import '../../static/stylesheets/Wordle.css'

const answer = "Renna"
const Wordle = () => {

    return (
        <div className="wordle">
        <NavBar/>
        <div className="container">
            <h1>Renna's Wordle</h1>
            <WordleGrid answer={answer}/>
        </div>
      </div>
    );
  };


  export default Wordle;