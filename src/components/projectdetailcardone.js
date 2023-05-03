import { Col, Row } from "react-bootstrap"

import projectetailfirstimg from './images/projectdetailsfirstimg.png'
import { Card, Progress } from 'antd';

import arrow from './images/arrow.png'
import facebookgray from './images/facebookgray.png'
import twittergray from './images/twittergray.png'
import behancegray from './images/behancegray.png'
import linkedingray from './images/linkedingray.png'




const Projectdetailscardone = () => {
    return (
        <div>
            <Row>
                <Col xs={4} lg={3} style={{ borderRight: '2px solid #E8F1FF' }}>
                    <p>First created</p>
                    <p>at London, UK</p>
                </Col>
                <Col xs={8} lg={9} style={{ paddingLeft: '20px' }}>
                    <p className='ourfeaturetext'><span className='featuredash'></span>MUSIC</p>

                    <p className='investmentheading'>BELIEVE - JUSTIN BIEBER</p>
                </Col>
            </Row>


            <p className="projectdetailsfirstbigtext">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>



            <div>
                <img className="projectdetailsfirstimg" src={projectetailfirstimg} />

                <div style={{marginTop:'20px'}}>

                    <Progress
                        strokeColor="#6100B3"
                        percent={80}
                        showInfo={false}
                        style={{ height: "3px" , marginBottom:'10px' }}
                    />
                    <Row className="priceanddetailrow" style={{marginTop:'10px'}}>
                        <Col className="projectdetailpriceanddetailstart">
                            <div>

                                <p className="popcardprice projectprogressdollarone">$32,678</p>
                                <p className="projectdetailcardpricebelowtext" >Pledged</p>
                            </div>
                        </Col>
                        <Col className="projectdetailpriceanddetailcenter">
                            <div>

                                <p className="projectprogressdollarone">$33,467</p>
                                <p className="projectdetailcardpricebelowtext" >Target</p>
                            </div>
                        </Col>
                        <Col className="projectdetailpriceanddetailcenter">
                            <div>

                                <p className="popcardprice projectprogressdollarone">300</p>
                                <p className="projectdetailcardpricebelowtext" >Backers</p>
                            </div>
                        </Col>
                        <Col className="projectdetailpriceanddetailend">
                            <div>

                                <p className="popcardprice projectprogressdollarone">07</p>
                                <p className="projectdetailcardpricebelowtext" >Days To Go</p>
                            </div>
                        </Col>
                    </Row>

                    <p className="projectdetailsfirstbigtext">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>

                    <div>
                        <Row>
                            <Col xs={6}>
                                <Row >
                                    <div className="amountinputandbtnrow">
                                        <Col xs={12} lg={6}>
                                            <input className="amountinputprojectdetailpage" placeholder="Enter your amount" />
                                        </Col>
                                        <Col xs={12} lg={6}>
                                            <button style={{width:'100%'}} className=' projectdetailsbtn blogarrow comeandjoinusbtn'>back this project <img className='blogarrobtn comeandjoinusbtnarrow' src={arrow} /></button>
                                        </Col>
                                    </div>
                                </Row>
                            </Col>
                            <Col xs={6}>
                            <div className='aboutcardbelogpageimagesdiv'>
                            <button  className=' projectdetailsbtn blogarrow comeandjoinusbtn'> <img style={{width:'20px',height:'20px'}} src={arrow} /> remind</button>
            <img className='aboutcardbelogpageimage' src={facebookgray}/>
            <img className='aboutcardbelogpageimage' src={twittergray}/>
            <img className='aboutcardbelogpageimage' src={behancegray}/>
            <img className='aboutcardbelogpageimage' src={linkedingray}/>
            {/* <img className='aboutcardbelogpageimage' src={youtube}/> */}
        </div>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        </div>
    )


}



export default Projectdetailscardone