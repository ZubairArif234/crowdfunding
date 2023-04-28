import Aboutuscardscomp from "./aboutuscardscomp"



const Aboutuscardcomponent = () => {
    return(
        <div className='makemaindiv'>
            <p className='ourfeaturetext'><span className='featuredash'></span>Angle</p>
            <div><button className='investmentbtn'>Team</button></div>
            <p className='investmentheading'>Awesome Team</p>
            
            {/* <Container>
      
      <Row lg={3}>
        <Col sm={3}><Investcard/></Col>
        <Col><Investcard/></Col>
        <Col><Investcard/></Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container> */}
            <div className="popularcarddiv">
                <Aboutuscardscomp/>
                <Aboutuscardscomp/>
                <Aboutuscardscomp/>
                <Aboutuscardscomp/>
                <Aboutuscardscomp/>
                <Aboutuscardscomp/>
                {/* <Investcard heading='Get Founded' message='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' img={investbook}/>
                <Investcard heading='Safety Garanted' message='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' img={investradio}/>
                <Investcard heading='Most Money Raised' message='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' img={investmusic}/> */}
                
            </div>
        </div>
    )
}

export default Aboutuscardcomponent