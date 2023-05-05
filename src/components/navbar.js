import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import backed from './images/backedlogo.png'
import shoppingbag from './images/shoppingbag.png'
function Navbarcrowd() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.25)'}}>
      {/* <Container> */}
        <Navbar.Brand href="#home" style={{paddingLeft:'30px',paddingRight:'30px'}}><img style={{width:'200px'}} src={backed}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >
              <Link to={'/'} style={{textTransform:'uppercase', color:'#19142E',fontSize:'14px',paddingRight:'30px',paddingLeft:'10px',fontWeight:"bolder" , textDecoration:'none'}}>home</Link>
              </Nav.Link>
            <Nav.Link >
              
              <Link to={'/about'} style={{textTransform:'uppercase', color:'#19142E',fontSize:'14px',paddingRight:'30px',paddingLeft:'10px',fontWeight:"bolder" , textDecoration:'none'}}>about</Link>
              </Nav.Link>
            {/* <Nav.Link href="/ongoing" style={{textTransform:'uppercase', color:'#19142E',fontSize:'14px',paddingRight:'30px',paddingLeft:'10px',fontWeight:"bolder"}}>project</Nav.Link> */}
            <NavDropdown classname='navbardropdown' style={{textTransform:'uppercase',textDecoration:'none', color:'#19142E !important',fontSize:'14px',paddingRight:'30px',paddingLeft:'10px',fontWeight:"bolder"}} title="Project" id="basic-nav-dropdown">
              <NavDropdown.Item classname='navbardropdown'  ><Link style={{textTransform:'uppercase',textDecoration:'none', color:'#19142E ',fontSize:'14px',fontWeight:"bold"}} to={'/ongoing'}>Ongoing Projects</Link></NavDropdown.Item>
              <NavDropdown.Item classname='navbardropdown'  ><Link style={{textTransform:'uppercase',textDecoration:'none', color:'#19142E ',fontSize:'14px',fontWeight:"bold"}} to={'/projectdetails'}>Projects Details</Link></NavDropdown.Item>
              <NavDropdown.Item classname='navbardropdown'  ><Link style={{textTransform:'uppercase',textDecoration:'none', color:'#19142E ',fontSize:'14px',fontWeight:"bold"}} to={'/completedproject'}>Completed Project</Link></NavDropdown.Item>
              
             
            </NavDropdown>
            <Nav.Link >
              <Link to={'/blog'} style={{textTransform:'uppercase', color:'#19142E',fontSize:'14px',paddingRight:'30px',paddingLeft:'10px',fontWeight:"bolder" , textDecoration:'none'}}>blog</Link>
              </Nav.Link>
            <Nav.Link >
              <Link to={'/contact'} style={{textTransform:'uppercase', color:'#19142E',fontSize:'14px',paddingRight:'30px',paddingLeft:'10px',fontWeight:"bolder" , textDecoration:'none'}}>contact</Link>
              </Nav.Link>
            {/* <Nav.Link href="/blog" style={{textTransform:'uppercase', color:'#19142E',fontSize:'14px',paddingRight:'30px',paddingLeft:'10px',fontWeight:"bolder"}}>blog</Nav.Link>
            <Nav.Link href="/contact" style={{textTransform:'uppercase', color:'#19142E',fontSize:'14px',paddingRight:'30px',paddingLeft:'10px',fontWeight:"bolder"}}>contact</Nav.Link> */}
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            
          </Nav>
          <Nav>
            <Nav.Link href="/checkout">
                <button style={{width:'150px',padding:'10px',fontSize:'10px',color:'white', backgroundColor:'#6100B3',fontWeight:'bold',marginLeft:'10px',border:'none'}}>start campaign</button>
                <button href='/checkout'  style={{padding:'10px',fontSize:'10px',color:'white', backgroundColor:'#6100B3',fontWeight:'bold',border:'none',marginRight:'20px',marginLeft:'10px'}}><img src={shoppingbag}width={10} alt='bag' height={10} style={{color:'white',fontWeight:'bold'}}/></button>
                </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default Navbarcrowd;