

import { BrowserRouter , Routes , Route } from "react-router-dom";
import Aboutus from "./about";
import Home from "./home";
import Ongoing from "./ongoing";
import Completedproject from "./completedproject";
import Blogpagecomponent from "./blog";

const Routing = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<Aboutus/>}/>
            <Route path="/ongoing" element={<Ongoing/>}/>
            <Route path="/completedproject" element={<Completedproject/>}/>
            <Route path="/blog" element={<Blogpagecomponent/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Routing