

import { BrowserRouter , Routes , Route } from "react-router-dom";
import Aboutus from "./about";
import Home from "./home";
import Ongoing from "./ongoing";
import Completedproject from "./completedproject";
import Blogpagecomponent from "./blog";
import Contactusfirstcomponent from "./contact";
import Checkoutform from "./checkout";
import Projectdetails from "./projectdetails";
import Loginpage from "./loginpage";
import Signuppage from "./signuppage";
import Campaiganpage from "./campaiganform";
import Forfetpassword from "./forgetpass";
import Newpassword from "./newpassword";

const Routing = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<Aboutus/>}/>
            <Route path="/ongoing" element={<Ongoing/>}/>
            <Route path="/projectdetails" element={<Projectdetails/>}/>
            <Route path="/completedproject" element={<Completedproject/>}/>
            <Route path="/blog" element={<Blogpagecomponent/>}/>
            <Route path="/contact" element={<Contactusfirstcomponent/>}/>
            <Route path="/checkout" element={<Checkoutform/>}/>
            <Route path="/campagianpage" element={<Campaiganpage/>}/>
            <Route path="/login" element={<Loginpage/>}/>
            <Route path="/signup" element={<Signuppage/>}/>
            <Route path="/forgetpassword" element={<Forfetpassword/>}/>
            <Route path="/newpassword" element={<Newpassword/>}/>
            <Route path="*" element={<p style={{display:'flex' , alignItems:'center' , justifyContent:'center'}}>404 page not found</p>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Routing