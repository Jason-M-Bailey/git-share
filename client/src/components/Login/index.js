import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
// import Swal from "sweetalert2";
import { Wrapper } from "./Login.styles";

function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    console.log({
      username: loginUsername,
      password: loginPassword,
    });

    axios
      .post("/api/users/login", {
        username: loginUsername,
        password: loginPassword,
      })
      .then((res) => {
        console.log(res);
        window.location.href = "/";
      });
  };

  // this is only here so the app can continue to be tested
  // we need a legit handleSubmit to test user info
  const handleSubmit = async (e) => {};

  return (
    <div>
      <Wrapper>
        <div>
          <h1>Login</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="username"
              placeholder="username"
              onChange={(e) => setLoginUsername(e.target.value)}
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

      <h3>
        <a href="/register">Register New Account</a>
      </h3>
    </div>
  );
}

export default Login;
