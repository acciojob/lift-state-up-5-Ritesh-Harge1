import React, { useState } from "react";
import LoginForm from "./LoginForm";

function App() {
  // Parent state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handler to update login state
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <h1>Lift State Up Demo</h1>
      <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      {isLoggedIn && <p>Welcome! You are logged in.</p>}
    </div>
  );
}

export default App;
