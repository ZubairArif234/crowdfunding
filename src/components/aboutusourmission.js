

import aboutusouemissionimgpic from './images/aboutusouemissionpicimg.png'
import Aboutusourmissionimg from './images/aboutusmissionbackimg.png'


const Aboutusourmission = () =>{
    return(
        <div >
            <div className='communitydivmission' style={{marginTop:'60px', }}>
                <div  className="communitydivpartonemission"><img className='aboutmissionimg' src={aboutusouemissionimgpic} /></div>
                <div  className="communitydivpartonemission"><p className='ourfeaturetextinvest'><span className='featuredash'></span>Our Mission </p>
<p className=" communityheadingupdate">Our Mission Is To Help Bring Creative Project To Life.</p>
<p className='aboutusseccomptextone'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
<p className='aboutusseccomptextone'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
</div>
            </div>
            {/* <div className="communityupperblockdivbelowimg">

            </div> */}
            <img className='missionbackimg' src={Aboutusourmissionimg}/>
            <div className="missionlowerblockdiv">
                    <p className="communityflyingtextdiv">“BACKED is one of those platforms that gives you space to work with people who know you, love you, and support you.”</p>
               <p style={{fontWeight:'bold',fontFamily:'Poppins'}}>- Jason Derula</p>
                </div>
        </div>
    )

}

export default Aboutusourmission