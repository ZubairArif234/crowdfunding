


import { Col, Row } from "react-bootstrap"
import gittar from './images/gittarimg.png'
import heartbeats from './images/ongoingheartbeatsimg.png'


import '../ongoing.css'

const Ongoingfirstcomp = ({heading , detailtext , navtext , sideimg , below}) =>{
    return(
        <div>
            <Row className="ongoingfirstcomp">
                <Col xs={12} lg={6} className="ongoingfirstcompcol">
                <p className=" ongoingfirstcompheading">{heading}</p>
                <p className="ongoingfirstcomptext">{detailtext}</p>
                <p className="ongoingfirstcomptextbelow"> {navtext}</p>
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