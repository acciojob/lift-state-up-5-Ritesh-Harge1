import React, { useState } from "react";
import LoginForm from "./LoginForm";

function App() {
  // parent state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // function to update login state
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div id="main">
      {isLoggedIn ? (
        <h2>Welcome! You are logged in.</h2>
      ) : (
        <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
