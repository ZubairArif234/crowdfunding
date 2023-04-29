


import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import behance from './images/behance.png'
import linkedin from './images/linkedin.png'
import youtube from './images/youtube.png'
import profilepicabou from './images/profilepicabout.png'

const Blogpageaboutcard = () =>{
    return(
        <div className='blogpagesearchboxmaindiv'>
  <p className='ourfeaturetext'><span className='featuredash'></span>About Me</p>
     
     <div className='blogsearchb'>
        <img className='profilepicaboutblogpage' src={profilepicabou}/>
        <p className="blogpageaboutcardheading">Zulia Maron Duo</p>
        {/* <br /> */}
        <p  className="blogpageaboutcardtext">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <div className='aboutcardbelogpageimagesdiv'>
            <img className='aboutcardbelogpageimage' src={facebook}/>
            <img className='aboutcardbelogpageimage' src={twitter}/>
            <img className='aboutcardbelogpageimage' src={behance}/>
            <img className='aboutcardbelogpageimage' src={linkedin}/>
            <img className='aboutcardbelogpageimage' src={youtube}/>
        </div>
     </div>
        </div>
    )
}

export default Blogpageaboutcard