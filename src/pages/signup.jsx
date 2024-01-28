import { useNavigate } from "react-router-dom";
import bgtext from "../assets/image/signup-bg-text.png";
import { useState } from "react";
import {ApiRequest} from "./index"

const Signup = () => {
  const navigate = useNavigate();

  const [firstname , setFirstname] = useState("")
  const [lastname , setLastname] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [confirm , setConfirm] = useState("")

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  function isPasswordStrong(password) {
    // Define the criteria for a strong password
    const lengthRegex = /.{8,}/; // Minimum 8 characters
    const uppercaseRegex = /[A-Z]/; // At least one uppercase letter
    const lowercaseRegex = /[a-z]/; // At least one lowercase letter
    const digitRegex = /\d/; // At least one digit
    const specialCharacterRegex = /[^A-Za-z0-9]/; // At least one special character
  
    // Check if the password meets all the criteria
    return (
      lengthRegex.test(password) &&
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password) &&
      digitRegex.test(password) &&
      specialCharacterRegex.test(password)
    );
  }

  const registration = () => {
    let email_validation = validateEmail(email)
    console.log(email,email_validation)
    if(!email_validation){
      alert("Error email format")
      return
    }
    let strong_pw = isPasswordStrong(password)
    if(!strong_pw){
      alert("Password is not a strong password")
      return
    }
    alert(email)
    if(confirm != password){
      alert("Confirm password is not matched")
      return
    }
    ApiRequest("register",'POST',{
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:password,
        userType:"user"
    }).then((res) => { 
      alert(res)
      navigate("/login")
  })
// Catch errors if any
.catch((err) => { 
  alert(err)
  window.location.reload()
})
  }

  return (
    <div className=" w-screen h-screen px-20 overflow-hidden bg-[url('./image/signup-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col items-start justify-center">
      {/* container */}
      <div className=" w-full flex items-end justify-between">
        {/* background text */}
        <img src={bgtext} alt="bg text" className=" w-[270px] object-contain" />
        {/* login box */}
        <div className="w-[40%] p-12 rounded-3xl backdrop-blur-sm bg-blue-600/30 border-2 border-blue-600 flex flex-col items-center justify-center">
          {/* login input section */}
          <div className=" w-full">
            <h4 className=" text-2xl mb-5 text-gray-100 font-bold">
              Create Account
            </h4>
            {/* first name */}
            <p className=" text-[11px] mb-1 text-gray-100">First Name</p>
            <input
              type="text"
              placeholder="First Name"
              className=" bg-white py-1 px-2 rounded-md outline-none w-full"
              value={firstname}
              onChange={(e)=> {
                setFirstname(e.target.value);
              }}
            />
            {/* last name */}
            <p className=" text-[11px] mt-4 mb-1 text-gray-100">Last Name</p>
            <input
              type="text"
              placeholder="Last Name"
              className=" bg-white py-1 px-2 rounded-md outline-none w-full"
              value={lastname}
              onChange={(e)=> {
                setLastname(e.target.value);
              }}
            />
            {/* email */}
            <p className=" text-[11px] mt-4 mb-1 text-gray-100">Email</p>
            <input
              type="text"
              placeholder="username@gmail.com"
              className=" bg-white py-1 px-2 rounded-md outline-none w-full"
              value={email}
              onChange={(e)=> {
                setEmail(e.target.value);
              }}
            />
            {/* password */}
            <p className=" text-[11px] mt-4 mb-1 text-gray-100">Password</p>
            <input
              type="password"
              placeholder="Password"
              className=" bg-white py-1 px-2 rounded-md outline-none w-full"
              value={password}
              onChange={(e)=> {
                setPassword(e.target.value);
              }}
            />
            {/* confirm password */}
            <p className=" text-[11px] mt-4 mb-1 text-gray-100">Password</p>
            <input
              type="password"
              placeholder="Confirm Password"
              className=" bg-white py-1 px-2 rounded-md outline-none w-full"
              value={confirm}
              onChange={(e)=> {
                setConfirm(e.target.value);
              }}
            />
            {/* login bottom section */}
            <div className=" mt-1 w-full flex items-center justify-between">
              <p className=" text-[11px] text-gray-100">Forgot Password?</p>
              <div className=" flex items-center">
                <input type="checkbox" className=" mr-1" />
                <p className=" text-[11px] text-gray-100">Remember Me</p>
              </div>
            </div>
          </div>
          {/* sign action button */}
          <button className=" mt-4 py-2 w-full bg-blue-600 text-gray-100 font-bold text-sm rounded-lg" onClick={registration}>
            Sign Up
          </button>
          {/* Don't have an account section */}
          <div className=" mt-4 w-fit flex items-center">
            <p className=" mr-1 text-[11px] text-gray-100">
              Already Have an Account?
            </p>
            {/* sign up page navigation */}
            <button
              onClick={() => navigate("/login")}
              className="text-[11px] text-blue-400 font-bold"
            >
              Sign In Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
