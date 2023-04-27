import Navbarcrowd from "../components/navbar"
import '../about.css'
import Aboutusfirstcomp from "../components/aboutusfirstcomp"
import Aboutuscommunitcomponent from "../components/aboutuscommunity"
import Aboutusourmission from "../components/aboutusourmission"
import Comeandjoinus from "../components/aboutuscomeandjoinus"
import Makeiteasier from "../components/makeiteasier"
import Areyouhappy from "../components/areyouhappy"
import Footer from "../components/footer"
import Aboutuscardcomponent from "../components/aboutuscardcomponent"


const Aboutus = () =>{
    return(
        <div>
            <Navbarcrowd/>
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