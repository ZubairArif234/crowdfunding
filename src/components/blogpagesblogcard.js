

import blogpagecardblogimg from './images/blogpagecardimg.png'
import calander from './images/calendar.png'
import user from './images/user.png'
import messages from './images/comment.png'
import '../blogpage.css'
const Blogpageblogcards = () =>{
    return(
        <div className='blogpagecardmaindiv'>
            <img className='blogpagecardimg' src={blogpagecardblogimg}/>
            <div className='blogpagedivalldetailsdiv'>

            <div className='blogpagedivdetailsdiv'>
                <div className='blogpgecardsimgandtext'>
                    <img className='blogpgecardsinnerimg' src={calander}/>
                    <p  className='blogpgecardsinnerimgtext'>September 15, 2018</p>
                </div>
                <div className='blogpgecardsimgandtext'>
                    <img  className='blogpgecardsinnerimg' src={user}/>
                    <p className='blogpgecardsinnerimgtext'>Diboli B. Joly</p>
                </div>
                <div className='blogpgecardsimgandtext'>
                    <img  className='blogpgecardsinnerimg' src={messages}/>
                    <p className='blogpgecardsinnerimgtext'>23 Comments</p>
                </div>
            </div>
            <p className='blogpagecardheading fw-bold '>Lorem ipsum dolor sit amet, consectetur adipisic eiusmod tempor incididunt ut labore et dolore.</p>
            <p className='blogpagecardtext'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
            <button className='blogpagecardlastbtn'>read more</button>
            </div>

        </div>
    )
}
export default Blogpageblogcards