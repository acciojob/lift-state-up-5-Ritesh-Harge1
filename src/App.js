import { useState } from "react";
import LoginForm from "./LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Lift State Up Demo</h1>
      {isLoggedIn ? (
        <p className="text-green-600 text-lg">✅ You are logged in!</p>
      ) : (
        <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
