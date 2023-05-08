
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import investbook from './images/investbook.png'
import investradio from './images/investradio.png'
import investmusic from './images/investmusic.png'
import '../App.css';
import Investcard from './investcard';

function Makeinvestment() {
    return(
        <div className='makemaindiv'>
            <p className='ourfeaturetextinvest'><span className='featuredash'></span>Our Features</p>
            <div className='investmentbtndiv'><button className='investmentbtn'>features</button></div>
            <p className='investmentheading'>We Make Investing Easy</p>
            
            
            {/* <Container>
      
      <Row lg={3}>
        <Col sm={3}><Investcard/></Col>
        <Col><Investcard/></Col>
        <Col><Investcard/></Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container> */}
            <div className='investcarddiv'>
                <Investcard heading='Get Founded' message='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' img={investbook}/>
                <Investcard heading='Safety Garanted' message='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' img={investradio}/>
                <Investcard heading='Most Money Raised' message='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' img={investmusic}/>
                
            </div>
        </div>
    )
}


export default Makeinvestment