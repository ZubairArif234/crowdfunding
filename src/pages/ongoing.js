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
import gittar from '../components/images/gittarimg.png'
import heartbeats from '../components/images/ongoingheartbeatsimg.png'

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

  return (
    <div>
      <Navbarcrowd />
      <Ongoingfirstcomp
        heading='Ongoing Projects'
        detailtext='List as many team members as you want in two layout modes: standard & carousel. You can control and change the features of each.'
        navtext='Home  &gt;   Progress'
        sideimg={gittar}
        below={heartbeats}
      />
      <img src={heartbeats} className="ongoingheartbeatsimg" />
      <div style={{ backgroundColor: '#F9FAFF', paddingTop: '80px', marginTop: '10px' }}>
        <div className="popularmaindiv">
          <p className='ourfeaturetextinvest'><span className='featuredash'></span>MOre Projects</p>
          <div><button className='investmentbtn'>other projects</button></div>
          <p className='investmentheading'>Ongoing Projects</p>
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
              itemRender={paginationIcons}
            />
          </div>
        </div>
      </div>


      <Comeandjoinus />
      <Areyouhappy />
      <Footer />
    </div>
  )
}

export default Ongoing
