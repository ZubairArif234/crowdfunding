
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "../login.css";
import loginimg from "../components/images/loginandsignupimg.png";
import googlelogin from "../components/images/googlelogin.png";
import Navbarcrowd from "../components/navbar";
// import { Button, Checkbox, Form, Input } from 'antd';
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../scheemasignup";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  role: "",
  remenber: "",
};

const Forfetpassword = () => {
    const emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const navigate = useNavigate();
    const [forgetpassemail , setforetpassemail] = useState('')
    const [forgetpassemailerr , setforetpassemailerr] = useState('')

    const handlesubmitlink = () =>{
        if( !forgetpassemail || !forgetpassemail.match(emailregex)){
            setforetpassemailerr('Enter Email')
        }
        else{
            console.log(forgetpassemail);
navigate('/newpassword')
        }
    }
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signup,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm(); // Reset the form values
    },
  });

  return (
    <div>
      <Navbarcrowd />
      <Row className="loginrowdiv">
        <Col md={6} lg={7} className="loginpagecolone">
          {/* <div className="loginimgdivcol"> */}
          {/* <p className="loginpagecolonetext">hi zubair</p> */}
          <img className="loginimgdivcol" src={loginimg} />
          {/* </div> */}
        </Col>
        <Col sm={12} md={6} lg={5} style={{ backgroundColor: "#140F26" }}>
        <button  className="loginformbuttonsubmit" onClick={() => window.history.back()}
                  style={{ width: "150px", marginTop: "20px", marginLeft:"20px" }}>Go Backk</button>
         <div className="passwordforgetdiv">

            <p className="loginformheading">Find Your Account</p>
            <p style={{ color: "gray" }}>Enter your email address and we'll send you a link to get back into your account</p>
        <input  className="loginforminput"  onChange={(e)=>setforetpassemail(e.target.value)}/>
        {forgetpassemailerr ? <span style={{color:'red'}}>{forgetpassemailerr}</span> : null}
        <br/>
        <button  className="loginformbuttonsubmit"
                  style={{ width: "200px", marginTop: "20px" }} onClick={handlesubmitlink}>Send Link</button>
         </div>
        </Col>
      </Row>
    </div>
  );
};

export default Forfetpassword;
