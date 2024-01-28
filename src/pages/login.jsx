import { useNavigate } from "react-router-dom";
import bgtext from "../assets/image/login-bg-text.png";
import { useState } from "react";
import ApiRequest from "../api_request/request";
import ApiRequestAuth from "../api_request/request_i2auth";

const Login = () => {
  const navigate = useNavigate();

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const Login_user = () => {
    alert(email)
    ApiRequestAuth("login",'POST',{
        email:email,
        password:password,
    }).then((res) => { 
      if(res){
        navigate("/add-complain")
      }
  })
// Catch errors if any
.catch((err) => { 
  alert(err)
  window.location.reload()
})
  }

  return (
    <div className=" w-screen h-screen px-20 overflow-hidden bg-[url('./image/login-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col items-start justify-center">
      {/* container */}
      <div className=" w-full flex items-end justify-between">
        {/* login box */}
        <div className="w-[40%] p-12 rounded-3xl backdrop-blur-sm bg-blue-600/30 border-2 border-blue-600 flex flex-col items-center justify-center">
          {/* title */}
          <h2 className=" text-2xl -mt-1 font-bold text-gray-100">Welcome</h2>
          {/* login input section */}
          <div className=" w-full mt-5">
            <h4 className=" text-sm mb-3 text-gray-100 font-bold">
              Login Here
            </h4>
            {/* email */}
            <p className=" text-[11px] mb-1 text-gray-100">Email</p>
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
          <button className=" mt-4 py-2 w-full bg-blue-600 text-gray-100 font-bold text-sm rounded-lg" 
          onClick={Login_user}>
            Sign In
          </button>
          {/* Don't have an account section */}
          <div className=" mt-4 w-fit flex items-center">
            <p className=" mr-1 text-[11px] text-gray-100">
              Don’t have an account yet?
            </p>
            {/* sign up page navigation */}
            <button
              onClick={() => navigate("/sign-up")}
              className="text-[11px] text-blue-400 font-bold"
            >
              Sign Up Here
            </button>
          </div>
        </div>
        {/* background text */}
        <img src={bgtext} alt="bg text" className=" w-[270px] object-contain" />
      </div>
    </div>
  );
};

export default Login;
