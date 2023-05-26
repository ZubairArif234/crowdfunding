



import axios from "axios";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "../login.css";
import loginimg from "../components/images/loginandsignupimg.png";
import googlelogin from "../components/images/googlelogin.png";
import Navbarcrowd from "../components/navbar";
import { newpass } from "../scheemasignup";
import Spinner from 'react-bootstrap/Spinner';
// import { Button, Checkbox, Form, Input } from 'antd';
import { useFormik } from "formik";
import { useNavigate, Link , useLocation } from "react-router-dom";
import { signup } from "../scheemasignup";
import { BaseURL } from "../backenddata";
// import Spinner from 'react-bootstrap/Spinner';

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const initialValues = {
    new_password: "",
    token:"",
  confirm_password: "",
  
};

const Newpassword = () => {
  const [loader , setloader] = useState('none')
  const [apierroruserexist , setapierroruserexist] = useState()
  const location = useLocation();
  const { state } = location;
  const { email } = state;
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
        validationSchema: newpass,
        onSubmit: (values, { resetForm }) => {
          setapierroruserexist('')
          setloader('block')
          console.log(email);
          axios.put(`${BaseURL}auth/resetPassword`,
          {
           
            email:email,
            passwordResetToken:parseInt(values.token) ,
            password: values.new_password
          
          },
          {
            
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            }
          })
        .then(function (response) {
          console.log( 'request emAIL',response);
          if(response){
            setapierroruserexist(null)
            setloader('none')
            // navigate('/verifyemail' , {state:state})
          }
        })
        .catch(function (error) {
          setloader('none')
            setapierroruserexist(error.response.data.message)
            console.log(error.response.data.message);
          });
          resetForm(); // Reset the form values
        },
      });

  return (
    <div>
      <Navbarcrowd />
      <Row className="loginrowdiv">
        <Col md={12} lg={7} className="loginpagecolone">
          {/* <div className="loginimgdivcol"> */}
          {/* <p className="loginpagecolonetext">hi zubair</p> */}
          <img className="loginimgdivcol" src={loginimg} />
          {/* </div> */}
        </Col>
        <Col sm={12} md={12} lg={5} style={{ backgroundColor: "#140F26" }}>
        <button  className="loginformbuttonsubmit" onClick={() => window.history.back()}
                  style={{ width: "150px", marginTop: "20px", marginLeft:"20px" }}>Go Backk</button>
         <div className="passwordforgetdiv">

            <p className="loginformheading">Create New Password</p>
            {apierroruserexist ? <p style={{color:'red'}}>{apierroruserexist}</p>:null}
            <p style={{ color: "gray" }}>Enter the token that has been sent to your email. If you haven't received the email, please check your spam folder.
Note: The token will expire in 10 minutes.</p>
<form onSubmit={handleSubmit}>

<lable style={{color:'white'}}>Token</lable>
<br/>
        <input onChange={handleChange}
                onBlur={handleBlur}
                value={values.token}
                name="token"
                id="token"  className="loginforminput" />
                 {errors.token && touched.token ? (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {errors.token}
                </span>
              ) : null}
       
<br/>
<lable style={{color:'white'}} htmlFor="password">New Password</lable>
<br/>
        <input type="password"  onChange={handleChange}
                onBlur={handleBlur}
                value={values.new_password}
                name="new_password"
                id="new_password" className="loginforminput" />
                 {errors.new_password && touched.new_password ? (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {errors.new_password}
                </span>
              ) : null}
<br/>
<lable style={{color:'white'}} htmlFor="password">Confirm Password</lable>
<br/>
        <input type="password"  onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirm_password}
                name="confirm_password"
                id="confirm_password"  className="loginforminput" />
                 {errors.confirm_password && touched.confirm_password ? (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {errors.confirm_password}
                </span>
              ) : null}
        <br/>
        <div style={{margin:'10px auto' ,width:'40px'}}>

                <Spinner animation="border" variant="light"  style={{display:loader}}/>
                </div>
        <button  className="loginformbuttonsubmit" type="submit"
                  style={{ width: "200px", marginTop: "20px" }}>Change Password </button>
                </form>
         </div>
        </Col>
      </Row>
    </div>
  );
};

export default Newpassword;
