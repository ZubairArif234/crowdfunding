
import projectdetailsmallimgone from './images/projectdetailsmallimgone.png'
import projectdetailsecompimgtwo from './images/projectdetailsecompimgtwo.png'
import projectdetailsecimgone from './images/projectdetailsecimgone.png'
import projectdetailvevo from './images/projectdetailvevo.png'
import projectdetailsixdots from './images/projectdetailsixdots.png'
import { useState } from 'react'

const Projectdetailsecondcomp = () =>{

    const [secopmnavactiv , setsecopmnavactiv] = useState('campaign')
    function activnav  (e){
        setsecopmnavactiv( e.target.id);
    }
    return(
        <div>
            <div className='projectdetailnavigationmaindiv'>

            <div className='projectdetailnavigationdiv'>
                <p id='campaign' className= {secopmnavactiv == 'campaign' ?  'fw-bold  projectdetailactivnav' : 'fw-bold projectdetailsinglenav'} onClick={activnav}>Campaign</p>
                <p id='faq' className={secopmnavactiv == 'faq' ?  'fw-bold  projectdetailactivnav' : 'fw-bold projectdetailsinglenav'} onClick={activnav}>FAQ (1)</p>
                <p id='updates' className={secopmnavactiv == 'updates' ?  'fw-bold  projectdetailactivnav' : 'fw-bold projectdetailsinglenav'} onClick={activnav}>Updates (2)</p>
                <p id='comments' className={secopmnavactiv == 'comments' ?  'fw-bold  projectdetailactivnav' : 'fw-bold projectdetailsinglenav'} onClick={activnav}>Comments (0)</p>
            </div>
            </div>
            <div>
                <img className='projectdetailsecompimgone' src={projectdetailsecimgone}/>
                <div className='projectdetailsecompimgflex'>
                    <img className='projectdetailsecompimges' src={projectdetailsmallimgone}/>
                    <img className='projectdetailsecompimges' src={projectdetailsecompimgtwo}/>
                </div>
                <p className='projectdetailsfirstbigtext' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                <p className='projectdetailsfirstbigtext'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                <img className='projectdetailsecompimgone' src={projectdetailvevo}/>
            </div>
            <div className='projectdetaillastcompmaindiv'>
                <div className='projectdetaillastcomp'>
                    <div className='projectdetaillastcompdiv'>

                    <p className='projectdetaillastcompseclasttext'>Next Post</p>
                    <p className='projectdetaillastcomplasttext'>WEEKEND - PARTY</p>
                    </div>
                    <img src={projectdetailsixdots} style={{width:'40px' , height:'40px'}}/>
                </div>
            </div>
        </div>
    )
}


export default Projectdetailsecondcomp