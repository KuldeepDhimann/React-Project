import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import DiceRoll from "./DiceRoll"
import React, { useState } from 'react'
import Button from "../styles/Button"


const GamePlay = () => {

  const [score,setScore]= useState(0);


  const [selectedNumber,setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error,setError] = useState("");
  const genrateRandomNumber = (min, max)=>{
    return Math.floor(Math.random()*(max-min)+min);
}

const rollDice = () =>{
  if(!selectedNumber){
    setError("You have not selected any nummber");
    return;
  } 
  setError("");

  const randomNumber = genrateRandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber);


    if(selectedNumber == randomNumber){
      setScore((prev)=>prev+2);
    }else{
      setScore((prev)=>prev-2);
    }
    setSelectedNumber(undefined);
} 



  return (
    <Container>   
      <div className="top">
      <TotalScore score={score}/>
      <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
    </div>
    <DiceRoll currentDice={currentDice} rollDice={rollDice}/>
    <div className="btns">
      <Button>reset</Button>
      <Button>reset</Button>
    </div>
    </Container>
 
  )
}

export default GamePlay

const Container = styled.main`
padding-top:70px ;
.top{
  display:flex;
  justify-content: space-around;
  align-items: end;
}

`