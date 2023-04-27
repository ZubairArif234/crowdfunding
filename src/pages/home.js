// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
// import Planbox from './components/planbox';
import Makeinvestment from '../components/makeinvesting';

import Popularseries from '../components/popularcause';
import Navbarcrowd from '../components/navbar';
import Homefront from '../components/homefront';
import Makeiteasier from '../components/makeiteasier';
import Dreamcometrue from '../components/dreamcometrue';
import Upcoming from '../components/upcomingevent';
import Blogbox from '../components/blog';
import Scribenow from '../components/subscribenow';
import Areyouhappy from '../components/areyouhappy';
import Footer from '../components/footer';
// import Investcard from './components/investcard';

function Home() {
  return (
    <div className="App">
      <Navbarcrowd/>
      {/* <Planbox/> */}
      <Homefront/>
      <Makeinvestment/>
      <Popularseries/>
      <Makeiteasier/>
      {/* <Popularseries/> */}
      <Dreamcometrue/>
      <Upcoming/>
      <Blogbox/>
      <Scribenow/>
      <Areyouhappy/>
      <Footer/>
      {/* <Investcard/> */}
    </div>
  );
}

export default Home;
