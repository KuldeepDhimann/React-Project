import React from 'react'
import styled from 'styled-components';
import { BASE_URL, Button, Container } from '../../App';
const SearchZResult = ({data : foods}) => {
  return (
<FoodCardContainer>
        <Container>
        <FoodCards>
         {
            foods?.map(({name,image,text,price})=>(
                <FoodCard Key={name}>
                    <div className="foodImage">
                        <img src={BASE_URL+image}></img>
                    </div>
                    <div className="foodInfo">
                        <div className="info">
                            <h3>{name}</h3>
                            <p>{text}</p>
                        </div>
                        <Button>${price.toFixed(2)}</Button>
                    </div>
                </FoodCard>
            )
            )
        
         }
        
        </FoodCards>


        </Container>


   </FoodCardContainer>  )
}

export default SearchZResult

const FoodCardContainer = styled.section`
min-height: calc(100vh - 250px);
background-image: url("./background.png");
background-size: cover;
`;

const FoodCard = styled.div`
width: 340px;
height: 167px;
border: 1px solid white;
border-image-source: radial-gradient(80.69 208.78% at 108.28 112.58, #eabfff 0%,rgba(135,38,183,0) 100%)
radial-gradient(80%,222% at -13 -12, #98f9ff 0%,
    rbga(255,255,255,0) 100%);

background: url(.png),radial-gradient(90.16% 143.01% at 15.32%,21.04%,
    rgba(165,239,255,0.2),
    rgba(118,191,244,0.04) 77.08,
    rbga(70,144,213,0) 100%
    );

background-blend-mode:overlay , normal ;
backdrop-filter: blur(13.1842px);
border-radius: 20px;
display: flex;
padding: 8px;
.foodInfo{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    h3{
        margin-top:8px;
        font-size:16px;
        font-weight: 500;

    }
    p{
        margin-top: 4px;
        font-size: 12px;
    }
    Button{
        font-size:12px;
    }
}

`;

const FoodCards = styled.div`
display: flex;
flex-wrap: wrap;
row-gap: 32px;
column-gap: 20px;
justify-content: center;
align-items:center;
padding-top: 80px;
`;