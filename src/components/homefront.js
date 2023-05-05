import { Progress } from "antd";
import levels from './images/levels.png'
import headphone from './images/Headphone.png'
import Planbox from "./planbox";


function Homefront() {
    return (
        <>
            <div className="homesupermaindiv">
                <div className="homedivone">
                    <p className="homedivonetext">Invest Your Amount With Our Project</p>
                    <div className="prgressanddetails">

                        <Progress
                            strokeColor="#6100B3"
                            percent={70}
                            trailColor='#19142E' 
                            showInfo={false}
                            style={{ height: "2px" }}
                        />
                        <div className="homeprogressdetails">
                            <div><p className="homepriceone">$32,678 <p className="homepricedetails">Pledged</p></p></div>
                            <div><p className="homepriceone">$34,467 <p className="homepricedetails" style={{ textAlign: "end" }}>Target</p></p></div>
                        </div>
                    </div>
                </div>
                <div className="homeimagelevels">
                    <img src={headphone} className='headphonepic' />
                    <img src={levels} className="imagelevels" />
                </div>
                <Planbox />
            </div>
        </>
    )
}

export default Homefront