import { Routes, Route } from "react-router-dom";
import Profile from "./Pages/User/Profile";
import SignUp from "./Pages/Auth/SignUp";
import SignIn from "./Pages/Auth/SignIn";
import { useEffect, useState } from "react";

function App() {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(token);
  useEffect(() => {
    setUser(token);
  }, [user]);

  return (
    <>
      <Routes>
        <Route path="/" element={user ? <Profile /> : <SignIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
      </Routes>
    </>
  );
}

export default App;
