import React from "react";

export default function Dashboard({ user, onLogout }) {
  return (
    <div className="dashboard">
      <header>
        <h1>ROP Tracker Dashboard</h1>
        <button onClick={onLogout}>Logout</button>
      </header>
      <p>Welcome, {user?.name || user?.email || "user"}.</p>
      <p>This is where your ROP tracking UI will go.</p>
    </div>
  );
}