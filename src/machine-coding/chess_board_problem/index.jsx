import React, { useState } from 'react'
import '../chess_board_problem/index.css'

const ChessBoard = ({number = 4}) => {
    const iteratableElem = Array(number ** 2).fill('0')
    const [cordinate, setCordinate] = useState([0,0])
    const handleCoordinates = (index) => {
        const row = Math.floor((index) / number)
        const coloum = index - number * row
        setCordinate([row, coloum])
    }

    const handleButton = (selectorKey) => {
        const [row, column] = cordinate
        const currentIndex = row * number + column
        let newRow = row
        let newColumn = column
        switch (selectorKey) {
            case "Up":
                if(row > 0) newRow = newRow - 1
                setCordinate([newRow, newColumn]);
                break;
            case "Down":
                if(row < number -1 ) newRow = newRow + 1
                setCordinate([newRow, newColumn]);
                break;
            case "Left":
                if(currentIndex > 0) handleCoordinates(currentIndex - 1)
                break;
            case "Right":
                if(currentIndex < iteratableElem.length-1) handleCoordinates(currentIndex + 1)
                break;
            default:
                handleCoordinates(0)
                break;
        }
    }

  return (
    <>
    <div>ChessBoard</div>
    <div className="grid-generator" style={{ gridTemplateColumns: `repeat(${number}, 1fr)` }}>
        {iteratableElem.map((_, index) => {
            return (<div
                key={index}
                className={`grid-item ${(cordinate[0] * number + cordinate[1]) === index ? 'active' : ''}`}
                onClick={() => handleCoordinates(index)}
            >
                {(cordinate[0] * number + cordinate[1]) === index ? `Coordinates : ${JSON.stringify(cordinate)}` : ""}
            </div>)
        })}
            </div>
    <div style={{margin: "3% 0", display:"flex", justifyContent:"center", gap:"10px"}}>
        <button onClick={()=> handleButton("Up")}>Up</button>
        <button onClick={()=> handleButton("Down")}>Down</button>
        <button onClick={()=> handleButton("Left")}>Left</button>
        <button onClick={()=> handleButton("Right")}>Right</button>
    </div>
    </>
  )
}

export default ChessBoard;