import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const nayoks = ['Anwar', 'Alomgir', 'Salman','Bappi','Shuvo']
  const products = [{name:'Photoshop', price:'$90.99'},
{name:'Illustrator', price:'$60.99'},
{name: 'PDF Reader',price:'$6.99'}
]


  var person = {
    name: "Dr. Mahfuz",
    Job : "Singer"
  }
  var person2 ={
    name:"Eva Rahman",
    Job : "Kokil KOnthi"
  }
  ;
  var style={
    color:'red',
    backgroundColor:"yellow"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
         {
           products.map(product =><li>{product.name}</li>)
         }
          
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        <h1 className = "" style = {style}>My Heading {person.name} {person.Job}</h1>
        <h2 style = {{backgroundColor:'cyan', color:'darkgoldenrod'}}>{person2.name} {person2.Job}</h2>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <p>My First Paragraph</p>
        <Counter></Counter>
        <Users></Users>

       
        
        
        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle ={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
  

function Person(props) {
  const personStyle ={
    border:'2px solid red',
    margin:'10px'
  }
  return (
  <div style={{border:'2px solid yellow',margin:'10px'}}><h1>Name:{props.name}</h1>
  <h3>HEro of {props.nayika}</h3>
  </div>
  )
  
}
function Counter(){
  const[count,setCount]= useState(10);
  const handleIncrease = () =>setCount(count + 1); 
    
    
  
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove={()=> setCount(count - 1)}>DEcrease</button>
      <button onClick={() =>setCount(count + 1)}>Increase</button>
      </div>
  
  )
}
function Users(){
  const[users, setUsers]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then (data=> setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
      </div>
  )
}

export default App;
