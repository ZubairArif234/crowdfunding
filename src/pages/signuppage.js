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

const Signuppage = () => {
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
          <div className="logindiv">
            <p className="loginformheading">Registration</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="loginformlabel">
                Name*
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

export default Signuppage;
