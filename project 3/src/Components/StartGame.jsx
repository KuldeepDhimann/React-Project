import styled from 'styled-components';
// import { Button } from '../styles/Button';
const StartGame = ({toggle}) => {
  return (
    <Container>
        <img src="./Images/dices 1.png"  alt="dices image"/>
        <div className='content'>
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame;

const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 18px;
    gap: 10px;
     width: 220px;
     height: 44px;
    background-color: black;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    border: 1px solid black;
    cursor: pointer;
    transition: 0.3s background  ease-in;



    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background  ease-in;
    
    }
`;

const Container =styled.div`
  max-width  : 1180px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100vh;

  .content h1{
    font-size: 96px;
    white-space: nowrap;
  }

`;
