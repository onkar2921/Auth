import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContextProvider";
import { useNavigate } from "react-router-dom";
import login from "../../assets/login.png"
import loginbtn from  "../../assets/loginbtn.png"

export default function SignIn() {
  const navigate = useNavigate();
  const { SignInFunction } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handelSignIn = async (e) => {
    e.preventDefault();

    const data = await SignInFunction(email, password);
  };
  return (
    <>
     
    
    
    

    <div className="flex w-screen h-screen items-center justify-center sm:flex-row flex-col">
        <div className="flex  w-full h-full items-center justify-center p-40 shadow-2xl bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 ">
         
          <div className="sm:w-full mr-10 md:w-[50%]  h-full hidden sm:flex items-center justify-center">
            <img   src={login} alt="login image" className="w-full h-full rounded-xl" />
          </div>
          <form
            onSubmit={handelSignIn}
            className="flex w-full md:w-1/2 h-full items-center justify-center flex-col"
          >
            
              <input
               className="sm:w-full md:w-[60%] h-[10%] rounded-md text-center m-2 focus:outline-none shadow-md"
               placeholder="Email" 
               type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />

           
              <input
               className="sm:w-full md:w-[60%] h-[10%] rounded-md text-center m-2 focus:outline-none shadow-md"
                placeholder="Password"
               type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />

            <div >
              <button type="submit" className="h-[60px] w-[60px] m-4">
              <img src={loginbtn} alt="signin" className="h-full w-full"  />
              </button>
            </div>
            <button className="flex  m-2 rounded-s hover:text-pink-500 text-red-50 text-center items-center"  onClick={() => navigate("/signUp")}>
              create a new account
            </button>
          </form>
        </div>
      </div>
    
    
    </>


  );
}
