import { useState } from 'react'
import './App.css'

export default function Board() {
  const buttons = document.querySelectorAll(".square");

  const [currentPlayer, setCurrentPlayer] = useState("X");

  const [boardSize, setBoardSize] = useState(3);
  const [boxes, setBoxes] = useState(Array.from({length: boardSize}, () => Array(boardSize).fill(undefined)));
  
  const [haveWinner, setHaveWinner] = useState(false);
  const [winner, setWinner] = useState();

  const [haveDraw, setHaveDraw] = useState(false);

  function handleMove(rowIndex, colIndex) {
    const newBoxes = [...boxes];
    
    if (currentPlayer === "X") {
      newBoxes[rowIndex][colIndex] = "X";
      setCurrentPlayer("O");
    } else {
      newBoxes[rowIndex][colIndex] = "O";
      setCurrentPlayer("X");
    }

    setBoxes(newBoxes);

    handleResult();
  }

  function handleReset() {
    const newBoxes = Array.from({length: boardSize}, () => Array(boardSize).fill(undefined));

    setCurrentPlayer("X");
    setBoxes(newBoxes);
    setHaveWinner(false);
    setHaveDraw(false);
    buttons.forEach(btn => btn.disabled = false);
  }

  function handleResult() {
    // Handle diagonal patterns
   if (boxes[0][0] === "X" && boxes[1][1] === "X" && boxes[2][2] === "X") {
     setHaveWinner(true);
     setWinner("X");
    
     buttons.forEach(btn => btn.disabled = true);
   }
   if (boxes[0][0] === "O" && boxes[1][1] === "O" && boxes[2][2] === "O") {
     setHaveWinner(true);
     setWinner("O");

     buttons.forEach(btn => btn.disabled = true);
   }

   // Handle horizontal patterns
   if (boxes[0][0] === "X" && boxes[0][1] === "X" && boxes[0][2] === "X") {
     setHaveWinner(true);
     setWinner("X");

     buttons.forEach(btn => btn.disabled = true);
   }
   if (boxes[1][0] === "X" && boxes[1][1] === "X" && boxes[1][2] === "X") {
     setHaveWinner(true);
     setWinner("X");

     buttons.forEach(btn => btn.disabled = true);
   }
   if (boxes[2][0] === "X" && boxes[2][1] === "X" && boxes[2][2] === "X") {
     setHaveWinner(true);
     setWinner("X");

     buttons.forEach(btn => btn.disabled = true);
   }

   if (boxes[0][0] === "O" && boxes[0][1] === "O" && boxes[0][2] === "O") {
     setHaveWinner(true);
     setWinner("O");

     buttons.forEach(btn => btn.disabled = true);
   }
   if (boxes[1][0] === "O" && boxes[1][1] === "O" && boxes[1][2] === "O") {
     setHaveWinner(true);
     setWinner("O");

     buttons.forEach(btn => btn.disabled = true);
   }
   if (boxes[2][0] === "X" && boxes[2][1] === "X" && boxes[2][2] === "X") {
     setHaveWinner(true);
     setWinner("O");

     buttons.forEach(btn => btn.disabled = true);
   }

    // Handle vertical patterns
    if (boxes[0][0] === "X" && boxes[1][0] === "X" && boxes[2][0] === "X") {
      setHaveWinner(true);
      setWinner("X");

      buttons.forEach(btn => btn.disabled = true);
    }
    if (boxes[0][1] === "X" && boxes[1][1] === "X" && boxes[2][1] === "X") {
      setHaveWinner(true);
      setWinner("X");

      buttons.forEach(btn => btn.disabled = true);
    }
    if (boxes[0][2] === "X" && boxes[1][2] === "X" && boxes[2][2] === "X") {
      setHaveWinner(true);
      setWinner("X");

      buttons.forEach(btn => btn.disabled = true);
    }

    if (boxes[0][0] === "O" && boxes[1][0] === "O" && boxes[2][0] === "O") {
      setHaveWinner(true);
      setWinner("O");

      buttons.forEach(btn => btn.disabled = true);
    }
    if (boxes[0][1] === "O" && boxes[1][1] === "O" && boxes[2][1] === "O") {
      setHaveWinner(true);
      setWinner("O");

      buttons.forEach(btn => btn.disabled = true);
    }
    if (boxes[0][2] === "O" && boxes[1][2] === "O" && boxes[2][2] === "O") {
      setHaveWinner(true);
      setWinner("O");

      buttons.forEach(btn => btn.disabled = true);
    }

    // Detect a draw
    let count = 0;

    for (const arr of boxes) {
      for (const element of arr) {
        if (element) {
          count++;
        }
      }
    }

    if (count === 9 && haveWinner === false) {
      setHaveDraw(true);
    }
  }

  return (
    <div className="main-container">
      <h1>Tic-Tac-Toe</h1>
      <h2>{haveDraw ? "Draw" : (haveWinner ? `Winner: ${winner}` : <div>Current Player: <span style={{color: currentPlayer === "X" ? "red" : "green"}}>{currentPlayer}</span></div>)}</h2>
      
      <div className="grid-container">
      {
        boxes.map((item, rowIndex) => (
          item.map((subItem, colIndex) => (
          <button style={{color: subItem === "X" ? "red" : "green"}} key={colIndex} disabled={!!subItem} onClick={() => handleMove(rowIndex, colIndex)} role="button" className="square">{subItem}</button>
        ))))
      }
      </div>

      <button onClick={handleReset} id="reset" role="button">Reset Game</button>
    </div>
  );
}