import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // handler to update state when user logs in
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Lift State Up Demo</h1>
      {isLoggedIn ? (
        <p>✅ You are logged in!</p>
      ) : (
        <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
