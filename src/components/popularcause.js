import Popularcard from "./popularcard"
import populararr from "../api"
import { useState } from "react";

function Popularseries (){
    const [arrlength , setarrlength] = useState(6)
    const arr = populararr.slice(0, arrlength);
    console.log(arr);
    
    return(
        <div className="popularsuparmaindiv">

        <div className="popularmaindiv">
            <p className="populartextblue"><span className='featuredash'> </span>Popular causes</p>
            <p className="popularheading">Live Campaigns</p>
        <div className="popularcarddiv">
            {
                arr.map((x) => {
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
                  })
            }
            {/* <Popularcard img ='kll' />
            <Popularcard/>
            <Popularcard/> */}
        </div>
        </div>
        
<center>

        <button onClick={() => setarrlength(arrlength+3)} className="popmoreproj">more project</button>
</center>
        </div>
                        
    )
}
export default Popularseries