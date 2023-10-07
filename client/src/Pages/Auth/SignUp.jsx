import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContextProvider";
import { useNavigate } from "react-router-dom";
import signupImg from "../../assets/signupImg.jpg";
import signup from "../../assets/signup.png"
export default function SignUp() {
  const navigate = useNavigate();
  const { SignUpFunction } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handelSignUp = async (e) => {
    e.preventDefault();

    await SignUpFunction(name, email, password);
  };
  return (
    <>
      <div className="flex w-screen h-screen items-center justify-center sm:flex-row flex-col">
        <div className="flex  w-full h-full items-center justify-center p-40 shadow-2xl bg-gradient-to-r from-gray-700 via-gray-900 to-black ">
          <div className=" sm:w-full md:w-1/2 h-full hidden  sm:flex items-center justify-center">
            <img   src={signupImg} alt="signup image" className="w-[80%] h-full rounded-xl" />
          </div>
          <form
            onSubmit={handelSignUp}
            className="flex w-full md:w-1/2 h-full items-center justify-center flex-col"
          >
           
              <input
               className="sm:w-full md:w-[60%] h-[10%] rounded-md text-center m-2 focus:outline-none shadow-md"
              placeholder="Name"
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />

            
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
              <img src={signup} alt="signup" className="h-full w-full"  />
              </button>
            </div>
            <button className="flex shadow-xl m-2 rounded-s hover:text-pink-500 text-red-50 text-center items-center"  onClick={() => navigate("/signIn")}>
              alredy have an account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
