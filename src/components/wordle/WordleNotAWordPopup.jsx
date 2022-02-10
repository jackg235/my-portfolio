import React, {useState, useEffect} from "react";

export default function WordleNotAWordPopup(props) {
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
                <h4 className="about-title">Not so fast!</h4>
                <span className={"close"} onClick={closeHandler}>
                    &times;
                </span>
                <p className="about-content"> Real words only please.
                </p>
            </div>
        </div>
    );
}
