import React, { useEffect, useContext } from "react";
import { UserContext } from "../../Context/UserContextProvider";

export default function Profile() {
  const { state: UserState, handelLogout, GetUserDataFunction } = useContext(UserContext);

  useEffect(() => {
    GetUserDataFunction();
  }, []);

  return (
    <>
   

    <div className="container mx-auto mt-8 p-4  ">
      <div className="bg-white p-6 shadow-lg rounded-lg bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-400 to-pink-600">
        <h1 className="text-2xl font-semibold mb-4 w-full text-center">Profile</h1>
        <div className="mb-4 flex items-center mt-2 ">
          <p className="text-lg mr-3">Name :</p>
          <p className="text-xl font-bold">{UserState?.name}</p>
        </div>
        <div className="mb-4 flex items-center mt-2">
          <p className="text-lg mr-3">Email:</p>
          <p className="text-xl font-bold">{UserState?.email}</p>
        </div>
        <button
          onClick={handelLogout}
          className="bg-black hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg"
          >
          Logout
        </button>
      </div>
    </div>
          
    </>
  );
}
