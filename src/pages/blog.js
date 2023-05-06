import Blogfirstcomp from "../components/blogfirstcomp"
import Blogpageblogcards from "../components/blogpagesblogcard"
import Navbarcrowd from "../components/navbar"
import Footer from "../components/footer"
import Areyouhappy from "../components/areyouhappy"
import '../blogpage.css'
import { Pagination } from 'antd';
import Blogpagesearchbox from "../components/blogpagesearchbox"
import Blogpageaboutcard from "../components/blogpageaboutcard"
import { Col, Row } from "react-bootstrap"
import Socialprofileblogpage from "../components/blogpagesocialprofile"
import Intagramfeedblogpage from "../components/intagramfeedsblogpage"
import Catogoriesblogpage from "../components/catogoriescardblogpage"
import Popularfeedblogpage from "../components/popularfeesblogpage"
import quotationmark from '../components/images/quotation-mark.png'
import blogadvartisement from '../components/images/blogadvertisement.jpg'

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
            <div className="quoteofblogpagemaindiv" >
                <div className="quoteofblogpage">

                <img className="quotesmarkimg" src={quotationmark}/>
                <p className="blogqouteheading">Lorem ipsum dolor sit amet, consectetur cing elit, sed do eiusmod tempor.</p>
                </div>
                <p className="quoteauthername">- Rosalina Pong</p>
            </div>
</div>

<Pagination 
          className="ongoingpagination"
        //   borderRadius={8}
        colorPrimary='##EAEBEC'
        // simple={'false'}
        size="large"
            current={2}
            defaultCurrent={2}
            pageSize={7}
            total={7}
            // onChange={handlePageChange}
          />
</Col>
<Col xs={12} lg={4}>
<div className="blogpageallinputsidecards">
    <Blogpagesearchbox/>
    <Blogpageaboutcard/>
    <Popularfeedblogpage/>
    <Catogoriesblogpage/>
    <Socialprofileblogpage/>
    <Intagramfeedblogpage/>
    <div className="blogpagesearchboxmainadvartisementdiv">

    <img className="blogpagesearchboxmainadvartisement" src={blogadvartisement}/>
    </div>
</div>
</Col>
                </Row>

            </div>
                <Areyouhappy/>
                <Footer/>

        </div>
    )
}
export default Blogpagecomponent