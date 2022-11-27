
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


import { Link } from 'react-router-dom';
//  import './menu.css'

function menuu() {
  
 
    return (
      // <Navbar bg="light" expand="lg" >
      //   <Container>
      //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //   <Navbar.Collapse id="basic-navbar-nav">

      // <Nav className="me-auto" fill-variant='tabs' variant='pills'  >
      //   <Nav.Item>
      //     <Link  to={"/"} ><button  className='  btn  ' >CODE-HATCH</button></Link> 
      //   </Nav.Item>
      //   <Nav.Item>
      //   <NavDropdown title="More" id="dropdown-basic" variant="info">
      //     <NavDropdown.Item eventKey="4.1"><Link to={"/About"}><button className='btn'>About</button></Link> </NavDropdown.Item>
      //     <NavDropdown.Item eventKey="4.2"><Link to={"/Home"}><button className='btn'>HOME</button></Link> </NavDropdown.Item>
          
      //     <NavDropdown.Divider />
      //     <NavDropdown.Item eventKey="4.4"><Link to={"/Contact"}><button  className='btn'>Contact Us</button></Link> </NavDropdown.Item>
      //   </NavDropdown>
      //   </Nav.Item>
      //   <Nav.Item>
          
      //     <input  id='floatingInput' type={"search" } placeholder ={"Search Code-Hatch"} />
         
      //   </Nav.Item>
      //   <Nav.Item>
         
      //     <Link to={"/Signin"}><button  className='btn'>Signin</button></Link>
       
      //   </Nav.Item>
      //   <Nav.Item>
          
      //     <Link to={"/Signup"}><button  className='btn'>Signup</button></Link>
      
      //   </Nav.Item>
        
        
        
        
      // </Nav>
      // </Navbar.Collapse>

      // </Container>
      // </Navbar>


      <Navbar bg="dark" expand="lg" className="navbar-expand-lg">
      <Container>
      <Navbar.Brand  >
       
            <img
              alt=""
              src="https://o.remove.bg/downloads/eee3a28b-e757-445e-883b-575f2cb5f61e/OIP-removebg-preview.png"
              width="30"
              height="30"
              className="d-inline-block align-top "
            />{' '}
           <label  >CODE-HATCH</label>
          
          </Navbar.Brand>

        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" nav " >
            <Nav.Link ><Link  exact to="/"><button className="btn btn-light  rounded-pill">Home</button></Link></Nav.Link>
           
            <NavDropdown   title="More.."className=" dropdown-basic ">
              <NavDropdown.Item > <Link to='/about'>About</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><input type="search" placeholder="Search Code-Hatch" className="rounded-pill border-info bg-dark  " id='ml-1'    /></Nav.Link>
            <Nav.Link><Link to='/Signin'><button  className="btn  btn-light rounded-pill" >SignIn</button></Link></Nav.Link>
            <Nav.Link><Link to='/signup'><button  className="btn btn-light rounded-pill" >SignUp</button></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    );
  }
  



  
  

export default menuu;
