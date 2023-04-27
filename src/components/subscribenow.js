
import arrow from './images/arrow.png'
import news1 from './images/news1.png'
import news2 from './images/news2.png'

function Scribenow (){
    return(
        <div className='subscribemaindiv' style={{backgroundColor:'#140F27' , }}>
            <img className='blogimgone' src={news1}/>
            <img  className='blogimgtwo' src={news2}/>
             <div style={{paddingTop:'60px',display:'flex', flexWrap:'wrap',justifyContent:'space-between' }} className='makemaindiv' >
                <div><p style={{fontFamily:'rubiklight'}} className='ourfeaturetext'>We are here for you</p>
                <p style={{color:'white'}} className='investmentheading' >Subscribe Now</p></div>
                <div className="inputandbtnblog" >

                <div className="inpurbloginnerdiv">
                    <input className='bloginputarea' placeholder='Enter your email address'/><button className='blogarrow'>Subscribe <img className='blogarrobtn' src={arrow} /></button>
                </div>
                </div>
             </div>

        </div>
    )
}
export default Scribenow