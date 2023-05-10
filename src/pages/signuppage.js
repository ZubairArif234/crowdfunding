


import { Col, Row } from "react-bootstrap"
import '../login.css'
import loginimg from '../components/images/loginandsignupimg.png'
import googlelogin from '../components/images/googlelogin.png'
import Navbarcrowd from "../components/navbar"
import { Button, Checkbox, Form, Input } from 'antd';


const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

const Signuppage = () =>{
    return(
        <div>
            <Navbarcrowd/>
            <Row className="loginrowdiv">
                <Col  md={6} lg={7} className="loginpagecolone">
                    {/* <div className="loginimgdivcol"> */}
{/* <p className="loginpagecolonetext">hi zubair</p> */}
                    <img className="loginimgdivcol" src={loginimg}/>
                    {/* </div> */}
                </Col>
                <Col sm={12} md={6} lg={5} style={{backgroundColor:'#140F26'}}>
                        
         <div className="logindiv">
            <p className="loginformheading">Registration</p>
            <label className="loginformlabel">Name*</label>
            <br />
            <input type="text" className="loginforminput"/>
            <br />
            <label className="loginformlabel">Email*</label>
            <br />
            <input type="email" className="loginforminput"/>
            <br />
            <label className="loginformlabel">Password*</label>
            <br />
            <input type="password" className="loginforminput"/>
<br />
            <label className="loginformlabel">Re-Enter Password*</label>
            <br />
            <input type="password" className="loginforminput"/>
            <br />
{/* <br /> */}
<div className="loginformradiobtns">
<div>

            <input type="radio" id="investor" name="fav_language" value="HTML" className="loginformradiobtn"/>
<label for="investor" className="loginformradiobtnlabel" >As Investor</label>
</div>

{/* <br /> */}

{/* <p className="loginformradiobtnsortext">or</p> */}

<div>
{/* <> */}
            <input type="radio" id="creator" name="fav_language" value="HTML" className="loginformradiobtn"/>
{/* </> */}
<label for="creator" className="loginformradiobtnlabel"> As Creator</label>
</div>
</div>
{/* <br /> */}

<div className="loginformbuttonsubmitdiv">

<button className="loginformbuttonsubmit">Sign In</button>
</div>
<div className="loginformremenberandforgotpassdiv">
    <div>
    <input type="checkbox" id="remenber" />
<label for="remenber" style={{marginLeft:'5px'}}>Remember me</label>
    </div>
    <div>
    <p>Forgot Password?</p></div>
</div>
<div>

<p className="loginformcreateaccount">Already a member? Click <span style={{color:'#892CD8' , fontWeight:'400',letterSpacing:'1px'}}> here </span> to sign in</p>
<p className="loginformcreateaccountbelowtext">or signup with </p>
</div>
<div className="loginformgoogleimg">

<img src={googlelogin}/>
</div>
         </div>

                </Col>
            </Row>

        </div>
    )
}

export default Signuppage