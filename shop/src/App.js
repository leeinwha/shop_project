import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data';

function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">      
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>            
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div className='container'>
        <div className='row'>          
          {
            shoes.map((a, i)=>{
              return(
                <Card shoes={shoes[i]} i={i}></Card>
              )             
            })
          }          
        </div>
      </div>

    </div>
  );
}

function Card(props){
  return(
    <div className='col-md-4'>
      <img src={process.env.PUBLIC_URL + '/shoes'+ (props.i+1) +'.jpg'} width='80%'/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
