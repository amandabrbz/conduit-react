import React from "react";
import "./Auth.css";

const Auth = () => {
  const handlerSubmit = (event) => {
    event.preventDefault()
    return console.log('submit', event)
  }

  return (
    <div className="container-fluid auth-container">
      <h1>sign in</h1>
      <div className="auth-forms">
        <form onSubmit={handlerSubmit}>
          <label htmlFor="email">email</label>
          <input type="email" autoFocus id="email" name="email" placeholder="email@email.com"
          />
          <label htmlFor="password">password</label>
          <input type="password" id="password" name="password" />
          <button type="submit">enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
