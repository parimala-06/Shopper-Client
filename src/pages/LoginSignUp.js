// import React, { useState } from 'react'
// import './Css/LoginSignUp.css'
// import {baseURL} from '../utils/constant.js'

// const LoginSignUp = () => {

//   const[state, setState] = useState("Login");
//   const [formData, setFormData] = useState({
//     username:"",
//     password:"",
//     email:""
//   })

//   const changeHandler = (e)=>{
//     setFormData({...formData,[e.target.name]:e.target.value})
//   }

//   const login = async()=>{
//     console.log("Login Function Executed",formData);
//     let responseData;
//       await fetch(`${baseURL}/login`,{
//         method: 'POST',
//         headers:{
//           Accept:'application/json',
//           'Content-Type':'application/json',
//         },
//         body:JSON.stringify(formData),
//       }).then((response)=>response.json()).then((data)=>responseData=data)
//       if(responseData.success){
//         localStorage.setItem('auth-token',responseData.token);
//         window.location.replace("/");
//       }else{
//         alert(responseData.errors)
//       }
//   }
//   const signup = async()=>{
//     console.log("Sign Up Function Executed",formData);
//     let responseData;
//       await fetch(`${baseURL}/signup`,{
//         method: 'POST',
//         headers:{
//           Accept:'application/json',
//           'Content-Type':'application/json',
//         },
//         body:JSON.stringify(formData),
//       }).then((response)=>response.json()).then((data)=>responseData=data)
//       if(responseData.success){
//         localStorage.setItem('auth-token',responseData.token);
//         window.location.replace("/");
//       }else{
//         alert(responseData.errors)
//       }
//     }

//   return (
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//         <h1>{state}</h1>
//         <div className="loginsignup-fields">
//           {state==='Sign Up'?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Name' />:<></>}
//           <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Id' />
//           <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
//         </div>
//         <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
//         {state==="Sign Up"?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login Here</span></p>:<p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click Here</span></p>} 
//         <div className="loginsignup-agree">
//           <input type="checkbox" name="termsAndPrivacy" id="termsAndPrivacy" required />
//           <label htmlFor="termsAndPrivacy">I agree to the Terms and Privacy Policies</label>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LoginSignUp

import React, { useState } from 'react';
import './Css/LoginSignUp.css';
import { baseURL } from '../utils/constant.js';

const LoginSignUp = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    termsAndPrivacy: false // Added state for checkbox
  });

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const loginOrSignUp = async () => {
    console.log(`${state} Function Executed`, formData);
    let responseData;
    const endpoint = state === 'Login' ? '/login' : '/signup';
    try {
      const response = await fetch(`${baseURL}${endpoint}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleProceed = () => {
    if (state === 'Sign Up' && !formData.termsAndPrivacy) {
      alert("You must agree to the Terms and Conditions to proceed.");
    } else {
      loginOrSignUp();
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === 'Sign Up' && <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Name' />}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Id' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>
        <button onClick={handleProceed}>Continue</button>
        {state === "Sign Up" &&
          <>
            <p className="loginsignup-login">Already have an account? <span onClick={() => { setState("Login") }}>Login Here</span></p>
            <div className="loginsignup-agree">
              <input
                type="checkbox"
                name="termsAndPrivacy"
                id="termsAndPrivacy"
                checked={formData.termsAndPrivacy}
                onChange={changeHandler}
                required
              />
              <label htmlFor="termsAndPrivacy">I agree to the <Link to="/terms">Terms and Conditions</Link></label>
            </div>
          </>
        }
        {state !== "Sign Up" &&
          <p className="loginsignup-login">Create an account? <span onClick={() => { setState("Sign Up") }}>Click Here</span></p>
        }
      </div>
    </div>
  );
  

  }

export default LoginSignUp