import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../ConnectAuth";

export default function Signup({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        navigate("/");
      })
      .catch(alert);
  };
  return (
    <>
      <h1>Signup</h1>
      <hr />
      <form onSubmit={handleFormSubmit}>
        <label>
          Email:{" "}
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(event) => setPasword(event.target.value)}
          />
        </label>
        <input type="submit" value="Sign up" />
      </form>
      <p>
        Already a user? <Link to="/login">Login</Link>
      </p>
    </>
  );
}
