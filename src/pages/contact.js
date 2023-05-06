




import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import messageicon from '../components/images/messageicon.png'
import telephone from '../components/images/telephone.png'
import location from '../components/images/location.png'
import '../contactus.css'
import Navbarcrowd from '../components/navbar';
import Contactform from '../components/contactform';
import SimpleMap from '../components/contactusmapcomponent';
import Areyouhappy from '../components/areyouhappy';
import Footer from '../components/footer';

const Contactusfirstcomponent = () =>{
    return(
        <div>
            <Navbarcrowd/>
            <div className="contactfirstcomponentdiv">

            <p className='contactusheading'>Contact Us</p>
             {/* <p>Home &gt></p>  */}
             <p className='contactusheadingbelowtext'>Home <span style={{margin:'0px 10px'}}> &gt;</span>  Contact</p>
            </div>
            <div>
                <div className='contactsecondcompdiv'>
                    {/* <Container  className='contactseconcompcontainer'> */}

                <Row className='contactseconcompcontainerrow'>
        <Col lg={4} className='secondcompcol'>
            <div>
                <div className='messageimgdiv'><img className='messageimage' src={messageicon}/></div>
                <p className='contactcompsecondmessageheading'>Mail Here</p>
                <p className='contactcompsecondmessagebelowtext'>info@example.com</p>
                <p className='contactcompsecondmessagebelowtext'>info@webmail.com</p>
            </div>
        </Col>
        <Col lg={4} className='secondcompcol'>
            <div>
                <div className='messageimgdiv'><img className='messageimage' src={location}/></div>
                <p className='contactcompsecondmessageheading'>Visit Here</p>
                <p className='contactcompsecondmessagebelowtext'>27 Division St, New York, NY 10002,</p>
                <p className='contactcompsecondmessagebelowtext'>Jaklina, United Kingpung</p>
            </div>

        </Col>
        <Col lg={4} className='secondcompcol'>
            <div>
                <div className='messageimgdiv'><img className='messageimage' src={telephone}/></div>
                <p className='contactcompsecondmessageheading'>Call Here</p>
                <p className='contactcompsecondmessagebelowtext'>+8 (123) 985 789</p>
                <p className='contactcompsecondmessagebelowtext'>+787 878897 87</p>
            </div>

        </Col>
      </Row>
                    {/* </Container> */}
                </div>
            </div>
                    <Contactform/>
                    <SimpleMap/>
                    <Areyouhappy/>
                    <Footer/>

        </div>
    )
}

export default Contactusfirstcomponent