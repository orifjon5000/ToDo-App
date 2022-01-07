import React from "react";
// import axios from "axios";
import { NavLink, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
export default function App() {
  // const handleInputChange = (e) => {};
  // const registerUser = async () => {
  //   try {
  //     //   const res = await fetch("https://reqres.in/api/register");
  //     //   const data = await res.json();
  //     const data = axios.post("https://reqres.in/api/register", {});
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: "red" } : {})}
            to="/home"
          >
            Home
          </NavLink>{" "}
          {/*claassga active qushadi*/}
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: "yellow" } : {})}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}
