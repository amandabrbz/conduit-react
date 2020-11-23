import React, { useState } from "react";
import "./Auth.css";

const Auth = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const campoUser = <input type="text" autoFocus value={username} onChange={event => setUsername(event.target.value)} id="username" placeholder="username" />

  const handlerSubmit = (event) => {
    event.preventDefault();
    return console.log({
      email,
      password,
      username
    });
  };

  return (
    <div className="container-fluid auth-container">
      <h1>{props.register ? "sign in" : "log in"}</h1>
      <div className="auth-forms">
        <form onSubmit={handlerSubmit}>
          {props.register && campoUser}
          <label htmlFor="email">email</label>
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="email"
            autoFocus
            id="email"
            name="email"
            placeholder="email@email.com"
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <button type="submit">enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
