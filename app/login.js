"use client";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../../firebase/firebaseConfig"; 
const auth = getAuth(app);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  // Sign up new users
  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  // Log in existing users
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  // Log out
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px", fontFamily: "Lato" }}>
      <h1>🌿 Welcome to PlantPal</h1>
      {!user ? (
        <div>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "10px", margin: "10px" }}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", margin: "10px" }}
          />
          <br />
          <button onClick={handleSignUp} style={{ marginRight: "10px" }}>Sign Up</button>
          <button onClick={handleLogin}>Log In</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      ) : (
        <div>
          <h2>Hi, {user.email}! 🌸</h2>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      )}
    </div>
  );
}
