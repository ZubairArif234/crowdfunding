import easierlineone from './images/easieslineone.png'
import bluedot from './images/bluedot.png'
import play from './images/play.png'

function Makeiteasier() {
    return (
        <div className="makemaindiv" style={{marginBottom:'80px'}}>
            <p className='ourfeaturetextinvest'><span className='featuredash'></span>How it works</p>
            <div><button className='investmentbtn' style={{ color: 'white', backgroundColor: '#1B70F0',paddingTop:'10px', border: 'none' }}> <img src={play}width={10} style={{marginRight:'10px'}} /> how work</button></div>
            <p className='investmentheading'>BACKED makes it easier</p>
            <div className='lineandnumbers'>

                <div className="allnumbresdiv">
                    <img src={bluedot} className='bluedot' />
                    <img src={easierlineone} className='lineone' /><img src={bluedot} className='bluedot' />
                    {/* <img src={easierlineone} className='lineone'/> */}
                    <img src={easierlineone} className='lineone' /><img src={bluedot} className='bluedot' />
                </div>
                <div className='allnumberdivtwo'>
                    <div className="easiernumbres easiernumbresone"> <p className="easiernumone">01</p>
                        <p className="numonedetail">Register With <br /> Your Real Identity</p></div>
                    <div className="easiernumbres easiernumbrestwo"> <p className="easiernumone">02</p>
                        <p className="numonedetail"> Give Details With <br /> Innovative Idea</p></div>
                    <div className="easiernumbres easiernumbresthree"> <p className="easiernumone">03</p>
                        <p className="numonedetail"> & Finally Get <br />Awesome Backers</p></div>

                </div>
            </div>
        </div>
    )
}

export default Makeiteasier