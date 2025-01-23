
import React, { useState } from "react";
import "./Signup.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Signup() {
  const [ status, setstatus ] = useState(false)
  const [ udata, setudata ] = useState("")
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  let nav = useNavigate()
  

  const [loginfrminput, setLogininput] = useState({
    username:"",
    email:"",
    password:""
  })

  const [signupfrminput,setsignupfrminput] = useState({
    username:"",
    email:"",
    password:""
})

// ------------------------------------------------sign up -------------------------

  const inpvaluesignup = (e) =>
  {
    let {name,value} = e.target;
    setsignupfrminput({...signupfrminput,[name]:value})
  }

  const submitsignup = (e) =>
  {
    e.preventDefault()
    
    if(signupfrminput.username === "" || signupfrminput.email === "" || signupfrminput.password === "")
        {
            alert("fill the form")
        }
        else
        {
            localStorage.setItem("userdata", JSON.stringify(signupfrminput))
            setstatus(true)
        }
  }

  if (status) 
    {
        alert("sign up Succesfull.!!")
        nav('/home')
    }


    // --------------------------------login------------------------------------
    const inputvaluelogin = (e) =>
    {
      const  {name,value} = e.target;
      setLogininput({...loginfrminput, [name]:value})
    }

    const submitlogin = (e) =>
    {
        e.preventDefault()

       if ( loginfrminput.email === udata.email && loginfrminput.password === udata.password )
        {
            alert("login succesfull")
            nav('/home')
        }
        else
        {
            alert("invalid password")
        } 

    }
    


  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  useEffect(()=>{
          let logindata = JSON.parse(localStorage.getItem('userdata'))
          setudata(logindata)
      },[])

  return (
    <div className="hero">
      <div className={`container ${isRightPanelActive ? "right-panal-active" : ""}`} id="main">
        {/*--------------------- Sign-Up Form -------------------------*/}
        <div className="sign-up">
          <form onSubmit={submitsignup}>
            <h1>Create Account</h1>
            <div className="social"></div>
            <p>Use your email for registration</p>
            <input type="text" value={signupfrminput.username} name="username" placeholder="username" onChange={inpvaluesignup} required />
            <input type="email" value={signupfrminput.email} name="email" placeholder="Email" onChange={inpvaluesignup} required />
            <input type="password" value={signupfrminput.password} name="password" placeholder="password" onChange={inpvaluesignup} required />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/*----------- Sign-In Form-------------------- */}
        <div className="sign-in">
          <form onSubmit={submitlogin}>
            <h1>Login</h1>
            <div className="social"></div>
            <p>Use your Account</p>
            <input type="email" name="email" placeholder="Email" onChange={inputvaluelogin} required />
            <br />
            <input type="password" name="password" placeholder="password" onChange={inputvaluelogin} required />
            <a href="#">Forget your Password?</a>
            <button type="submit">login</button>
          </form>
        </div>

        {/* ---------------Overlay - ----------------------------------- */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button id="signin" onClick={handleSignInClick}>
                Login
              </button>
            </div>
            <div className="overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button id="signup" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
