import React from "react";

function LoginForm({ isLoggedIn, onLogin }) {
  return (
    <div className="login-form">
      {isLoggedIn ? (
        <p>You are already logged in.</p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}
        >
          <label>
            Username: <input type="text" required />
          </label>
          <br />
          <label>
            Password: <input type="password" required />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
