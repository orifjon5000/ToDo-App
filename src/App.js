import React from "react";
import axios from "axios";

export default function App() {

  const handleInputChange =(e)=>{
    
  }
  const registerUser = async () => {
    try {
      //   const res = await fetch("https://reqres.in/api/register");
      //   const data = await res.json();
      const data = axios.post("https://reqres.in/api/register", {});
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>USer List</h2>
      <form action="">
        <p>
          <input type="email" name="email" required onChange={handleChange} />
        </p>
        <p>
          <input
            type="password"
            name="password"
            required
            onChange={handleInputChange}
          />
        </p>{" "}
      </form>
      <button onClick={registerUser}>Login</button>
    </div>
  );
}
