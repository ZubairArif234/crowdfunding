


import { Col, Row } from "react-bootstrap"
import gittar from './images/gittarimg.png'
import heartbeats from './images/ongoingheartbeatsimg.png'


import '../ongoing.css'

const Ongoingfirstcomp = ({heading , detailtext , navtextone , navtexttwo , sideimg , below}) =>{
    return(
        <div>
            <Row className="ongoingfirstcomp">
                <Col xs={12} lg={6} className="ongoingfirstcompcol">
                <p className=" ongoingfirstcompheading">{heading}</p>
                <p className="ongoingfirstcomptext">{detailtext}</p>
                <p className="ongoingfirstcomptextbelow"> {navtextone} <span style={{margin:'20px'}}> &gt;</span> <span style={{color:' #1B70F0'}}>{navtexttwo}</span></p>
                </Col>
                <Col xs={12} lg={6} className="ongoingfirstcompcolimg">
                <img src={sideimg} className="ongoinggittarimg"/>
                </Col>
            </Row>
            {/* <img src={below} className="ongoingheartbeatsimg" /> */}
        </div>
    )
}
export default Ongoingfirstcomp