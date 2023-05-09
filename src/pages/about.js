import Navbarcrowd from "../components/navbar"
import '../about.css'
import Aboutusfirstcomp from "../components/aboutusfirstcomp"
import Aboutuscommunitcomponent from "../components/aboutuscommunity"
import Aboutusourmission from "../components/aboutusourmission"
import Comeandjoinus from "../components/aboutuscomeandjoinus"
import Makeiteasier from "../components/makeiteasier"
import Areyouhappy from "../components/areyouhappy"
import Footer from "../components/footer"
import uppersign from '../components/images/uppersign.png'
import Aboutuscardcomponent from "../components/aboutuscardcomponent"


const Aboutus = () =>{
    return(
        <div style={{position:'relative'}}>
            <Navbarcrowd/>
            <div className='uppersign'>
        <a href='#gototop'>

        <img src={uppersign}/>
        </a>
      </div>
            <Aboutusfirstcomp/>
            <Aboutuscommunitcomponent/>
            <Aboutusourmission/>
            <Aboutuscardcomponent/>
            <Comeandjoinus/>
            <Makeiteasier/>
            <Areyouhappy/>
            <Footer/>
        </div>
    )


}
export default Aboutus