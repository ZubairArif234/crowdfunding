

import { BrowserRouter , Routes , Route } from "react-router-dom";
import Aboutus from "./about";
import Home from "./home";
import Ongoing from "./ongoing";

const Routing = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<Aboutus/>}/>
            <Route path="/ongoing" element={<Ongoing/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Routing