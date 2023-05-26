import { Col, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import "../login.css";
// import React, { useState } from "react";
import loginimg from "../components/images/loginandsignupimg.png";
import googlelogin from "../components/images/googlelogin.png";
import Navbarcrowd from "../components/navbar";
import { Button, Checkbox, Form, Input } from "antd";
import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { BaseURL } from "../backenddata";

// const onFinish = (values) => {
//     console.log('Success:', values);
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

const Loginpage = () => {
  const navigate = useNavigate();
  const [apiemailerr, setapiemailerr] = useState("");
  const emailregex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [email, setemail] = useState("");
  const [rememberme, setrememberme] = useState(false);
  const [radio, setradio] = useState("invesitor");
  const [password, setpassword] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [passorderror, setpassworderror] = useState("");
  const [loader, setloader] = useState("none");
  const formRef = useRef(null);

  const resetForm = () => {
    setemail("");
    setrememberme(false);
    setradio("investor");
    setpassword("");
    setemailerror("");
    setpassworderror("");
  };

  const submitemail = (e) => {
    if (e.target.value.trim() == "" || !emailregex.test(e.target.value)) {
      setemailerror("Email is not valid");
    } else {
      setemail(e.target.value);
      setemailerror("");
    }
  };
  const submitpassword = (e) => {
    if (e.target.value.trim() == "" || e.target.value.length < 8) {
      setpassworderror("Password is incorrect it must contain 8 characters");
    } else {
      setpassword(e.target.value);
      setpassworderror("");
    }
  };
  const remembermefunc = () => {
    if (rememberme == false) {
      setrememberme(true);
    } else setrememberme(false);
  };

  // const submitallformsdetail = (e) => {
  //     e.preventDefault();
  //     if (!email) {
  //         setemailerror('Email is not valid')

  //     }
  //     else if (!password) {
  //         setpassworderror('Password is incorrect it must contain 8 characters')

  //     }
  //     else {

  //         let formdetail = {
    //             loginemail: email,
    //             loginpassword: password,
    //             loginAs: radio,
    //             rememberme: rememberme
  //         }
  //         console.log(formdetail);
  
  //     resetForm()
  //     }
  
  const submitallformsdetail = (e) => {
    setapiemailerr('');
    e.preventDefault();
    setloader("block");
    if (!email) {
      setloader("none");
      setemailerror("Email is not valid");
      setloader("none");
    } else if (!password) {
      setpassworderror("Password is incorrect. It must contain 8 characters.");
    } else {
      let formdetail = {
        loginemail: email,
        loginpassword: password,
        loginAs: radio,
        rememberme: rememberme,
      };
      console.log(email);
      axios
        .post(
          `${BaseURL}auth/login`,
          {
            // firstName: values.firstName,
            // lastName: values.lastName,
            email: email,
            password: password,
            // role:values.role
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then(function (response) {
          console.log(response);
          setloader("none");
          localStorage.setItem('token' , response.data.data.token)
        })
        .catch(function (error) {
          setapiemailerr(error.response.data.message);
          //   setapierroruserexist(error.response.data.message)
          setloader("none");
          console.log(error);
        });
      
      console.log(formdetail);

      // Reset the form
      formRef.current.reset();
      setemail("");
      setrememberme(false);
      setradio("invesitor");
      setpassword("");
      setemailerror("");
      setpassworderror("");

      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };

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
            <form ref={formRef}>
              <p className="loginformheading">Login</p>
              {apiemailerr ? (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {apiemailerr}
                </span>
              ) : null}
              <br />
              <label className="loginformlabel">Email*</label>
              <br />
              <input
                type="email"
                className="loginforminput"
                onChange={submitemail}
                onBlur={() => setemailerror("")}
              />
              <p style={{ color: "red" }}>{emailerror}</p>
              <br />
              <label className="loginformlabel">Password*</label>
              <br />
              <input
                type="password"
                className="loginforminput"
                onChange={submitpassword}
                onBlur={() => setpassworderror("")}
              />
              <p style={{ color: "red" }}>{passorderror}</p>

              {/* <br /> */}
              <div className="loginformradiobtns">
                <div>
                  <input
                    type="radio"
                    id="investor"
                    name="fav_language"
                    className="loginformradiobtn"
                    defaultChecked="checked"
                    onClick={(e) => setradio(e.target.id)}
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
                    type="radio"
                    id="creator"
                    name="fav_language"
                    className="loginformradiobtn"
                    onClick={(e) => setradio(e.target.id)}
                  />
                  {/* </> */}
                  <label htmlFor="creator" className="loginformradiobtnlabel">
                    {" "}
                    As Creator
                  </label>
                </div>
              </div>
              {/* <br /> */}

              <div className="loginformbuttonsubmitdiv">
                <button
                  className="loginformbuttonsubmit"
                  onClick={submitallformsdetail}
                  onBlur={() => setemailerror("")}
                >
                  Sign In
                </button>
              </div>
              <div style={{ margin: "10px auto", width: "40px" }}>
                <Spinner
                  animation="border"
                  variant="light"
                  style={{ display: loader }}
                />
              </div>
              <div className="loginformremenberandforgotpassdiv">
                <div>
                  <input
                    type="checkbox"
                    id="remenber"
                    onClick={remembermefunc}
                  />
                  <label htmlFor="remenber" style={{ marginLeft: "5px" }}>
                    Remember me
                  </label>
                </div>
                <div>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/forgetpassword" }
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <div>
                <p className="loginformcreateaccount">
                  Create a new account? Click{" "}
                  <Link
                    to={"/signup"}
                    style={{
                      color: "#892CD8",
                      fontWeight: "400",
                      letterSpacing: "1px",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    {" "}
                    here{" "}
                  </Link>{" "}
                  to register
                </p>
                <p className="loginformcreateaccountbelowtext">
                  or login with{" "}
                </p>
              </div>
            </form>
            <div className="loginformgoogleimg">
              <img src={googlelogin} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Loginpage;
