import Blogfirstcomp from "../components/blogfirstcomp"
import Blogpageblogcards from "../components/blogpagesblogcard"
import Navbarcrowd from "../components/navbar"
import '../blogpage.css'
import Blogpagesearchbox from "../components/blogpagesearchbox"
import Blogpageaboutcard from "../components/blogpageaboutcard"
import { Col, Row } from "react-bootstrap"
import Socialprofileblogpage from "../components/blogpagesocialprofile"


const Blogpagecomponent =  () =>{
    return(
        <div>
            <Navbarcrowd/>
            <Blogfirstcomp/>
            <div className="blogpagebohtcardsdiv">
                <Row style={{width:'100%' , marginLeft:'0px' , marginRight :'0px'}}>
<Col xs={12} lg={8}>
<div className="blogpageallcardsmap">
    
            <Blogpageblogcards/>
            <Blogpageblogcards/>
            <Blogpageblogcards/>
            <Blogpageblogcards/>
</div>
</Col>
<Col xs={12} lg={4}>
<div className="blogpageallinputsidecards">
    <Blogpagesearchbox/>
    <Blogpageaboutcard/>
    <Socialprofileblogpage/>
</div>
</Col>
                </Row>

            </div>

        </div>
    )
}
export default Blogpagecomponent