import React, { useState } from "react";
import axios from "axios";
import { Wrapper } from "./Register.styles";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");

  const register = () => {
    if (!registerEmail || !registerPassword || !registerUsername) {
      Swal.fire({
        icon: "error",
        title: "Please",
        text: "Please Complete Form",
      });
    } else {
      console.log({
        username: registerUsername,
        email: registerEmail,
        password: registerPassword,
      });
    }
    axios
      .post("/api/users/register", {
        username: registerUsername,
        email: registerEmail,
        password: registerPassword,
      })
      .then((res) => {
        console.log(res);
        window.location.href = "/login";
      });
  };

  return (
    <div>
      <Wrapper>
        <div>
          <h1 className="mb-3">Register</h1>
          <Form>
            <Form.Group>
              <input
                className="mb-3"
                type="email"
                placeholder="email"
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <input
                className="mb-3"
                type="username"
                placeholder="username"
                onChange={(e) => setRegisterUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <input
                className="mb-3"
                type="password"
                placeholder="password"
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </Form.Group>
            <Button onClick={register}>Submit</Button>
          </Form>
        </div>
      </Wrapper>
    </div>
  );
}

export default Register;
