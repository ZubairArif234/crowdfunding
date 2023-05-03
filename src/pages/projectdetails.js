import { Navbar } from "react-bootstrap"
import '../projectdetails.css';
import { Card , Progress} from 'antd';
import Navbarcrowd from "../components/navbar"
import Projectdetailscardone from "../components/projectdetailcardone"



const Projectdetails = () =>{
    return(
        <div>
            <Navbarcrowd/>
            <div className="contactfirstcomponentdiv">

            <p className='contactusheading'>Project Details</p>
             {/* <p>Home &gt></p>  */}
             <p className='contactusheadingbelowtext'>Home &gt; Project Details</p>
            </div>
            <div className="makemaindiv">
<Projectdetailscardone/>

                
            </div>
        </div>
    )
}


export default Projectdetails