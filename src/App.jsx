import React, { useState } from "react";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
  const [page, setPage] = useState("login");
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  if (!token) {
    return page === "login" ? (
      <Login
        onSwitch={() => setPage("register")}
        onLogin={(t, u) => {
          setToken(t);
          setUser(u);
          setPage("dashboard");
        }}
      />
    ) : (
      <Register onSwitch={() => setPage("login")} />
    );
  }

  return (
    <Dashboard
      user={user}
      onLogout={() => {
        setToken(null);
        setUser(null);
        setPage("login");
      }}
    />
  );
}