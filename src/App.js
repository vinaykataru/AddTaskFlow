import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState(!!localStorage.getItem("token"));

  return user ? (
    <Dashboard setUser={setUser} />
  ) : (
    <Login setUser={setUser} />
  );
}

export default App;