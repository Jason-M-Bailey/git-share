import React, { useState } from "react";
import axios from "axios";
// import Swal from "sweetalert2";
import { Wrapper } from "./Login.styles";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
          <h1 className="mb-3">Login</h1>
          <Form>
            <div onSubmit={handleSubmit}>
              <Form.Group>
                <input
                  className="mb-3"
                  type="username"
                  placeholder="username"
                  onChange={(e) => setLoginUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <input
                  className="mb-3"
                  type="password"
                  placeholder="password"
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={login}>
                Submit
              </Button>
            </div>
          </Form>
        </div>
        <h5 className="mt-3"><a href="/register">Click here to create an account first</a></h5>
      </Wrapper>
    </div>
  );
}

export default Login;
