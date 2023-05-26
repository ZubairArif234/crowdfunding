import { Col, Row } from "react-bootstrap";
import "../login.css";
import loginimg from "../components/images/loginandsignupimg.png";
import googlelogin from "../components/images/googlelogin.png";
import Navbarcrowd from "../components/navbar";
// import { Button, Checkbox, Form, Input } from 'antd';
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../scheemasignup";
import axios from 'axios';
// import { Spin } from 'antd';
import Spinner from 'react-bootstrap/Spinner';

import { BaseURL } from "../backenddata";
import { useState } from "react";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirm_password: "",
  role: "",
  remenber: "",
};

const Signuppage = () => {
  const [loader , setloader] = useState('none')
  const [apierroruserexist , setapierroruserexist] = useState()
  const [formvaluesfinal, setformvaluesfinal ] = useState()
  const navigate = useNavigate();
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
      setapierroruserexist('')
      setloader('block')
      console.log(values);
      setformvaluesfinal(values)
      axios.post(`${BaseURL}auth/register`,
      {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password:values.confirm_password,
        role:values.role
      },
      {

       headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(function (response) {
        axios.post(`${BaseURL}auth/requestEmailToken`,
        {
         
          email: values.email,
        
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
            setloader('none')
            navigate('/verifyemail' , {state:state})
          }
        })
        .catch(function (error) {
          setapierroruserexist(error.response.data.message)
          console.log(error.response.data.message);
        });
        console.log(response);
      })
      .catch(function (error) {
        setapierroruserexist(error.response.data.message)
        setloader('none')
        console.log(error.response.data.message);
        });
      const state = {
        email:values.email
      }
   
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
          <div className="logindiv">
            <p className="loginformheading">Registration</p>
              {apierroruserexist  ? (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {apierroruserexist}
                </span>
              ) : null}
            
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName" className="loginformlabel">
               First Name*
              </label>
              <br />
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                name="firstName"
                id="firstName"
                type="text"
                className="loginforminput"
              />
              {errors.firstName && touched.firstName ? (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {errors.firstName}
                </span>
              ) : null}
              <br />
              <label htmlFor="lastName" className="loginformlabel">
               Last Name*
              </label>
              <br />
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                name="lastName"
                id="lastName"
                type="text"
                className="loginforminput"
              />
              {errors.lastName && touched.lastName ? (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {errors.lastName}
                </span>
              ) : null}
              <br />
              <label htmlFor="email" className="loginformlabel">
                Email*
              </label>
              <br />
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
                id="email"
                type="email"
                className="loginforminput"
              />
              {errors.email && touched.email ? (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {errors.email}
                </span>
              ) : null}
              <br />
              <label htmlFor="password" className="loginformlabel">
                Password*
              </label>
              <br />
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
                id="password"
                type="password"
                className="loginforminput"
              />
              {errors.password && touched.password ? (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {errors.password}
                </span>
              ) : null}
              <br />
              <label htmlFor="confirm_password" className="loginformlabel">
                Re-Enter Password*
              </label>
              <br />
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirm_password}
                name="confirm_password"
                id="confirm_password"
                type="password"
                className="loginforminput"
              />
              {errors.confirm_password && touched.confirm_password ? (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {errors.confirm_password}
                </span>
              ) : null}
              <br />
              {/* <br /> */}
              <div className="loginformradiobtns">
                <div>
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value="investor"
                    type="radio"
                    id="investor"
                    name="role"
                    className="loginformradiobtn"
                  />
                  <label htmlFor="investor" className="loginformradiobtnlabel">
                    As Investor
                  </label>
                </div>

                {/* <br /> */}

                {/* <p className="loginformradiobtnsortext">or</p> */}

                <div>
                  {/* <> */}
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value="creator"
                    type="radio"
                    id="creator"
                    name="role"
                    className="loginformradiobtn"
                  />
                  {/* </> */}
                  <label htmlFor="creator" className="loginformradiobtnlabel">
                    {" "}
                    As Creator
                  </label>
                </div>
              </div>
              {errors.role && touched.role ? (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {errors.role}
                </span>
              ) : null}
              {/* <br /> */}

              <div className="loginformbuttonsubmitdiv">
                <button type="submit" className="loginformbuttonsubmit">
                  Sign In
                </button>
              </div>
                <div style={{margin:'10px auto' ,width:'40px'}}>

                <Spinner animation="border" variant="light"  style={{display:loader}}/>
                </div>
              <div className="loginformremenberandforgotpassdiv">
                <div>
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.remenber}
                    name="remenber"
                    type="checkbox"
                    id="remenber"
                  />
                  <label htmlFor="remenber" style={{ marginLeft: "5px" }}>
                    Remember me
                  </label>
                </div>
               
              </div>
              <div>
                <p className="loginformcreateaccount">
                  Already a member? Click{" "}
                  <Link
                    to={"/login"}
                    style={{
                      color: "#892CD8",
                      textDecoration: "none",
                      fontWeight: "400",
                      letterSpacing: "1px",
                    }}
                  >
                    {" "}
                    here{" "}
                  </Link>{" "}
                  to sign in
                </p>
                <p className="loginformcreateaccountbelowtext">
                  or signup with{" "}
                </p>
              </div>
              <div className="loginformgoogleimg">
                <img src={googlelogin} />
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Signuppage;
