import React, { useState } from "react";
import "../App.css";
import Axios from "axios";

const Register = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });

    setUsernameReg("");
    setPasswordReg("");
  };

  const login = () => {
    Axios.post("http://localhost:3001/register/login", {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message)
      }else{
        setLoginStatus(response.data[0].username)
      }
    });

    setUsername("");
    setPassword("");
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          margin: "5px auto",
        }}
      >
        <h1>Registration</h1>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username..."
          value={usernameReg}
          onChange={(e) => setUsernameReg(e.target.value)}
        />

        <label>Password</label>
        <input
          type="text"
          placeholder="Password..."
          value={passwordReg}
          onChange={(e) => setPasswordReg(e.target.value)}
        />
        <button
          style={{
            width: "50%",
            margin: "4px auto",
          }}
          onClick={register}
        >
          Register
        </button>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          margin: "5px auto",
        }}
      >
        <h1>Login</h1>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password</label>
        <input
          type="text"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          style={{
            width: "50%",
            margin: "4px auto",
          }}
          onClick={login}
        >
          Login
        </button>
      </div>
      <h1>{loginStatus}</h1>
    </div>
  );
};

export default Register;
