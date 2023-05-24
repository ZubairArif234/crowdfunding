import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "../campagianpage.css";
import { Button, Dropdown, Space, Select } from "antd";
import "../login.css";
import { WithContext as ReactTags } from "react-tag-input";
// import loginimg from "../components/images/loginandsignupimg.png";
import campagianimg from "../components/images/campaignbackimg.png";
import googlelogin from "../components/images/googlelogin.png";
import { campaignform } from "../campaiganscheemas";
import Navbarcrowd from "../components/navbar";
// import { Button, Checkbox, Form, Input } from 'antd';
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../scheemasignup";
import Form from "react-bootstrap/Form";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const items = [
  {
    key: "1",
    label: (
      <p
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Rock
      </p>
    ),
  },
  {
    key: "2",
    label: (
      <p
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Pop
      </p>
    ),
  },
  {
    key: "3",
    label: (
      <p
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Hip Hop
      </p>
    ),
  },
  {
    key: "4",
    label: (
      <p
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Classical
      </p>
    ),
  },
  {
    key: "5",
    label: (
      <p
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Blues
      </p>
    ),
  },
  {
    key: "6",
    label: (
      <p
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Jazz
      </p>
    ),
  },
];

const initialValues = {
  campaign_name: "",
  select_user: "",
  rewards: "",
  funding_goals: "",
  music_sample: "",
  linked_your_account: "",
  category: "",
};

// const suggestions = COUNTRIES.map((country) => {
//   return {
//     id: country,
//     text: country,
//   };
// });

// const KeyCodes = {
//   comma: 188,
//   enter: 13,
// };

const Campaiganpage = () => {
  const [selectedoption, setselectedoption] = useState("");

  const handleSelect = (value) => {
    console.log(value);
    setselectedoption(value)
  };

  const [showtagsinput, setshowtagsinput] = useState(false);
  const [tags, setTags] = useState([]);
  // console.log(tags);
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };

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
    validationSchema: campaignform,
    onSubmit: (values, actions) => {
      values.category = selectedoption;
      console.log(values.category);
      // actions.setFieldError('category', 'Category is required');
      if (!values.category) {
        console.log("error hai");
        actions.setFieldError('category', 'Category is required');
      } else {
        // Handle form submission
        console.log(values);
      }
      // actions.submitForm();
      // console.log(values);
      // actions.resetForm(); // Reset the form values
    },
  });
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  return (
    <div>
      <Navbarcrowd />
      <Row className="loginrowdiv">
        <Col
          // md={0}
          lg={4}
          className="loginpagecolone campaignformimg"
          style={{ height: "190vh" }}
        >
          {/* <div className="loginimgdivcol"> */}
          {/* <p className="loginpagecolonetext">hi zubair</p> */}
          <img
            className="loginimgdivcol campaignformimg"
            src={campagianimg}
            style={{ height: "190vh" }}
          />
          {/* </div> */}
        </Col>
        <Col sm={12} md={12} lg={8} style={{ backgroundColor: "#140F26" }}>
          <div className="logindiv" style={{ height: "190vh" }}>
            <p className="loginformheading">Campaign Creation Form </p>
            <p style={{ color: "gray" }}>
              Start your journey of creating amazing campaigns with just these
              simple steps.
            </p>
            <form onSubmit={handleSubmit} className="d-flex flex-column">
              <div id="o1">
                <label htmlFor="name" className="loginformlabel">
                  Campaign Name*
                </label>
                <br />
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.campaign_name}
                  name="campaign_name"
                  id="campaign_name"
                  type="text"
                  className="loginforminput"
                />
                {errors.campaign_name && touched.campaign_name ? (
                  <span style={{ color: "red", fontSize: "13px" }}>
                    {errors.campaign_name}
                  </span>
                ) : null}
              </div>
              {/* <br /> */}
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <div id="o2">
                    <label htmlFor="name" className="loginformlabel">
                      Select User*
                    </label>
                    <br />
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.select_user}
                      name="select_user"
                      id="select_user"
                      type="text"
                      className="loginforminput"
                    />
                    {errors.select_user && touched.select_user ? (
                      <span style={{ color: "red", fontSize: "13px" }}>
                        {errors.select_user}
                      </span>
                    ) : null}
                  </div>
                  {/* <br /> */}
                  <div id="o3">
                    <label htmlFor="name" className="loginformlabel">
                      Rewards*
                    </label>
                    <br />
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.rewards}
                      name="rewards"
                      id="rewards"
                      type="text"
                      className="loginforminput"
                    />
                    {errors.rewards && touched.rewards ? (
                      <span style={{ color: "red", fontSize: "13px" }}>
                        {errors.rewards}
                      </span>
                    ) : null}
                  </div>
                  {/* <br /> */}
                  <div id="o4">
                    <label htmlFor="funding_goals" className="loginformlabel">
                      Funding Goals*
                    </label>
                    <br />
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.funding_goals}
                      name="funding_goals"
                      id="funding_goals"
                      type="text"
                      className="loginforminput"
                    />
                    {errors.funding_goals && touched.funding_goals ? (
                      <span style={{ color: "red", fontSize: "13px" }}>
                        {errors.funding_goals}
                      </span>
                    ) : null}
                  </div>
                  {/* <br /> */}
                </Col>
                <Col md={6} lg={6}>
                  <div id="09">
                    <label htmlFor="music_sample" className="loginformlabel">
                      Music Samples*
                    </label>
                    <br />
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.music_sample}
                      name="music_sample"
                      id="music_sample"
                      type="text"
                      className="loginforminput"
                    />
                    {errors.music_sample && touched.music_sample ? (
                      <span style={{ color: "red", fontSize: "13px" }}>
                        {errors.music_sample}
                      </span>
                    ) : null}
                  </div>
                  {/* <br /> */}
                  <div id="o10">
                    <label
                      htmlFor="linked_your_account"
                      className="loginformlabel"
                    >
                      Linked Your Account*
                    </label>
                    <br />
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.linked_your_account}
                      name="linked_your_account"
                      id="linked_your_account"
                      type="text"
                      className="loginforminput"
                    />
                    {errors.linked_your_account &&
                    touched.linked_your_account ? (
                      <span style={{ color: "red", fontSize: "13px" }}>
                        {errors.linked_your_account}
                      </span>
                    ) : null}
                  </div>
                  {/* <br /> */}
                  <div id="o11">
                    <label htmlFor="category" className="loginformlabel">
                      Category
                    </label>
                    <br />
                    <Select
                      onChange={(value) => handleSelect(value)}
                      // value={values.category}
                      name="category"
                      id="category"
                      showSearch={false}
                      showArrow={false}
                      style={{
                        padding: "0px",
                        color: "black",
                      }}
                      className="loginforminput"
                      dropdownStyle={{
                        backgroundColor: "#0C0D0F",
                        borderTop: " 6px solid #6100B3",
                        color: "white",
                        borderRadius: "0px",
                        marginTop: "10px",
                      }}
                      // inputStyle={{ backgroundColor: '#E7E7E7',width:'100%' }}
                      dropdownClassName="custom-dropdown"
                      placeholder="Search to Select"
                      options={[
                        {
                          value: "Rock",
                          label: "Rock",
                        },
                        {
                          value: "Pop",
                          label: "Pop",
                        },
                        {
                          value: "Classical",
                          label: "Classical",
                        },
                        {
                          value: "Jazz",
                          label: "Jazz",
                        },
                        {
                          value: "Blue",
                          label: "Blue",
                        },
                        {
                          value: "Hip Hop",
                          label: "Hip Hop",
                        },
                      ]}
                    />
                    {errors.category && touched.category ? (
                      <span style={{ color: "red", fontSize: "13px" }}>
                        {errors.category}
                      </span>
                    ) : null}
                  </div>
                  {/* <br /> */}
                </Col>

                <Col md={6} lg={6}>
                  <div id="o5" className="signupwithgoogle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="googlelinkimg"
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
                    <p className="googlelinktext">Link with Google</p>
                  </div>

                  <div id="o6" className="signupwithgoogle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="23"
                      fill="none"
                      viewBox="0 0 41 31"
                    >
                      <path
                        fill="url(#paint0_radial_894_344)"
                        d="M23.48 1.93h-15a5.625 5.625 0 00-5.625 5.625v15A5.625 5.625 0 008.48 28.18h15a5.625 5.625 0 005.625-5.625v-15A5.625 5.625 0 0023.48 1.93z"
                      ></path>
                      <path
                        fill="url(#paint1_radial_894_344)"
                        d="M23.48 1.93h-15a5.625 5.625 0 00-5.625 5.625v15A5.625 5.625 0 008.48 28.18h15a5.625 5.625 0 005.625-5.625v-15A5.625 5.625 0 0023.48 1.93z"
                      ></path>
                      <path
                        fill="url(#paint2_radial_894_344)"
                        d="M23.48 1.93h-15a5.625 5.625 0 00-5.625 5.625v15A5.625 5.625 0 008.48 28.18h15a5.625 5.625 0 005.625-5.625v-15A5.625 5.625 0 0023.48 1.93z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M22.543 9.899a1.406 1.406 0 11-2.813 0 1.406 1.406 0 012.813 0z"
                      ></path>
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M15.98 19.743a4.688 4.688 0 100-9.375 4.688 4.688 0 000 9.375zm0-1.875a2.813 2.813 0 100-5.625 2.813 2.813 0 000 5.625z"
                        clipRule="evenodd"
                      ></path>
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M6.605 14.68c0-3.15 0-4.725.614-5.929a5.625 5.625 0 012.458-2.458c1.203-.613 2.778-.613 5.928-.613h.75c3.15 0 4.726 0 5.93.613a5.624 5.624 0 012.457 2.458c.613 1.204.613 2.779.613 5.93v.75c0 3.15 0 4.725-.613 5.928a5.624 5.624 0 01-2.458 2.458c-1.203.613-2.778.613-5.928.613h-.75c-3.15 0-4.726 0-5.93-.613A5.625 5.625 0 017.22 21.36c-.614-1.203-.614-2.779-.614-5.929v-.75zm9-7.125h.75c1.607 0 2.698.002 3.542.07.822.068 1.243.19 1.536.339a3.75 3.75 0 011.639 1.639c.15.293.27.713.338 1.535.069.844.07 1.936.07 3.542v.75c0 1.606-.001 2.698-.07 3.542-.067.822-.189 1.242-.338 1.536a3.75 3.75 0 01-1.639 1.638c-.293.15-.714.272-1.536.339-.844.069-1.935.07-3.541.07h-.75c-1.607 0-2.698-.001-3.542-.07-.822-.067-1.243-.19-1.536-.339a3.75 3.75 0 01-1.639-1.638c-.15-.294-.271-.714-.338-1.536-.07-.844-.07-1.936-.07-3.542v-.75c0-1.606 0-2.698.07-3.542.067-.822.189-1.242.338-1.535a3.75 3.75 0 011.639-1.64c.293-.149.714-.27 1.536-.337.844-.07 1.935-.07 3.541-.07z"
                        clipRule="evenodd"
                      ></path>
                      <defs>
                        <radialGradient
                          id="paint0_radial_894_344"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientTransform="rotate(-55.376 26.714 -.845) scale(23.9246)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#B13589"></stop>
                          <stop offset="0.793" stopColor="#C62F94"></stop>
                          <stop offset="1" stopColor="#8A3AC8"></stop>
                        </radialGradient>
                        <radialGradient
                          id="paint1_radial_894_344"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientTransform="rotate(-65.136 28.44 5.719) scale(21.1821)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E0E8B7"></stop>
                          <stop offset="0.445" stopColor="#FB8A2E"></stop>
                          <stop offset="0.715" stopColor="#E2425C"></stop>
                          <stop
                            offset="1"
                            stopColor="#E2425C"
                            stopOpacity="0"
                          ></stop>
                        </radialGradient>
                        <radialGradient
                          id="paint2_radial_894_344"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientTransform="matrix(36.09376 -5.15625 1.10287 7.72008 1.45 2.868)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.157" stopColor="#406ADC"></stop>
                          <stop offset="0.468" stopColor="#6A45BE"></stop>
                          <stop
                            offset="1"
                            stopColor="#6A45BE"
                            stopOpacity="0"
                          ></stop>
                        </radialGradient>
                      </defs>
                    </svg>
                    <p className="googlelinktext">Link with Instagram</p>
                  </div>

                  <div id="o7" className="signupwithgoogle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="18"
                      fill="none"
                      viewBox="0 0 41 18"
                    >
                      <path
                        fill="url(#paint0_linear_891_53)"
                        d="M2.69 17.057c.084 0 .154-.068.166-.164l.45-3.573-.449-3.655c-.013-.096-.083-.165-.166-.165-.085 0-.158.07-.17.165l-.393 3.655.394 3.572c.011.096.084.165.169.165z"
                      ></path>
                      <path
                        fill="url(#paint1_linear_891_53)"
                        d="M1.204 15.698c.082 0 .148-.063.16-.158l.349-2.22-.35-2.263c-.012-.091-.077-.158-.159-.158-.085 0-.15.067-.163.16l-.292 2.26.292 2.22c.012.094.078.159.163.159z"
                      ></path>
                      <path
                        fill="url(#paint2_linear_891_53)"
                        d="M4.468 8.985c-.01-.116-.095-.2-.201-.2-.105 0-.19.084-.2.2l-.376 4.335.376 4.176c.01.116.095.2.2.2.106 0 .19-.084.201-.2l.426-4.176-.426-4.335z"
                      ></path>
                      <path
                        fill="url(#paint3_linear_891_53)"
                        d="M5.86 17.863c.124 0 .224-.101.236-.234l.402-4.308-.402-4.456c-.012-.134-.112-.234-.236-.234-.125 0-.226.1-.235.235L5.27 13.32l.356 4.308c.009.133.11.234.235.234z"
                      ></path>
                      <path
                        fill="url(#paint4_linear_891_53)"
                        d="M7.465 17.933c.144 0 .26-.115.271-.269l-.001.001.379-4.344-.38-4.134c-.01-.152-.125-.269-.27-.269-.145 0-.26.117-.269.27l-.335 4.133.335 4.343c.009.154.124.27.27.27z"
                      ></path>
                      <path
                        fill="url(#paint5_linear_891_53)"
                        d="M9.743 13.322L9.387 6.6c-.01-.17-.143-.306-.306-.306-.161 0-.294.136-.304.306l-.314 6.722.314 4.343c.01.171.143.305.304.305a.314.314 0 00.306-.305v.001l.356-4.344z"
                      ></path>
                      <path
                        fill="url(#paint6_linear_891_53)"
                        d="M10.714 17.977c.18 0 .329-.149.337-.338v.002l.333-4.318-.333-8.26a.346.346 0 00-.337-.339.348.348 0 00-.34.339l-.293 8.26.294 4.317a.345.345 0 00.34.337z"
                      ></path>
                      <path
                        fill="url(#paint7_linear_891_53)"
                        d="M12.357 4a.381.381 0 00-.373.375l-.273 8.95.272 4.271a.38.38 0 00.374.373.378.378 0 00.373-.374v.002l.309-4.273-.31-8.949A.38.38 0 0012.358 4z"
                      ></path>
                      <path
                        fill="url(#paint8_linear_891_53)"
                        d="M14.014 17.977a.413.413 0 00.407-.41v.003l.285-4.245-.285-9.25a.413.413 0 00-.407-.41.408.408 0 00-.406.41l-.257 9.25.256 4.245a.407.407 0 00.407.407z"
                      ></path>
                      <path
                        fill="url(#paint9_linear_891_53)"
                        d="M15.684 17.973c.24 0 .434-.196.44-.444v.004l.264-4.207-.263-9.015a.447.447 0 00-.441-.444.447.447 0 00-.443.444l-.23 9.015.232 4.205c.005.246.2.442.44.442z"
                      ></path>
                      <path
                        fill="url(#paint10_linear_891_53)"
                        d="M18.08 13.325L17.84 4.64a.48.48 0 00-.475-.478.48.48 0 00-.477.48l-.213 8.684.213 4.18a.48.48 0 00.477.476c.26 0 .47-.21.475-.48v.004l.238-4.18z"
                      ></path>
                      <path
                        fill="url(#paint11_linear_891_53)"
                        d="M19.06 17.99c.277 0 .506-.23.51-.513v.002l.216-4.151-.216-10.336a.517.517 0 00-.51-.514.52.52 0 00-.51.515l-.192 10.33.192 4.156c.006.28.234.51.51.51z"
                      ></path>
                      <path
                        fill="url(#paint12_linear_891_53)"
                        d="M20.75 1.505a.554.554 0 00-.546.55L19.98 13.33l.225 4.09a.55.55 0 00.545.544c.294 0 .54-.247.542-.55v.006l.244-4.09-.244-11.274a.55.55 0 00-.542-.55z"
                      ></path>
                      <path
                        fill="url(#paint13_linear_891_53)"
                        d="M22.294 17.993l13.702.008c2.731 0 4.944-2.24 4.944-5.005 0-2.763-2.213-5.004-4.944-5.004-.678 0-1.323.139-1.912.39C33.692 3.87 29.955.333 25.397.333a8.734 8.734 0 00-3.161.599c-.374.146-.474.296-.477.588v15.881a.603.603 0 00.535.592z"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_891_53"
                          x1="2.717"
                          x2="2.717"
                          y1="9.5"
                          y2="17.057"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F50" stopOpacity="0.938"></stop>
                          <stop offset="1" stopColor="#F5702E"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_891_53"
                          x1="1.231"
                          x2="1.231"
                          y1="10.899"
                          y2="15.698"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F50" stopOpacity="0.938"></stop>
                          <stop offset="1" stopColor="#F5702E"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_891_53"
                          x1="4.293"
                          x2="4.293"
                          y1="8.784"
                          y2="17.695"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F50" stopOpacity="0.938"></stop>
                          <stop offset="1" stopColor="#F5702E"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_891_53"
                          x1="5.884"
                          x2="5.884"
                          y1="8.631"
                          y2="17.863"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F50" stopOpacity="0.938"></stop>
                          <stop offset="1" stopColor="#F5702E"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear_891_53"
                          x1="7.487"
                          x2="7.487"
                          y1="8.918"
                          y2="17.933"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F50" stopOpacity="0.938"></stop>
                          <stop offset="1" stopColor="#F5702E"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint5_linear_891_53"
                          x1="9.103"
                          x2="9.103"
                          y1="6.294"
                          y2="17.97"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F50" stopOpacity="0.938"></stop>
                          <stop offset="1" stopColor="#F5702E"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint6_linear_891_53"
                          x1="10.732"
                          x2="10.732"
                          y1="4.724"
                          y2="17.977"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F50" stopOpacity="0.938"></stop>
                          <stop offset="1" stopColor="#F5702E"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint7_linear_891_53"
                          x1="12.375"
                          x2="12.375"
                          y1="4"
                          y2="17.969"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F50" stopOpacity="0.938"></stop>
                          <stop offset="1" stopColor="#F5702E"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint8_linear_891_53"
                          x1="14.028"
                          x2="14.028"
                          y1="3.665"
                          y2="17.977"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F50" stopOpacity="0.938"></stop>
                          <stop offset="1" stopColor="#F5702E"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint9_linear_891_53"
                          x1="15.699"
                          x2="15.699"
                          y1="3.867"
                          y2="17.973"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F50" stopOpacity="0.938"></stop>
                          <stop offset="1" stopColor="#F5702E"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint10_linear_891_53"
                          x1="17.378"
                          x2="17.378"
                          y1="4.161"
                          y2="17.981"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F50" stopOpacity="0.938"></stop>
                          <stop offset="1" stopColor="#F5702E"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint11_linear_891_53"
                          x1="19.072"
                          x2="19.072"
                          y1="2.478"
                          y2="17.989"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F50" stopOpacity="0.938"></stop>
                          <stop offset="1" stopColor="#F5702E"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint12_linear_891_53"
                          x1="20.758"
                          x2="20.758"
                          y1="1.505"
                          y2="17.963"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F50" stopOpacity="0.938"></stop>
                          <stop offset="1" stopColor="#F5702E"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint13_linear_891_53"
                          x1="31.35"
                          x2="31.35"
                          y1="0.333"
                          y2="18.001"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F50" stopOpacity="0.938"></stop>
                          <stop offset="1" stopColor="#F5702E"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                    <p className="googlelinktext">Link With Sound Cloud</p>
                  </div>

                  <div id="o8" className="signupwithgoogle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="23"
                      fill="none"
                      viewBox="0 0 35 31"
                    >
                      <path
                        fill="#00DA5A"
                        fillRule="evenodd"
                        d="M24.386 13.568c-4.8-2.85-12.825-3.15-17.4-1.725-.75.225-1.5-.225-1.725-.9-.225-.75.225-1.5.9-1.725 5.325-1.575 14.1-1.275 19.65 2.025.675.375.9 1.275.525 1.95-.375.525-1.275.75-1.95.375zm-.15 4.2c-.375.525-1.05.75-1.575.375-4.05-2.475-10.2-3.225-14.925-1.725-.6.15-1.275-.15-1.425-.75-.15-.6.15-1.275.75-1.425 5.475-1.65 12.225-.825 16.875 2.025.45.225.675.975.3 1.5zm-1.8 4.125c-.3.45-.825.6-1.275.3-3.525-2.175-7.95-2.625-13.2-1.425-.525.15-.975-.225-1.125-.675-.15-.525.225-.975.675-1.125 5.7-1.275 10.65-.75 14.55 1.65.525.225.6.825.375 1.275zM15.536.218c-8.25 0-15 6.75-15 15s6.75 15 15 15 15-6.75 15-15-6.675-15-15-15z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <p className="googlelinktext">Link With Spotify</p>
                  </div>
                </Col>
              </Row>

              <div id="o12" style={{ marginTop: "10px" }}>
                <label
                  htmlFor="name"
                  className="loginformlabel"
                  style={{ marginBottom: "20px" }}
                >
                  Choose Tags*
                </label>
                {tags ? (
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {tags.map((value, key) => {
                      return (
                        <span key={key} className="campaigntags">
                          {value.text}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="none"
                            viewBox="0 0 12 12"
                            style={{ marginLeft: "10px", cursor: "pointer" }}
                            onClick={() => handleDelete(key)}
                          >
                            <path
                              stroke="#505F1C"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M1 11L11 1M1 1l10 10"
                            ></path>
                          </svg>
                        </span>
                      );
                    })}

                    {showtagsinput ? (
                      <ReactTags
                        // tags={showtagsinput ? }
                        // suggestions={suggestions}
                        // delimiters={delimiters}
                        handleDelete={handleDelete}
                        handleAddition={handleAddition}
                        handleDrag={handleDrag}
                        handleTagClick={handleTagClick}
                        inputFieldPosition="bottom"
                        autocomplete
                        editable
                      />
                    ) : null}
                  </div>
                ) : null}
              </div>
              <div style={{ marginTop: "40px" }}>
                <span
                  className="addtags"
                  onClick={() => setshowtagsinput(!showtagsinput)}
                >
                  {showtagsinput ? "Done" : "+ Add New"}
                </span>
                <br />
                <button
                  type="submit"
                  className="loginformbuttonsubmit"
                  style={{ width: "200px", marginTop: "20px" }}
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Campaiganpage;
