import Blogcard from "./blogcard"
import Investcard from "./investcard"
import blog1 from './images/blog1.png'
import blog2 from './images/blog2.png'
import blog3 from './images/blog3.png'


function Blogbox (){
    return(
        <div style={{backgroundColor:'#F9FAFF'}}>

            <div style={{paddingTop:'60px', }} className='makemaindiv' >
            <p className='ourfeaturetext'><span className='featuredash'></span> news feeds </p>
            <div><button style={{border:'1px solid #EAD2FF'}} className='investmentbtn' >news updates</button></div>
            <p className='investmentheading'>Latest Posts From Our Blog</p>

<div style={{marginTop:'20px'}} className="investcarddiv">
    <Blogcard img={blog1} heading="Dorem ipsum dolor sit amet consectetur adilisicinl." message="Consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et lau dolore magna aliqua enim." uppertext1='Salim Rana' date='Jan 5, 2018'/>
    <Blogcard img={blog2} heading="But I must explain to you how all this mistaken ." message="Consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et lau dolore magna aliqua enim." uppertext1='Tabassum' date='May 16, 2018'/>
    <Blogcard img={blog3} heading="On the other hand, we deno unce with righteous." message="Consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et lau dolore magna aliqua enim." uppertext1='John Doe' date='Feb 18, 2018'/>
   
</div>

        </div>
        </div>
    )
}
export default Blogbox