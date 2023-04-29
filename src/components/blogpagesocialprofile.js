

import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import behance from './images/behance.png'
import linkedin from './images/linkedin.png'
import youtube from './images/youtube.png'

const Socialprofileblogpage = () =>{
    return(
        <div  className='blogpagesearchboxmaindiv'>
            <p className='ourfeaturetext'><span className='featuredash'></span>Social Profile</p>
            <div className='aboutcardbelogpageimagesdiv'>
            <img className='socialimagesblogpage' src={facebook}/>
            <img className='socialimagesblogpage' src={twitter}/>
            <img className='socialimagesblogpage' src={behance}/>
            <img className='socialimagesblogpage' src={linkedin}/>
            <img className='socialimagesblogpage' src={youtube}/>
        </div>
        </div>
    )
}

export default Socialprofileblogpage