// import { useState } from "react";
import Navbarcrowd from "../components/navbar";
import React, { useState } from "react";
import axios from "axios";
import "../login.css";
import { BaseURL } from "../backenddata";
import { useLocation } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const Verifyemailpage = () => {
    const [loader , setloader] = useState('none')
  const location = useLocation();
  const { state } = location;
const [resenddisplay , setresenddisplay] = useState('flex')
  // Access the passed data
  const { email } = state;
  const [successmsg, setsuccessmsg] = useState("");
  const [errmsg, seterrmsg] = useState("");
  const [varifytoken, setvarifytoken] = useState(0);

  const handleToken = (e) => {
    

        let token = parseInt(e.target.value);
        // seterrmsg('')
        setvarifytoken(token);
   
  }

  const verifybtnfunc = () => {

      seterrmsg('');
    setloader('block')
    console.log(varifytoken, email);
    // if (varifytoken.length == 6) {
        axios.post(
            `${BaseURL}auth/verifyEmail`,
            {
                email: email,
                emailVerificationToken: varifytoken,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }
            )
            .then(function (response) {
                console.log("request emAIL", response);
                setsuccessmsg(response.data.data);
                setloader('none')
            })
            .catch(function (error) {
                seterrmsg(error.response.data.message);
                setloader('none')
          // setapierroruserexist(error.response.data.message)
          console.log(error);
        });
   
        
        
    };
    const resendtokenfunc = () => {
        const currentTime = new Date();
        const tenMinutes = 10 * 60 * 1000;
        const targetTime = new Date(currentTime.getTime() - tenMinutes);
        const tenminplustime = currentTime.getTime() + tenMinutes;
        const realtime = currentTime.getTime();
        setresenddisplay('none');
        console.log(tenMinutes);
      
        axios
          .post(
            `${BaseURL}auth/requestEmailToken`,
            {
              email: email,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          )
          .then(function (response) {
            console.log("request emAIL", response);
            setsuccessmsg(response.data.data);
            setloader('none');
            if (tenminplustime - realtime >= 600000) {
              setresenddisplay('flex');
            }
          })
          .catch(function (error) {
            seterrmsg(error.response.data.message);
            setloader('none');
            console.log(error);
          });
      };
           
  return (
    <div style={{ backgroundColor: "#12091a", height: "100vh", width: "100%" }}>
      <Navbarcrowd />
      <div className="verifyemaildivbox">
        <button
          className="verifyemaildivboxbutton"
          onClick={() => window.history.back()}
          style={{ fontSize: "10px", width: "70px" }}
        >
          Go Back
        </button>
        <p className="verifyemaildivboxheading">Verify Email</p>
        {successmsg ? <p style={{color:'green'}}>{successmsg}</p> : errmsg ? <p style={{color:'red'}}>{errmsg}</p> : null}
        <p className="verifyemaildivboxtext">
          NOTE: Your email verification token is sent to your Gmail Account and
          it expires in 10 minutes
        </p>
        <input
          className="verifyemaildivboxinput"
          type="number"
          onChange={(e) => handleToken(e)}
        />
        <p onClick={()=>resendtokenfunc()} style={{display:'flex' , justifyContent:'flex-end', color:'gray', cursor:'pointer' , display:resenddisplay}}>Resend Token</p>
      
        <div style={{margin:'10px auto' ,width:'40px'}}>

<Spinner animation="border" variant="light"  style={{display:loader}}/>
</div>
        <button className="verifyemaildivboxbutton" onClick={verifybtnfunc}>
          Verify
        </button>
      </div>
    </div>
  );
};

export default Verifyemailpage;
