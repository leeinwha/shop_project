import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';


function App() {
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
          <div className='col-md-4'>
            <img src={process.env.PUBLIC_URL + '/shoes1.jpg'} width='80%'/>
            <h4></h4>
            <p></p>
          </div>
          <div className='col-md-4'>
            <img src={process.env.PUBLIC_URL + '/shoes2.jpg'} width='80%'/>
            <h4></h4>
            <p></p>
          </div>
          <div className='col-md-4'>
            <img src={process.env.PUBLIC_URL + '/shoes3.jpg'} width='80%'/>
            <h4></h4>
            <p></p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
