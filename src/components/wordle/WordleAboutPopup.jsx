import React, {useState, useEffect} from "react";

export default function WordleAboutPopup(props) {
    const [show, setShow] = useState(false);

    const closeHandler = (e) => {
        setShow(false);
        props.onClose(false);
    };

    useEffect(() => {
        setShow(props.show);
      }, [props.show]);

      return (
        <div
          style={{
            visibility: show ? "visible" : "hidden",
            opacity: show ? "1" : "0"
          }}
          className={"overlay"}
        >
          <div className={"about-popup"}>
            <h4 className="about-title">About this project</h4>
            <span className={"close"} onClick={closeHandler}>
              &times;
            </span>
            <p className="about-content"> My girlfriend, Renna, really likes Wordle, and also her friend's at PT school, 
                so she asked me if I could make her a Drexel PT-themed version. 
            </p>
            <p className="about-content"> She wanted it as a Valentine's day gift, so I said sure, I can build it. 
            Way cheaper than dinner at Parc anyways lol.
            </p>
            <p className="about-content"> If the layout of the game looks weird on your phone (ex. keyboard runs of the screen),
            then try using your laptop. Or better yet, get a new phone. You won't miss your 12-year-old iPhone 4.
            </p>
            <p className="about-content"> Feel free to check out my other <a href="/projects">projects</a> that are actually 
            interesting. Or, click <a href="/troll">here</a> for my SSN and bank account information (you may need to allow pop-ups).
            </p>
            <p className="about-content"> Happy wordling!
            </p>
          </div>
        </div>
      );
}
