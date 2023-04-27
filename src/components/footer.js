

import barkedlight from './images/barkedlight.png'
import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
// import twitter from './images/twitter.png'
import linkedin from './images/linkedin.png'
import youtube from './images/youtube.png'


function Footer (){
    return (
        <div className='footermaindiv'>
            <div className='makemaindiv'>
                <div className='footerblockonediv'>
                    <ul className='footerblockone'>
                        <li><img className='barkedlight' src={barkedlight}/></li>
                        <li><div style={{display:'flex',justifyContent:'space-around' ,backgroundColor:'brown'}}>
                            <img src={facebook} />
                            <img src={twitter} />
                            <img src={linkedin}/>
                            <img src={youtube}/>
                            <img />
                            </div></li>
                        <li  className='footerblockoneheading'>London, UK</li>
                        <li>13/A, Polar Garden City, London, UK</li>
                        <li style={{color:'#1B70F0', fontWeight:'500', textTransform:'uppercase',letterSpacing:'2PX'}}>Find Us On Map</li>
                    </ul>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default Footer;