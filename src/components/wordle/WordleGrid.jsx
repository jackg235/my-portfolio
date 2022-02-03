import React, {useState, useEffect} from "react";
import Words from './WordleWords'
import WordlePopup from './WordlePopup'
import WordleKeyboard from "./WordleKeyboard";


function range(start, end) {
    let nums = [];
    for (let i = start; i < end; i++) nums.push(i);
    return nums;
}

const getDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today
}

export default function WordleGrid(props) {
    const [row, setRow] = useState(1);
    const [col, setCol] = useState(1);
    const [shareText, setShareText] = useState("");
    const [popupVisible, setPopupVisibility] = useState(false);
    const numRows = 6
    const today = getDate()
    const answer = Words.words[today] != null ? Words.words[today] : "jackg"

    const correctBox = "🟦"
    const badSpot = "🟨"
    const badLetter = "⬜️"

    const createShareText = () => {
        var shareText = "Renna's Wordle " + today + "\n"
        for (let i = 1; i <= numRows; i++) {
            for (let j = 1; j <= answer.length; j++) {
                const node = document.querySelector(`#e${i}${j}`);
                if (!node.textContent) {
                    console.log(shareText)
                    return shareText;
                }
                if (node.style.backgroundColor === "rgb(0, 0, 128)") {
                    shareText = shareText + correctBox;
                }
                else if (node.style.backgroundColor === "rgb(255, 201, 21)") {
                    shareText = shareText + badSpot;
                } else {
                    shareText = shareText + badLetter;
                }
            }
            shareText = shareText + "\n"
        }
        return shareText
    }

    const generateGrid = (r, c) => {
        let rows = range(1, r + 1);
        let cols = range(1, c + 1);
        return rows.map(i => 
            (
                <tr>
                    {cols.map(j => 
                        <td id={`e${i}${j}`}>
                        </td>
                    )}
                </tr>
            )
        )
    }

    const setCurrentCellValue = letter => {
        const nodeName = `e${row}${col}`
        console.log("changing value for " + nodeName)
        const node = document.querySelector(
            `#${nodeName}`
        );
        if (node !== null) {
            node.textContent = letter;
        }
    }

    const deleteCellValue = (r, c) => {
        const nodeName = `e${r}${c}`
        console.log("changing value for " + nodeName)
        const node = document.querySelector(
            `#${nodeName}`
        );
        if (node !== null) {
            node.textContent = "";
        }
    }

    const onKeyDown = e => {
        const l = e.key.toUpperCase()

        // check if backspace
        if (e.keyCode === 8) {
            console.log("backspace!!!")
            deleteCellValue(row, col - 1)
            setCol(Math.max(1, col - 1))
            return;
        } else if (e.keyCode < 65 || e.keyCode > 90) {
            e.preventDefault()
            return;
        }
        setCurrentCellValue(l)
        // check if we have more characters in the word
        if (col < answer.length) {
            setCol(col + 1)
        } else {
            // handle last character
            console.log("handling last character")
            handleLastCharacter()
        }
    }

    const handleLastCharacter = () => {
        const isCorrect = colorGuess()
        saveToLocalStorage()
        console.log("iscorrect: " + isCorrect)

        if (isCorrect) {
            handleEnd(true)
            return
        } 
        if (row == numRows) {
            handleEnd(false)
            return
        }
        setRow(row + 1)
        setCol(1)
    }

    const saveToLocalStorage = () => {
        localStorage.setItem("date", getDate())
        var guess = ""
        for (let i = 1; i <= answer.length; i++) {
            const node = document.querySelector(`#e${row}${i}`);
            guess = guess + node.textContent
        }
        localStorage.setItem(`guess${row}`, guess)
    }

    const colorGuess = () => {
        console.log(today)
        var ansCopy = answer.toUpperCase();
        var correctIndices = []
        for (let i = 0; i < answer.length; i++) {
            const nodeName = `e${row}${i+1}`
            const node = document.querySelector(`#${nodeName}`);
            if (node.textContent === answer.charAt(i).toUpperCase()) {
                node.style.backgroundColor = "#000080";
                node.style.color = "white";
                ansCopy = ansCopy.replace(answer.charAt(i).toUpperCase(), '')
                correctIndices.push(i)
            }
        }
        if (correctIndices.length == answer.length) {
            return true;
        }
        console.log("ans copy= " + ansCopy)
        for (let i = 0; i < answer.length; i++) {
            if (correctIndices.includes(i)) {
                continue;
            }
            const nodeName = `e${row}${i+1}`
            const node = document.querySelector(`#${nodeName}`);
            if (ansCopy.includes(node.textContent)) {
                node.style.backgroundColor = "#FFC915";
                node.style.color = "white"
                ansCopy = ansCopy.replace(node.textContent, '')
            }
        }
        return false;
    }

    const handleEnd = (win) => {
        console.log("handling game over. win = " + win)
        setShareText(createShareText())
        setPopupVisibility(true)
    }
    const popupCloseHandler = (e) => {
        setPopupVisibility(e);
      };
    
    const setFromLocalStorage = () => {
        var k = 1;
        while (true) {
            const guess = localStorage.getItem(`guess${k}`);
            if (!guess) {
                setRow(k)
                break;
            }
            var ansCopy = answer.toUpperCase();
            var correctIndices = []
            console.log(guess)
            for (let i = 0; i < guess.length; i++) {
                const nodeName = `e${k}${i+1}`
                const node = document.querySelector(`#${nodeName}`);
                node.textContent = guess.charAt(i)
                if (node.textContent === answer.charAt(i).toUpperCase()) {
                    node.style.backgroundColor = "#000080";
                    node.style.color = "white";
                    ansCopy = ansCopy.replace(answer.charAt(i).toUpperCase(), '')
                    correctIndices.push(i)
                }
            }
            if (correctIndices.length == answer.length) {
                handleEnd(true);
                return
            }

            for (let i = 0; i < answer.length; i++) {
                if (correctIndices.includes(i)) {
                    continue;
                }
                const nodeName = `e${k}${i+1}`
                const node = document.querySelector(`#${nodeName}`);
                if (ansCopy.includes(node.textContent)) {
                    node.style.backgroundColor = "#FFC915";
                    node.style.color = "white"
                    ansCopy = ansCopy.replace(node.textContent, '')
                }
            }
            k++;
        }
    }
    
    const handleCallback = (key) =>{
        console.log(key)
        // check if backspace
        if (key === "del") {
            console.log("backspace!!!")
            deleteCellValue(row, col - 1)
            setCol(Math.max(1, col - 1))
            return;
        }
        setCurrentCellValue(key)
        // check if we have more characters in the word
        if (col < answer.length) {
            setCol(col + 1)
        } else {
            // handle last character
            console.log("handling last character")
            handleLastCharacter()
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);

        // getting stored value
        const lastDate = localStorage.getItem("date");
        if (lastDate && lastDate !== getDate()) {
            console.log("clearing local storage")
            localStorage.clear();
        }
        else if (lastDate && lastDate === getDate()) {
            console.log("we have started this already!")
            setFromLocalStorage()
        }
        return () => {
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [onKeyDown]);

    return (
        <>
        <div className="wordle-grid container">
            <table className="table wordle-table">
                <tbody>
                {generateGrid(numRows, answer.length)}
                </tbody>
            </table>
            <WordlePopup
                onClose={popupCloseHandler}
                show={popupVisible}
                shareText={shareText}
                title="Nice work. See you tomorrow!"
                >
            </WordlePopup>
        </div>
        <WordleKeyboard parentCallback = {handleCallback}/>
        </>
      );
  };