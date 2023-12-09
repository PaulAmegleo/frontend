import React from "react";
import "../../App.css"; // Updated import path


function SignUp() {
  return (
    <div className="login-form">
      <h2>Login to Your Account</h2>

      <form>
        <div className="form-group-username">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group-password">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <div className="forgot">
            <p>Forgot Password?</p>
          </div>
        </div>

        <div className="loginbutton" type="submit">
          Login
        </div>
      </form>
    </div>
  );
}

export default SignUp;
