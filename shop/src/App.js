import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './routes/Detail';
import axios from 'axios';

function App() {

  let [shoes, setShoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">            
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>            
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
        <>
          <div className='main-bg'></div>
          <div className='container'>
            <div className='row'>          
              {
                shoes.map((a, i)=>{
                  return(
                    <Card shoes={shoes[i]} i={i} key={i}></Card>
                  )             
                })
              }          
            </div>
          </div>
          <button onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{
              let copy = [...shoes, ...result.data]
              setShoes(copy);
              })
          }}>더보기</button>
        </>
        }/>
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}/>        
        <Route path='*' element={<div>없는 페이지 입니다</div>}/>        
      </Routes>
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
