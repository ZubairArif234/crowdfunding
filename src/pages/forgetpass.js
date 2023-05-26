
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "../login.css";
import Spinner from 'react-bootstrap/Spinner';
import loginimg from "../components/images/loginandsignupimg.png";
import googlelogin from "../components/images/googlelogin.png";
import Navbarcrowd from "../components/navbar";
// import { Button, Checkbox, Form, Input } from 'antd';
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../scheemasignup";
import { BaseURL } from "../backenddata";
import { findyouracc } from "../scheemasignup";
import axios from "axios";



const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  role: "",
  remenber: "",
};

const Forfetpassword = () => {
  const [loader , setloader] = useState('none')
  
  const [apierroruserexist , setapierroruserexist] = useState()
  //  const [apierror , setapierror] = useState()
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
    validationSchema: findyouracc,
    onSubmit: (values, { resetForm }) => {
      setapierroruserexist(null)
      setloader('block')
      console.log(values);
      
      axios.post(`${BaseURL}auth/forgotPassword`,
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
          
          navigate('/newpassword' ,{state:state} )
        }
      })
      .catch(function (error) {
        setloader('none')
        setapierroruserexist(error.response.data.message)
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
        <button  className="loginformbuttonsubmit" onClick={() => window.history.back()}
                  style={{ width: "150px", marginTop: "20px", marginLeft:"20px" }}>Go Backk</button>
         <div className="passwordforgetdiv">

            <p className="loginformheading">Find Your Account</p>
            {apierroruserexist ? <p style={{color:'red'}}>{apierroruserexist}</p> : null}
            <p style={{ color: "gray" }}>Enter your email address and we'll send you a link to get back into your account</p>
       <form onSubmit={handleSubmit}>

        <input 
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          name="email"
          id="email"
          type="text" className="loginforminput"  />
        {errors.email && touched.email ? (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {errors.email}
                </span>
              ) : null}
        <br/>
        <div style={{margin:'10px auto' ,width:'40px'}}>

<Spinner animation="border" variant="light"  style={{display:loader}}/>
</div>
        <button  className="loginformbuttonsubmit" type="submit"
                  style={{ width: "200px", marginTop: "20px" }} >Send Link</button>
                  </form>
         </div>
        </Col>
      </Row>
    </div>
  );
};

export default Forfetpassword;
