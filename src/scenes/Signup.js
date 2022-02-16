import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState();
  const [password, setPasword] = useState();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`Trying to sign up as ${email}`);
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
