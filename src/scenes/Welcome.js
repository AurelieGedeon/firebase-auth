import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import Button from "react-bootstrap/Button";

export default function Welcome({ user }) {
  console.log(user); //email, displayName, photoURL

  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <h1>Welcome</h1>
      <h2>{user.displayName || user.email}</h2>
      {user.photoURL && (
        <img src={user.photoURL} alt="Profile of logged-in user" />
      )}
      <Button onClick={handleLogOut}>Logout</Button>
    </>
  );
}
