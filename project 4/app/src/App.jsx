import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchZResult from './components/SearchResult/SearchZResult';



export const BASE_URL = "http://localhost:9000";



const App = () => {

  const [data,setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData,setFilteredData] = useState(null);
  const [selectedButton ,setSelectedButton] = useState("all");
  

// fectFoodData();

useEffect(()=>{
  const fetchFoodData  = async() =>{

    setLoading(true);
        try{
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);

        }catch(err){
            setError("unable to fetch data");
        }
  };
  fetchFoodData();
},[]);


const searchFood =(e) =>{
  const searchValue = e.target.value;

  if(searchValue==""){
    setFilteredData(null);
  }

  const filter = data?.filter((food)=>food.name.toLowerCase().includes(searchValue.toLowerCase()));
  setFilteredData(filter);
}

const filterFood = (type) =>{
  if(type=="all"){
    setFilteredData(data);
    setSelectedButton("all");
    return;
  }

  const filterBtns = [
    {
      name:"All",
      type:"all"
    },
    {
      name:"Breakfast",
      type:"breakfast"
    },
    {
      name:"Lunch",
      type:"lunch"
    },
    {
      name:"Dinner",
      type:"dinner"
    }
  ]
  const filter = data?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()));
  setFilteredData(filter);
  setFilteredData(filter);
  setSelectedButton(type);

}

if(error){
  return <div>{error}</div>
}
if(loading){
  return <div>loading...</div> 
}

  return (
    <>
      <Container>
   <TopContainer>
      <div className='logo'>
        <img src="/logo.svg" alt="logo"/>
      </div>
      <div className="search">
        <input onChange={searchFood} placeholder='Search Food'/>
      </div>
   </TopContainer>

   <FilterContainer>
{/* 
    {
      filterBtns.map((value)=>(
        <Button key={value.name} onClick={()=>filterFood(value.type)}>{value.name}</Button>
      ))
    } */}
      <Button onClick={()=>filterFood("all")}>All</Button>
      <Button onClick={()=>filterFood("breakfast")}>Breakfast</Button>
      <Button onClick={()=>filterFood("lunch")}>Lunch</Button>
      <Button onClick={()=>filterFood("dinner")}>Dinner</Button>

   </FilterContainer>


  </Container>
   <SearchZResult data={filteredData}/>

    </>

  );
};

export default App;



export const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
`;
const TopContainer =styled.section`
min-height: 140px;
display: flex;
justify-content: space-between;
padding:16px;
align-items: center;

.search{
  input{
    background-color: transparent;
    border:1px solid red;
    border-radius: 5px;
    color: white;
    height: 40px;
    font-size: 16px;
    padding: 0 10px;
    &::placeholder{
      color:white;
    }
    
  }
}
@media (0 < width < 600px) {
  flex-direction: column;
  
}
`;
 
const FilterContainer = styled.section`
display: flex;
justify-content: center;
gap: 12px;
padding: 40px;
`;
export const Button = styled.button`

background-color: #ff4343;
border-radius: 5px;
padding: 6px 12px;
border: none;
color: white;
cursor: pointer;
&:hover{
  background-color: #f22f2f;
}

`;

