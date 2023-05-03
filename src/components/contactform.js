

import { Col, Row } from "react-bootstrap"
import personblue from './images/personblue.png'
import emailblue from './images/emailblue.png'
import telephoneblue from './images/telephoneblue.png'
import pointblue from './images/pointblue.png'
import telephonefullycoloured from './images/telephonefullycoloured.png'

const Contactform = () =>{
    return(
        <div className="makemaindiv contactusform">
              <p className='ourfeaturetext'><span className='featuredash'></span>Anything On your Mind</p>
            <div><button className=' investmentbtn' style={{ color: 'white', backgroundColor: '#1B70F0',paddingTop:'10px', border: 'none' }}> <img src={telephonefullycoloured}width={10} style={{marginRight:'10px'}} />make call</button></div>
            <p className='investmentheadingcontact'>Estimate Your Idea</p>
            <div>
                <Row>
                    <Col className="formblock">
                    <img src={personblue} style={{width:'15px' , height:'15px'}}/>
                    <input placeholder="Your Name" className="contactusforminput"/>
                    </Col>
                    <Col  className="formblock">
                    <img src={emailblue} style={{width:'15px' , height:'15px'}}/>
                    <input placeholder="Your Email" className="contactusforminput"/>
                    {/* <input/> */}
                    
                    </Col>
                </Row>
                <Row>
                    <Col  className="formblock">
                    <img src={telephoneblue} style={{width:'15px' , height:'15px'}}/>
                    <input placeholder="Your Phone" className="contactusforminput"/>
                    
                    </Col>
                    <Col  className="formblock">
                    <img src={pointblue} style={{width:'15px' , height:'15px'}}/>
                    <input placeholder="Your Subject" className="contactusforminput"/>
                    
                    </Col>
                </Row>
                <Row>
                    <Col className="formblocktextarea">
                    <img src={emailblue} style={{width:'15px' , height:'15px',marginTop:'10px'}}/>
                    <textarea placeholder="Your Messages" className="contactusformtextarea" rows="10" ></textarea>
                    
                    </Col>
                    
                </Row>
            </div>
        </div>
    )
}

export default Contactform