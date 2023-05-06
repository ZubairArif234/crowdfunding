// import { Navbar } from "react-bootstrap"
import '../projectdetails.css';
// import { Card , Progress} from 'antd';
import Navbarcrowd from "../components/navbar"
import Projectdetailscardone from "../components/projectdetailcardone"
import Projectdetailsecondcomp from '../components/projectdetailsecondcomp';
import Areyouhappy from '../components/areyouhappy';
import Footer from '../components/footer';



const Projectdetails = () =>{
    return(
        <div>
            <Navbarcrowd/>
            <div className="contactfirstcomponentdiv">

            <p className='contactusheading'>Project Details</p>
             {/* <p>Home &gt></p>  */}
             <p className='contactusheadingbelowtext'>Home <span style={{margin:'0px 10px'}}> &gt;</span> Project Details</p>
            </div>
            <div className="makemaindiv">
<Projectdetailscardone/>
<Projectdetailsecondcomp/>

                
            </div>
<Areyouhappy/>
<Footer/>
        </div>
    )
}


export default Projectdetails