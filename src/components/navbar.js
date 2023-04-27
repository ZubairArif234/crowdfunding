import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
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
            <Nav.Link href="/" style={{textTransform:'uppercase', color:'#19142E',fontSize:'14px',paddingRight:'30px',paddingLeft:'10px',fontWeight:"bolder"}}>home</Nav.Link>
            <Nav.Link href="/about" style={{textTransform:'uppercase', color:'#19142E',fontSize:'14px',paddingRight:'30px',paddingLeft:'10px',fontWeight:"bolder"}}>about</Nav.Link>
            <Nav.Link href="#features" style={{textTransform:'uppercase', color:'#19142E',fontSize:'14px',paddingRight:'30px',paddingLeft:'10px',fontWeight:"bolder"}}>project</Nav.Link>
            <Nav.Link href="#features" style={{textTransform:'uppercase', color:'#19142E',fontSize:'14px',paddingRight:'30px',paddingLeft:'10px',fontWeight:"bolder"}}>blog</Nav.Link>
            <Nav.Link href="#features" style={{textTransform:'uppercase', color:'#19142E',fontSize:'14px',paddingRight:'30px',paddingLeft:'10px',fontWeight:"bolder"}}>contact</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
                <button style={{width:'150px',padding:'10px',fontSize:'10px',color:'white', backgroundColor:'#6100B3',fontWeight:'bold',marginLeft:'10px',border:'none'}}>start campaign</button>
                <button  style={{padding:'10px',fontSize:'10px',color:'white', backgroundColor:'#6100B3',fontWeight:'bold',border:'none',marginRight:'20px',marginLeft:'10px'}}><img src={shoppingbag}width={10} alt='bag' height={10} style={{color:'white',fontWeight:'bold'}}/></button>
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