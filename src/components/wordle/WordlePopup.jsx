import React, { useEffect, useState } from "react";
import '../../static/stylesheets/Popup.css'

const WordlePopup = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  const share = (e) => {
    //navigator.clipboard.writeText(props.shareText)
    const el = document.createElement('textarea');
    el.value = props.shareText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }


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
      <div className={"popup"}>
        <h3>{props.title}</h3>
        <button onClick={share}>
            Share
        </button>
        <span className={"close"} onClick={closeHandler}>
          &times;
        </span>
      </div>
    </div>
  );
};
export default WordlePopup;