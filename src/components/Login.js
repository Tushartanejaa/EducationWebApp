import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import Home from './Home';

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            history("/home", { state: { id: email } });
          } else if (res.data == "notexist") {
            alert("User have not sign up");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="login">
      <h1 style={{ color: "#45a049" }}>Welcome to SHIKSHAk!</h1>

      <form action="POST" class="back">
        <input
          
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          style={{width: '100%', height: '30px', marginBottom: '10px'}}
        />
        <input
          
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          style={{width: '100%', height: '30px', marginBottom: '10px'}}
        />
        <button type="submit" onClick={submit}>Submit</button>
        <button onClick={() => history("/signup")}>Signup</button>
        
      </form>
      <br />

      
    </div>
  );
}

export default Login;
