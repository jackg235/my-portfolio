import React from "react";

const WordleKeyboard = (props) => {
    const handleClick = (e) => {
        props.parentCallback(e.target.id);
        e.preventDefault();
    }

    return (
      <div className="keyboard container-fluid">
          <div className="row justify-content-center flex-nowrap keyboard-row">
              <button onClick={handleClick} id="Q" className="btn btn-light keyboard-button">Q</button>
              <button onClick={handleClick} id="W" className="btn btn-light keyboard-button">W</button>
              <button onClick={handleClick} id="E" className="btn btn-light keyboard-button">E</button>
              <button onClick={handleClick} id="R" className="btn btn-light keyboard-button">R</button>
              <button onClick={handleClick} id="T" className="btn btn-light keyboard-button">T</button>
              <button onClick={handleClick} id="Y" className="btn btn-light keyboard-button">Y</button>
              <button onClick={handleClick} id="U" className="btn btn-light keyboard-button">U</button>
              <button onClick={handleClick} id="I" className="btn btn-light keyboard-button">I</button>
              <button onClick={handleClick} id="O" className="btn btn-light keyboard-button">O</button>
              <button onClick={handleClick} id="P" className="btn btn-light keyboard-button">P</button>
          </div>
          <div className="row justify-content-center flex-nowrap keyboard-row ">
              <button onClick={handleClick} id="A" className="btn btn-light keyboard-button">A</button>
              <button onClick={handleClick} id="S" className="btn btn-light keyboard-button">S</button>
              <button onClick={handleClick} id="D" className="btn btn-light keyboard-button">D</button>
              <button onClick={handleClick} id="F" className="btn btn-light keyboard-button">F</button>
              <button onClick={handleClick} id="G" className="btn btn-light keyboard-button">G</button>
              <button onClick={handleClick} id="H" className="btn btn-light keyboard-button">H</button>
              <button onClick={handleClick} id="J" className="btn btn-light keyboard-button">J</button>
              <button onClick={handleClick} id="K" className="btn btn-light keyboard-button">K</button>
              <button onClick={handleClick} id="L" className="btn btn-light keyboard-button">L</button>
          </div>
          <div className="row justify-content-center flex-nowrap keyboard-row ">
              <button onClick={handleClick} id="Z" className="btn btn-light keyboard-button">Z</button>
              <button onClick={handleClick} id="X" className="btn btn-light keyboard-button">X</button>
              <button onClick={handleClick} id="C" className="btn btn-light keyboard-button">C</button>
              <button onClick={handleClick} id="V" className="btn btn-light keyboard-button">V</button>
              <button onClick={handleClick} id="B" className="btn btn-light keyboard-button">B</button>
              <button onClick={handleClick} id="N" className="btn btn-light keyboard-button">N</button>
              <button onClick={handleClick} id="M" className="btn btn-light keyboard-button">M</button>
              <button onClick={handleClick} id="del" className="btn btn-light keyboard-button">Delete</button>
          </div>
      </div>
    );
  };


  export default WordleKeyboard;