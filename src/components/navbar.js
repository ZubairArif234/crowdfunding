import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import backed from './images/backedlogo.png'
import lock from './images/lock.png'
function Navbarcrowd() {
  return (
    <Navbar className='navbarmainouterdiv' id='gototop' collapseOnSelect expand="lg">
    {/* <Container> */}
      <Navbar.Brand href="#home" ><img className='navbarlogo' src={backed}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto d-flex gap-3 ">
          <Link to={'/'} className='nav-link text-uppercase' href="#features">Home</Link>
          <Link to={'/about'} className='nav-link text-uppercase' href="#features">About</Link>
          
          <NavDropdown className='text-uppercase' title="PROJECTS" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              {/* Action */}
          <Link to={'/ongoing'} className='nav-link text-uppercase' href="#features">ongoing project</Link>
              </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              {/* Another action */}
          <Link to={'/projectdetails'} className='nav-link text-uppercase' href="#features">detail project</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
          <Link to={'/completedproject'} className='nav-link text-uppercase' href="#features">completed project</Link>
              {/* Something */}
              </NavDropdown.Item>
            
           
          </NavDropdown>
          <Link to={'/blog'} className='nav-link text-uppercase' href="#features">BLOG</Link>
          <Link to={'/contact'} className='nav-link text-uppercase' href="#features">Contact</Link>
        </Nav>
        <Nav style={{paddingRight:'30px'}}>
          <Link to={'/campagianpage'} className='nav-link' ><button className='nav-linkbtn'> start campaign</button></Link>
          <Link to={'/login'} className='nav-link' href="#features"><button className='nav-linkbtnimg' style={{marginLeft:'20px'}}> <img style={{width:'16px' , height:'16px'}} src={lock} /> </button></Link>
          {/* <Link className='nav-link' href="#features">Features</Link> */}
          
        </Nav>
      </Navbar.Collapse>
    {/* </Container> */}
  </Navbar>
  );
}

export default Navbarcrowd;