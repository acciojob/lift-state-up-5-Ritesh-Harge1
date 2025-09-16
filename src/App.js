import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  // parent state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // handler function to update login state
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
