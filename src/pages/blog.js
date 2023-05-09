import Blogfirstcomp from "../components/blogfirstcomp"
import Blogpageblogcards from "../components/blogpagesblogcard"
import Navbarcrowd from "../components/navbar"
import Footer from "../components/footer"
import Areyouhappy from "../components/areyouhappy"
import '../blogpage.css'
import { Pagination } from 'antd';
import uppersign from '../components/images/uppersign.png'
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

    const paginationIcons = (_, type, originalElement) => {
        console.log(type, "a");
        if (type === "prev") {
          return <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            ariaHidden="true"
            viewBox="0 0 24 24"
            width={15}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            ></path>
          </svg>;
        }
        if (type === "next") {
          return <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            ariaHidden="true"
            width={15}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            ></path>
          </svg>;
        }
        return originalElement;
      };
    return(
        <div style={{position:'relative'}}>
            <Navbarcrowd/>
            <div className='uppersign'>
        <a href='#gototop'>

        <img src={uppersign}/>
        </a>
      </div>
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
            itemRender={paginationIcons}
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