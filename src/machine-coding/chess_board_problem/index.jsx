import React, { useState } from 'react'
import '../chess_board_problem/index.css'

const ChessBoard = ({number = 4}) => {
    const iteratableElem = Array(number ** 2).fill('0')
    const [cordinate, setCordinate] = useState([0,0])
    const handleCoordinates = (index) => {
        let row = 0, coloum = 0
        if(index < number){
            row = 0
            coloum = index
        }else{
            console.log(index)
            row = Math.floor((index) / number)
            coloum = index - number * row
        }
        setCordinate([row, coloum])
        // console.log('row '+ row + "---", 'column '+ coloum)
    }
    console.log(cordinate)

    const handleButton = (selectorKey) => {

    }

  return (
    <>
    <div>ChessBoard</div>
    <div className='grid-generator'>
        {iteratableElem.map((item, index)=>{
            return <div className='grid-item' onClick={()=> handleCoordinates(index)} style={{border: "1px solid red", width:`${100/number - 0.2}%`, backgroundColor: (cordinate[0] * number + cordinate[1]) === index ? "yellow" : 'gray'}}></div>
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