import React, { useState, useEffect } from "react";
import LoginPage from "./LoginPage";
import ChatbotPage from "./ChatbotPage";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div className="app">
      {isLoggedIn ? (
        <ChatbotPage user={user} logout={logout} />
      ) : (
        <LoginPage login={login} />
      )}
    </div>
  );
};

export default App;
