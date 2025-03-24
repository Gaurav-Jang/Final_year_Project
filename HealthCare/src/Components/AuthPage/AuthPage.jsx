import React, { useState } from "react";
import "../css/AuthPage.css";
function AuthPage({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    // It will reset the form
    setEmail("");
    setPassword("");
  };

  return (
    <div className="auth-body">
      <div className="auth-container">
        <h1 className="auth-header">Welcome 🩺 </h1>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <div className="cred-field">
            <label>Email ID</label>
            <input
              required
              type="email"
              id="txtemail"
              placeholder="example123@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="cred-field">
            <label>Password</label>
            <input
              required
              type="password"
              id="txtpass"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button onClick={handleLogin} type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;
