import React from 'react';

function LoginForm({ onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // This calls the function from the parent to update its state
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
