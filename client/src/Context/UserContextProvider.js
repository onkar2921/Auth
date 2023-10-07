import { createContext, useReducer } from "react";
import { UserReducer } from "../Reducers/UserReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const UserContext = createContext(null);

export default function UserContextProvider({ children }) {
  const navigate = useNavigate();
  const InitialUser = {
    name: "",
    email: "",
  };

  const [state, UserDispatch] = useReducer(UserReducer, InitialUser);

  const SignUpFunction = async (name, email, password) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URI}/SignUp`,
        { name, email, password }
      );
      if (response.status === 200) {
        alert("signUp sucessfully");
        navigate("/signIn");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const SignInFunction = async (email, password) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URI}/SignIn`,
        { email, password }
      );
      if (response.status === 200) {
        alert("signIn sucessfully");
        console.log(response.data);
        localStorage.setItem("token", response.data?.token);
        localStorage.setItem("UserId", response.data?.existUser?._id);

        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const GetUserDataFunction = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("UserId");
      if (token && userId) {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URI}/getUserInfo`,
          { userId },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          // alert("get user data sucessfully");
          UserDispatch({
            type: "SETUSER",
            payload: {
              name: response.data?.existUser?.name,
              email: response.data?.existUser?.email,
            },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("UserId");
    navigate("/signIn");
  };

  return (
    <>
      <UserContext.Provider
        value={{
          state,
          UserDispatch,
          SignInFunction,
          SignUpFunction,
          GetUserDataFunction,
          handelLogout,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
}
