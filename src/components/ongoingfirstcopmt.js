


import { Col, Row } from "react-bootstrap"
import gittar from './images/gittarimg.png'
import heartbeats from './images/ongoingheartbeatsimg.png'


import '../ongoing.css'

const Ongoingfirstcomp = () =>{
    return(
        <div>
            <Row className="ongoingfirstcomp">
                <Col xs={12} lg={6} className="ongoingfirstcompcol">
                <p className="fw-bold ongoingfirstcompheading">Ongoing Projects</p>
                <p className="ongoingfirstcomptext">List as many team members as you want in two layout modes: standard & carousel. You can control and change the features of each.</p>
                <p className="ongoingfirstcomptextbelow"> Home &gt; Progress</p>
                </Col>
                <Col xs={12} lg={6} className="ongoingfirstcompcolimg">
                <img src={gittar} className="ongoinggittarimg"/>
                </Col>
            </Row>
            <img src={heartbeats} className="ongoingheartbeatsimg" />
        </div>
    )
}
export default Ongoingfirstcomp