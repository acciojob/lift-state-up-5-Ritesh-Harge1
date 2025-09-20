import React, { useState } from "react";
import Login from "./Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div id="main">
      {isLoggedIn ? (
        <p>You are successfully logged in</p>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
