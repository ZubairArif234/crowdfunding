

import { Col, Row } from "react-bootstrap"
import personblue from './images/personblue.png'
import emailblue from './images/emailblue.png'
import pointblue from './images/pointblue.png'
import arrow from './images/arrow.png'
import telephoneblue from './images/telephoneblue.png'
import telephonefullycoloured from './images/telephonefullycoloured.png'

const Contactform = () =>{
    return(
        <div className="makemaindiv contactusform">
            {/* <div> */}

              <p className='ourfeaturetextinvest contactusfeatureline'><span className='featuredash'></span>Anything On your Mind</p>
            <div className="makecallbtn"><button className='  makecallbtncontact' style={{ color: 'white', backgroundColor: '#1B70F0',paddingTop:'10px', border: 'none' }}> <img src={telephonefullycoloured}width={10} style={{marginRight:'10px'}} />make call</button></div>
            <p className='investmentheading'>Estimate Your Idea</p>
            {/* </div> */}
            <div>
                <div className="inputtwouterdiv" style={{marginTop:'30px'}}>
                    <div xs={12} lg={6} className="formblock">
                    <img src={personblue} style={{width:'15px' , height:'15px'}}/>
                    <input placeholder="Your Name" className="contactusforminput"/>
                    </div>
                    <div xs={12} lg={6} className="formblock">
                    <img src={emailblue} style={{width:'15px' , height:'15px'}}/>
                    <input placeholder="Your Email" className="contactusforminput"/>
                    {/* <input/> */}
                    
                    </div>
                </div>
                <div className="inputtwouterdiv">
                    <div lg={6}  className="formblock">
                    <img src={telephoneblue} style={{width:'15px' , height:'15px'}}/>
                    <input placeholder="Your Phone" className="contactusforminput"/>
                    
                    </div>
                    <div lg={6} className="formblock">
                    <img src={pointblue} style={{width:'15px' , height:'15px'}}/>
                    <input placeholder="Your Subject" className="contactusforminput"/>
                    
                    </div>
                </div>
                <Row>
                    <Col  className="formblocktextarea">
                    <img src={emailblue} style={{width:'15px' , height:'15px',marginTop:'10px'}}/>
                    <textarea placeholder="Your Messages" className="contactusformtextarea" rows="10" ></textarea>
                    
                    </Col>
                    
                </Row>
            </div>
                <div className="contactusformbtndiv">
                <button style={{marginBottom:'0px'}} className='blogarrow comeandjoinusbtncontactus' >get action <img className='blogarrobtn comeandjoinusbtnarrow' src={arrow} /></button>
                </div>
        </div>
    )
}

export default Contactform