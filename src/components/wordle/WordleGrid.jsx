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
    const [resultsText, setResultsText] = useState("");
    const numRows = 6
    const today = getDate()
    const answer = Words.words[today] != null ? Words.words[today] : "JACKG"

    const correctBox = "🟦"
    const badSpot = "🟨"
    const badLetter = "⬜️"

    const createShareText = () => {
        var shareText = "Renna's PT Wordle " + today + "\n"
        for (let i = 1; i <= numRows; i++) {
            for (let j = 1; j <= answer.length; j++) {
                const node = document.querySelector(`#e${i}${j}`);
                if (!node.textContent) {
                    return shareText.substring(0, shareText.lastIndexOf("\n"));
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
        return shareText.substring(0, shareText.lastIndexOf("\n"));
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
        const column = Math.min(answer.length, col)
        const nodeName = `e${row}${column}`
        const node = document.querySelector(
            `#${nodeName}`
        );
        if (node !== null) {
            node.textContent = letter;
        }
    }

    const deleteCellValue = (r, c) => {
        const nodeName = `e${r}${c}`
        const node = document.querySelector(
            `#${nodeName}`
        );
        if (node !== null) {
            node.textContent = "";
        }
    }

    const handleLastCharacter = () => {
        const isCorrect = colorGuess()
        saveToLocalStorage()

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
            } else {
                node.style.backgroundColor = "#C8C8C8";
                node.style.color = "white"
            }
        }
        return false;
    }

    const updateGameAttempts = () => {
        const gamesPlayed = localStorage.getItem(`gamesPlayed`);
        const avgAttempts = localStorage.getItem(`avgAttempts`);
        if (gamesPlayed) {
            localStorage.setItem(`gamesPlayed`, gamesPlayed + 1)
            var avg = gamesPlayed * avgAttempts
            avg += row
            localStorage.setItem(`avgAttempts`, avg / (gamesPlayed + 1))
        } else {
            localStorage.setItem(`gamesPlayed`, 1)
            localStorage.setItem(`avgAttempts`, row)
        }
    }

    const handleEnd = (win) => {
        updateGameAttempts()
        // need to check that last time played wasnt today before updating stats
        const streak = localStorage.getItem(`streak`);
        if (win) {
            if (streak) {
                // check that last games played was yesterday
                localStorage.setItem(`streak`, streak + 1)
            } else {
                localStorage.setItem(`streak`, 1)
            }
            setResultsText("Nice work, nerd. See you tomorrow!")
        } else {
            localStorage.setItem(`streak`, 0)
            setResultsText("Try harder next time.")
        }
        setShareText(createShareText())

        setPopupVisibility(true)
    }
    const popupCloseHandler = (e) => {
        setPopupVisibility(false);
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
                } else {
                    node.style.backgroundColor = "#C8C8C8";
                    node.style.color = "white"
                }
            }
            k++;
        }
        if (k == numRows + 1) {
            handleEnd(false);
            return
        }
    }

    const onKeyDown = e => {
        const l = e.key.toUpperCase()
        console.log(e.keyCode)
        // check if backspace
        if (e.keyCode === 8) {
            deleteCellValue(row, col-1)
            setCol(Math.max(1, col - 1))
            return;
        } 
        // if enter, and at the end of the word
        else if (e.keyCode === 13) {
            if (col > answer.length) {
                handleLastCharacter()
            }
            return;
        }else if (e.keyCode < 65 || e.keyCode > 90) {
            e.preventDefault()
            return;
        }
        setCurrentCellValue(l)
        setCol(Math.min(answer.length + 1, col + 1))
    }

    const handleCallback = (key) =>{
        // check if backspace
        if (key === "del") {
            deleteCellValue(row, col-1)
            setCol(Math.max(1, col - 1))
            return;
        } else if (key === "ent") {
            if (col > answer.length) {
                handleLastCharacter()
            }
            return;
        } 
        setCurrentCellValue(key)
        setCol(Math.min(answer.length + 1, col + 1))
    }

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);

        // getting stored value
        const lastDate = localStorage.getItem("date");
        if (lastDate && lastDate !== getDate()) {
            console.log("deleting guesses from local storage")
            localStorage.setItem(`prevDate`, lastDate)
            var k = 1;
            while (true) {
                const guess = localStorage.getItem(`guess${k}`);
                if (guess) {
                    localStorage.removeItem(guess);
                    k++
                } else {
                    break;
                }
            }
            //localStorage.clear();
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
                title={resultsText}
                >
            </WordlePopup>
        </div>
        <WordleKeyboard parentCallback = {handleCallback}/>
        </>
      );
  };