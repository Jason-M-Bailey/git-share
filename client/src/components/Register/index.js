import React, { useState } from "react";
import axios from "axios";
import { Wrapper } from "./Register.styles";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  
  const register = () => {
  console.log({
    username: registerUsername,
    email: registerEmail,
    password: registerPassword,
  })
    axios.post("/api/users/register",{
      username: registerUsername,
      email: registerEmail,
      password: registerPassword,
    })
    .then((res) => {
      console.log(res)
      window.location.href="/login"
    });

  };
  
  return (
    <div>
      <Wrapper>
      <div>
        <h1>Register</h1>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          type="username"
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </div>
      </Wrapper>
    </div>
  );
}

export default Register;