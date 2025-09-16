import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin(); // update parent state
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
      <h2>🔑 Login</h2>
      <div>
        <label>Email:</label><br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <br />
      <div>
        <label>Password:</label><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;

