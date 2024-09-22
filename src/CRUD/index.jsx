import React, { useState } from 'react'

const Crud = () => {
    const [playerName, setPlayerName] = useState("")
    const [masterList, setMasterList] = useState([])
    const [playingPlayerList, setPlayingPlayerList] = useState([])
    const addPlayerHandler = () => {
        if(playerName){
            setMasterList((prev) => [...prev, playerName])
            setPlayerName('')
        } 

    }

    const handleMasterList = (selectedItem, action) => {
        switch(action){
            case "Delete":
                const updatedMasterList = masterList.filter((item)=> item !== selectedItem)
                const updatedPlayingPlayerList = playingPlayerList.filter((item)=> item !== selectedItem)
                setMasterList(updatedMasterList)
                setPlayingPlayerList(updatedPlayingPlayerList)
                break;
            case "Add":
                setPlayingPlayerList(prev=> [...prev, selectedItem])
        }

    }
    console.log(masterList)
  return (
    <>
    <div>
        <input onChange={(e)=>setPlayerName(e.target.value)}/><button onClick={addPlayerHandler}>Add</button>
    </div>
    <div>
        <h3>Master Player List</h3>
        {masterList.length > 0 ? masterList.map((item, index)=>{
            return <ul>{item}<button onClick={()=>handleMasterList(item, "Add")}>Add</button><button onClick={()=>handleMasterList(item, "Delete")}>delete</button></ul>
        }) : 
        <p>Please add some player.</p>
        }
    </div>
    <div>
        <h3>Selected Player List</h3>
        {/* {playingPlayerList.map((item, index)=>{
            return <ul>{item}</ul>
        })} */}
        {playingPlayerList.length > 0 ? playingPlayerList.map((item, index)=>{
            return <ul>{item}</ul>
        }) : 
        <p>Please add some player from master list.</p>
        }
    </div>
    </>
  )
}

export default Crud