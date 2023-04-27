

import mlogo from './images/mlogo.png'
import hexagon from './images/hexagon.png'
import fugiat from './images/fugiat.png'
import sband from './images/sband.png'
import horse from './images/horse.png'


function Areyouhappy (){
    return(
        <div className="areyouhappymaindiv">
             <div className='makemaindiv'>
                <center>

                <p className="areyouhapptext">What Client Working With BACKED And They Are Happy</p>
                </center>
                <div className='icondiv'>
                    <img className='iconone' src={mlogo}/>
                    <img  className='iconone' src={hexagon}/>
                    <img  className='iconone' src={fugiat}/>
                    <img  className='iconone'  src={mlogo}/>
                    <img  className='iconone'  src={sband}/>
                    <img  className='iconone'  src={horse}/>

                </div>
             </div>

        </div>
    )
    }

    export default Areyouhappy