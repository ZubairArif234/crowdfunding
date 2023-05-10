

import barkedlight from './images/barkedlight.png'
import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
// import twitter from './images/twitter.png'
import linkedin from './images/linkedin.png'
import behance from './images/behance.png'
import footerimgone from './images/footerimgone.png'
import footerimgtwo from './images/footerimgtwo.png'
import footerimgthree from './images/footerimgthree.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import youtube from './images/youtube.png'


function Footer (){
    return (
        <div className='footermaindiv'>
            <div className='makemaindivfooter'>
                <div className='footerblockonediv'>
                <Row style={{margin:'0'}}>
        <Col md={3} lg={3}>
                    <ul className='footerblockone'>
                        <li><img className='barkedlight' src={barkedlight}/></li>
                        <li><div style={{display:'flex',justifyContent:'flex-start' , gap:'15px' }}>
                            <img src={facebook} />
                            <img src={twitter} />
                            <img src={behance} />
                            <img src={linkedin}/>
                            <img src={youtube}/>
                            </div></li>
                        <li  className='footerblockoneheading'>London, UK</li>
                        <li className='footerblockonebelowtext'>13/A, Polar Garden City, London, UK</li>
                        <li style={{color:'#1B70F0', fontWeight:'500', textTransform:'uppercase'}}>Find Us On Map</li>
                    </ul>
        
        </Col>
        <Col md={2} lg={3}>
        <ul className='footerblockone'>
                        <li><p className='footerlastdivheading'>Campaign</p></li>
                        <li className='footerbelowtext'>Start Your Campaign</li>
                        <li  className='footerbelowtext'>Pricing Campaign</li>
                        <li  className='footerbelowtext'>Campaign Support</li>
                        <li className='footerbelowtext'>Trust & Safety</li>
                        <li className='footerbelowtext'>Support</li>
                        <li className='footerbelowtext'>Terms of Use</li>
                        <li className='footerbelowtext'>Privacy Policy</li>
                       
                    </ul>
        </Col>
        <Col md={2} lg={2}>
        <ul className='footerblockone'>
                        <li><p  className='footerlastdivheading'>Explore</p></li>
                        <li className='footerbelowtext'>Rock</li>
                        <li className='footerbelowtext'>Pop</li>
                        <li className='footerbelowtext'>Hip Hop</li>
                        <li className='footerbelowtext'>Blues</li>
                        <li className='footerbelowtext'>Jazz</li>
                        <li className='footerbelowtext'>Classical</li>
                        {/* <li>Privacy Policy</li> */}
                       
                    </ul>
        </Col>
        <Col md={5} lg={4}>
        <ul className='footerblockone'>
                        <li><p  className='footerlastdivheading'>News Feeds</p></li>
                        <li className='footerlastdivimgandtext'>
                            <div className='footerlastdivimgdiv'>
                            <img className='footerlastdivimages'  src={footerimgone}/>
                            </div>
                            <div className='footerlastdivtextdiv'>
                                <p className='footerbelowtext'>Dolor sit amet, consectet is was adipisicing.</p>
                                <p className='footerbelowlasttext'>12 June 2018</p>
                                
                                </div>
                                </li>
                        <li className='footerlastdivimgandtext'><div className='footerlastdivimgdiv'>
                            <img className='footerlastdivimages' src={footerimgtwo}/>
                            </div>
                            <div className='footerlastdivtextdiv'>
                                <p className='footerbelowtext'>Dolor sit amet, consectet is was adipisicing.</p>
                                <p className='footerbelowlasttext'>12 June 2018</p>
                                
                                </div></li>
                        <li className='footerlastdivimgandtext'><div className='footerlastdivimgdiv'>
                            <img className='footerlastdivimages' src={footerimgthree}/>
                            </div>
                            <div className='footerlastdivtextdiv'>
                                <p className='footerbelowtext'>Dolor sit amet, consectet is was adipisicing.</p>
                                <p className='footerbelowlasttext'>12 June 2018</p>
                                
                                </div></li>
                        {/* <li className='footerlastdivimgandtext'><div className='footerlastdivimgdiv'>
                            <img  src={footerimgone}/>
                            </div>
                            <div className='footerlastdivtextdiv'>
                                <p className='footerbelowtext'>Dolor sit amet, consectet is was adipisicing.</p>
                                <p className='footerbelowlasttext'>12 June 2018</p>
                                
                                </div></li> */}
                        {/* <li>Jazz</li>
                        <li>Classical</li> */}
                        {/* <li>Privacy Policy</li> */}
                       
                    </ul>
        </Col>
      </Row>
                </div>
                
            <div className='lastestfooterblock'>
                <Row>
                    <Col xs={12} lg={6} className='footerendcolums' >
                <p className='lastestfooterblocktext'>Copyright All Right Reserved By DotClick</p>
                    </Col>
                    <Col xs={12} lg={6} className='footerendcolums' >
                    
                <div className='lastestfooterblockimgdiv'>
                    <div className='lastestfooterblockimgsolodiv'>

                    <img className='lastestfooterblockimgsoloimg' src={facebook} />
                    </div>
                    <div className='lastestfooterblockimgsolodiv'>

                    <img className='lastestfooterblockimgsoloimg'  src={twitter} />
                    </div>
                    <div className='lastestfooterblockimgsolodiv'>

                    <img className='lastestfooterblockimgsoloimg'  src={behance} />
                    </div>
                    <div className='lastestfooterblockimgsolodiv'>

                    <img className='lastestfooterblockimgsoloimg'  src={linkedin} />
                    </div>
                    <div className='lastestfooterblockimgsolodiv'>

                    <img  className='lastestfooterblockimgsoloimg' src={youtube} />
                    </div>
                </div>
                    </Col>
                </Row>
                </div>
            </div>
        </div>
    )
}
export default Footer;