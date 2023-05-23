

import { Col, Row } from "react-bootstrap";
import '../campagianpage.css'
import { Button, Dropdown, Space } from 'antd';
import "../login.css";
// import loginimg from "../components/images/loginandsignupimg.png";
import campagianimg from '../components/images/campaignbackimg.png'
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


const items = [
    {
      key: '1',
      label: (
        <p target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </p>
      ),
    },
    {
      key: '2',
      label: (
        <p target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </p>
      ),
    },
    {
      key: '3',
      label: (
        <p target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </p>
      ),
    },
  ];


const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  role: "",
  remenber: "",
};

const Campaiganpage = () => {
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
        <Col md={6} lg={4} className="loginpagecolone">
          {/* <div className="loginimgdivcol"> */}
          {/* <p className="loginpagecolonetext">hi zubair</p> */}
          <img className="loginimgdivcol" src={campagianimg} />
          {/* </div> */}
        </Col>
        <Col sm={12} md={6} lg={8} style={{ backgroundColor: "#140F26" }}>
          <div className="logindiv">
            <p className="loginformheading">Campaign Creation Form </p>
            <p style={{color:'gray'}}>Start your journey of creating amazing campaigns with just these
simple steps.</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="loginformlabel">
              Campaign Name*
              </label>
              <br />
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
                id="name"
                type="text"
                className="loginforminput"
              />
              {errors.name && touched.name ? (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {errors.name}
                </span>
              ) : null}
              <br />
             <Row>
                <Col style={{marginRight:"60px"}}>
                <label htmlFor="name" className="loginformlabel">
                Select User*
              </label>
              <br />
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
                id="name"
                type="text"
                className="loginforminput"
              />
              {errors.name && touched.name ? (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {errors.name}
                </span>
              ) : null}
              <br />
              <label htmlFor="name" className="loginformlabel">
              Rewards*
              </label>
              <br />
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
                id="name"
                type="text"
                className="loginforminput"
              />
              {errors.name && touched.name ? (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {errors.name}
                </span>
              ) : null}
              <br />
              <label htmlFor="name" className="loginformlabel">
              Funding Goals*
              </label>
              <br />
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
                id="name"
                type="text"
                className="loginforminput"
              />
              {errors.name && touched.name ? (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {errors.name}
                </span>
              ) : null}
              <br />

              <div className="loginforminput" style={{marginTop:'40px'}}>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#FBBC05"
        fillRule="evenodd"
        d="M5.164 12c0-.762.126-1.493.352-2.178l-3.954-3.02A11.728 11.728 0 00.357 12c0 1.868.434 3.63 1.203 5.194l3.953-3.025A6.942 6.942 0 015.163 12z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#EB4335"
        fillRule="evenodd"
        d="M12.107 5.067c1.655 0 3.151.586 4.326 1.546L19.851 3.2C17.768 1.387 15.098.267 12.107.267A11.715 11.715 0 001.562 6.802l3.954 3.02a6.924 6.924 0 016.59-4.755z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#34A853"
        fillRule="evenodd"
        d="M12.107 18.933a6.924 6.924 0 01-6.59-4.755l-3.955 3.02a11.715 11.715 0 0010.545 6.535c2.866 0 5.602-1.017 7.655-2.924l-3.753-2.902c-1.06.668-2.393 1.026-3.902 1.026z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#4285F4"
        fillRule="evenodd"
        d="M23.323 12c0-.693-.107-1.44-.267-2.133h-10.95V14.4h6.303c-.315 1.546-1.173 2.734-2.4 3.507l3.754 2.902c2.157-2.002 3.56-4.984 3.56-8.809z"
        clipRule="evenodd"
      ></path>
    </svg>
    <p>Link with Google</p>
              </div>
                </Col>
                <Col>
                <label htmlFor="name" className="loginformlabel">
                Music Samples*
              </label>
              <br />
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
                id="name"
                type="text"
                className="loginforminput"
              />
              {errors.name && touched.name ? (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {errors.name}
                </span>
              ) : null}
              <br />
              <label htmlFor="name" className="loginformlabel">
              Linked Your Account*
              </label>
              <br />
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
                id="name"
                type="text"
                className="loginforminput"
              />
              {errors.name && touched.name ? (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {errors.name}
                </span>
              ) : null}
              <br />
              <label htmlFor="name" className="loginformlabel">
              Category
              </label>
              <br />
              <Dropdown
        menu={{
          items,
        }}
        trigger='click'
        placement="bottom"
        style={{
            backgroundColor:'#0C0D0F'
        }}
      >
        <Button className="loginforminput" style={{textAlign:'start',color:'#464646', fontFamily:'Poppins' , fontWeight:'300',fontSize:'13px'}}>Choose your category</Button>
      </Dropdown>
              {errors.name && touched.name ? (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {errors.name}
                </span>
              ) : null}
              <br />
                </Col>
                
             </Row>




              <div className="loginformbuttonsubmitdiv">
                <button type="submit" className="loginformbuttonsubmit">
                  Sign In
                </button>
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
                <div>
                  <p>Forgot Password?</p>
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

export default Campaiganpage;
