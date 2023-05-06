
import { Col, Row } from 'react-bootstrap'
import arrow from './images/arrow.png'
import news1 from './images/news1.png'
import news2 from './images/news2.png'

function Scribenow() {
    return (
        <div className='subscribemaindiv' style={{ backgroundColor: '#140F27', }}>
            <img className='blogimgone' src={news1} />
            <img className='blogimgtwo' src={news2} />
            <div style={{ paddingTop: '60px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }} className='makemaindiv' >
                <div><p className='ourfeaturetextinvest'><span className='featuredash'></span>We are here for you</p>
                    <p style={{ color: 'white' }} className='investmentheading' >Subscribe Now</p></div>
                <div className="inputandbtnblog" >

                    <div className="inpurbloginnerdiv d-flex">
                        {/* <Row> */}
                            {/* <Col xs={12} lg={8}> */}
                                <input className='bloginputarea w-75' placeholder='Enter your email address' />
                            {/* </Col> */}

                            {/* <Col xs={12} lg={4}> */}
                                <button className='blogarrowsubus '>Subscribe <img className='arrowimgsubs' src={arrow} /></button>
                            {/* </Col> */}
                        {/* </Row> */}
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Scribenow