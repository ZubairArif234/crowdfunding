import Navbarcrowd from "../components/navbar"
import Ongoingfirstcomp from "../components/ongoingfirstcopmt"
import Popularcard from "../components/popularcard";
import populararr from "../api";
import { useState } from "react";
import { Pagination } from 'antd';
import '../App.css'
import Comeandjoinus from "../components/aboutuscomeandjoinus";
import Areyouhappy from "../components/areyouhappy";
import Footer from "../components/footer";

const Ongoing = () => {
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
      <Ongoingfirstcomp />
      <div style={{backgroundColor:'#F9FAFF', paddingTop:'80px' ,marginTop:'10px'}}>
        <div className="popularmaindiv">
          <p className='ourfeaturetext'><span className='featuredash'></span>Our Features</p>
          <div><button className='investmentbtn'>features</button></div>
          <p className='investmentheading'>We Make Investing Easy</p>
          <div className=" ongoingpopularcard popularcarddiv " >
            {currentCards.map((x) => {
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

export default Ongoing
