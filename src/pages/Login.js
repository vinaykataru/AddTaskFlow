import { useState } from "react";
import API from "../services/api";
import './Login.css'

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      console.log(email, password); // debug

      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      setUser(true);

    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
  };

  const handleSignup = async () => {
    try {
      console.log(email, password); // debug

      await API.post("/auth/signup", {
        email,
        password,
      });

      alert("Signup successful");

    } catch (err) {
      console.log(err);
      alert("Signup failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }} className="Total-container">
      <div>
      <h2>Task Management System Login</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-container1"
      />

      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-container2"  
      />

      <br />

      <button onClick={handleLogin} className="button1">
        Login
      </button>
      <button onClick={handleSignup} className="button2">
        Signup
      </button>
      </div>
    </div>
  );
}

export default Login;