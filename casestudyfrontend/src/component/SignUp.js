import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const SignUp = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    axios.post('http://localhost:9000/api/auth/register',data)
    .then((res)=>{
        alert("SignUp SuccessFull!");    
        navigate("/");
    })
    .catch((error)=>{
        console.log(error)
        alert("SigUp Failed, Try again Later!")
    })

  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
