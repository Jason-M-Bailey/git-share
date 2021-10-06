/* import React, { useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

import "./Login.css";

async function loginUser(credentials) {
  return fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
    
    Swal.fire({
      icon: "success",
      title: `Hello ${username}`,
      text: "Successful login!",
    });
  };

  return (
    <div className="login-wrapper">
    <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
        <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
          </div>
      </form>
    </div>
    );
}
*/

import React, { useState } from "react";
import Axios from "axios";
import "./Login.css";
import Swal from "sweetalert2";
import { Wrapper } from "./Login.styles";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001/api/users/login", {
      username: loginEmail,
      password: loginPassword,
    }).then((res) => console.log(res));
  };

  // this is only here so the app can continue to be tested
  // we need a legit handleSubmit to test user info
  const handleSubmit = async (e) => {
    Swal.fire({
      icon: "success",
      title: `I only added this so the app can be tested`,
      text: "gotta work on auth!!!",
    });
  };

  return (
    <div>
      <Wrapper>
        <div>
          <h1>Login</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button onClick={login}>Submit</button>
          </form>
        </div>
      </Wrapper>
    </div>
  );
}

export default Login;
