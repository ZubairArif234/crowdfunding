

import { BrowserRouter , Routes , Route } from "react-router-dom";
import Aboutus from "./about";
import Home from "./home";

const Routing = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<Aboutus/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Routing