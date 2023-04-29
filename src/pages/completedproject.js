
import Navbarcrowd from "../components/navbar"
import Ongoingfirstcomp from "../components/ongoingfirstcopmt"
import Completedprojectcard from "../components/completedprojectcards";
import populararr from "../api";
import { useState } from "react";
import { Pagination } from 'antd';
import '../App.css'
import Comeandjoinus from "../components/aboutuscomeandjoinus";
import Areyouhappy from "../components/areyouhappy";
import Footer from "../components/footer";
import completedheadphone from '../components/images/completedheadphone.png'
import completedwaves from '../components/images/completedwaves.png'

const Completedproject = () => {
  const [arrlength, setarrlength] = useState(6);
  const [filterarr, setfilterarr] = useState('');

  let arr = populararr.slice(0, arrlength);

  function dreamnavpclick(category) {
    setfilterarr(category);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentCards = populararr.slice(startIndex, endIndex);

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  return (
    <div>
      <Navbarcrowd />
      <Ongoingfirstcomp heading='Completed Projects'
      detailtext ='List as many team members as you want in two layout modes: standard & carousel. You can control and change the features of each.'
      navtext='Home &gt; Project Done'
      sideimg={completedheadphone}
      below={completedwaves}
      />
      <img src={completedwaves} className="completedwavesimg" />
      <div style={{backgroundColor:'#F9FAFF', paddingTop:'80px' ,marginTop:'10px'}}>
      <br />
        <div className="popularmaindiv">
          <p className='ourfeaturetext'><span className='featuredash'></span>More Projects</p>
          <div><button className='investmentbtn'>other projects</button></div>
          <p className='investmentheading'>Projects Done</p>
          <div className=" ongoingpopularcard popularcarddiv " >
            {currentCards.map((x) => {
              console.log(x.heading);
              return (
                <Completedprojectcard
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
          <Pagination 
          className="ongoingpagination"
        //   borderRadius={8}
        colorPrimary='#445677'
        // simple={'false'}
        size="large"
            current={currentPage}
            defaultCurrent={1}
            pageSize={pageSize}
            total={populararr.length}
            onChange={handlePageChange}
          />
          </div>
        </div>
      </div>


      <Comeandjoinus/>
      <Areyouhappy/>
      <Footer/>
    </div>
  )
}

export default Completedproject
