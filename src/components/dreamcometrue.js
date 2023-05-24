


// import Popularcard from "./popularcard"
// import populararr from "../api"
// import { useState } from "react";

// function Dreamcometrue (){
//     const [arrlength , setarrlength] = useState(6)
//     // console.log(arr);
    
//     const [filterarr , setfilterarr] = useState('')
    
//     let arr = populararr.slice(0 ,arrlength);
//     let filter;
//     function deramnavpclick (find){
//         setfilterarr(find)
//         return arr= arr.filter((a)=> a.catogories == filterarr)
//     }
//     console.log(Dreamcometrue);
//     return(
//         <div className="popularsuparmaindiv">

//         <div className="popularmaindiv">
//             {/* <p className="populartextblue">Popular causes</p>
//             <p className="popularheading">Back Before The Time Expires</p> */}
        
//         <div style={{width:'85%'}} className='makemaindiv'>

//             <p className='ourfeaturetext'><span className='featuredash'></span>MOre Projects</p>
//             <div><button className='investmentbtn' style={{backgroundColor:'transparent'}}>Other Projects</button></div>
//             <p className='investmentheading'>Your Dream Comes True</p>
//         </div>

//         <div className="dreamlastestdiv">
//             <div className="dreamlastdiv">
//                 <p>kll</p>
//             </div>
//             <div className="deamlastthirddiv"><p>lpo</p></div>
//             <div className="dreamlastsecdiv">
//                 <div className="alldreamnavp">

//                 <p className="dreamnav" onClick={() => arr.filter((a)=> a.catogories == filterarr)} >ROCK</p>
//                 <p className="dreamnav">POP</p>
//                 <p className="dreamnav">HIP HOP</p>
//                 <p className="dreamnav">BLUES</p>
//                 <p className="dreamnav">JAZZ</p>
//                 <p className="dreamnav">CLASSICAL</p>
//                 </div>
//                 </div>
//         </div>
//         <div className="popularcarddiv">
//             {
//                 filterarr !== '' ?
//                 arr.filter((a) => a.catogories === filterarr).map((x) => {
//                     console.log(x.heading);
//                     return (
//                         <Popularcard
//                             img={x.image}
//                             heading={x.heading}
//                             price1={x.price1}
//                             price2={x.price2}
//                             detail1={x.detail1}
//                             detail2={x.detail2}
//                             below1={x.below1}
//                             below2={x.below2}
//                         />
//                     );
//                 })
//                 :
//                 arr.map((x) => {
//                     console.log(x.heading);
//                     return (
//                         <Popularcard
//                             img={x.image}
//                             heading={x.heading}
//                             price1={x.price1}
//                             price2={x.price2}
//                             detail1={x.detail1}
//                             detail2={x.detail2}
//                             below1={x.below1}
//                             below2={x.below2}
//                         />
//                     );
//                 })
                 
//             }
//             {/* <Popularcard img ='kll' />
//             <Popularcard/>
//             <Popularcard/> */}
//         </div>
//         </div>
        
// <center>

//         {/* <button onClick={() => setarrlength(arrlength+3)} className="popmoreproj">more project</button> */}
// </center>
//         </div>
                        
//     )
// }
// export default Dreamcometrue


import Popularcard from "./popularcard";
import populararr from "../api";
import { useState } from "react";

function Dreamcometrue () {
    const [arrlength, setarrlength] = useState(6);
    const [filterarr, setfilterarr] = useState('');

    let arr = populararr.slice(0, arrlength);

    function dreamnavpclick(category) {
        setfilterarr(category);
    }

    return (
        <div className="">
            <div className="makemaindiv">
                {/* <div  className='makemaindiv popularcarddivsmall'> */}
                    <p className='ourfeaturetextinvest'><span className='featuredash'></span>More Projects</p>
                    <div className="investmentbtndiv"><button className='investmentbtndream' >Other Projects</button></div>
                    <p className='investmentheading'>Live Campaigns</p>
                {/* </div> */}
                <div className="dreamlastestdiv">
                    {/* <div className="dreamlastdiv">
                        <p>kll</p>
                    </div> */}
                    <div className="deamlastthirddiv"><p>lpo</p></div>
                    <div className="deamlastthirdlastdiv"><p>lpo</p></div>
                    <div className="dreamlastsecdiv">
                        <div className="alldreamnavp">
                            <p className="dreamnav" onClick={() => dreamnavpclick('rock')}>ROCK</p>
                            <p className="dreamnav" onClick={() => dreamnavpclick('pop')}>POP</p>
                            <p className="dreamnav" onClick={() => dreamnavpclick('hip hop')}>HIP HOP</p>
                            <p className="dreamnav" onClick={() => dreamnavpclick('blues')}>BLUES</p>
                            <p className="dreamnav" onClick={() => dreamnavpclick('jazz')}>JAZZ</p>
                            <p className="dreamnav" onClick={() => dreamnavpclick('classical')}>CLASSICAL</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="popularmaindiv">

                <div className="popularcarddiv">
                    {arr.filter((a) => a.catogories == filterarr || filterarr === '').map((x) => {
                        console.log(x.heading);
                        return (
                            <Popularcard
                            img={x.image}
                            heading={x.heading}
                            price1={x.price1}
                            price2={x.price2}
                            detail1={x.detail1}
                            detail2={x.detail2}
                            below1={x.below1}
                            below2={x.below2}
                            />
                            );
                        })}
                </div>
            </div>
                        {/* </div> */}
            <center>
                {/* <button onClick={() => setarrlength(arrlength+3)} className="popmoreproj">more project</button> */}
            </center>
        </div>
    );
}

export default Dreamcometrue;
