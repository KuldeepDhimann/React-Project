import styled from "styled-components"
const DiceRoll = ({
    currentDice,rollDice
}) => {
  

    

  return (
    <DiceContainer>
        <div className="dice"
        onClick={rollDice}>
    <img src={`/Images/Dice/dice_${currentDice}.png`} alt='dice 1' />  
    </div>
    <p>Click on Dice to roll</p>
    
    </DiceContainer>

  );
};

export default DiceRoll;

const DiceContainer = styled.div`
display : flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 48px;
p{
    font-size: 24px;

}
.dice{
    cursor: pointer;
}

`