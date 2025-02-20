import { useNavigate } from "react-router-dom";
import validLoginJson from "../../MockData/login.json";
import { useState } from "react";
import "./Login.css";

function Login({
  UpdateIsLoggedIn,
}: {
  UpdateIsLoggedIn: (e: boolean) => void;
}) {
  const Login = () => {
    const currentUser : UserLogin[] = validUsers.filter(
      (a) =>
        a.username == username &&
        a.password == password)
    if (currentUser != null)
     {
      UpdateIsLoggedIn(true);
      sessionStorage.setItem("employee", JSON.stringify({username :currentUser[0].username, filter : currentUser[0].filter}));
      Navigate("/home");
      return true;
    }
    alert("Invalid credentials");
    return false;
  };
  const validUsers: UserLogin[] = validLoginJson;
  const Navigate = useNavigate();
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");
  return (
    <>
      <div className="flex center flexcolumm">
        <div className="textalign padding">
          <label>
            UserName:
            <input
              className="margin-left-5"
              type="text"
              value={username}
              onChange={(e) => {
                updateUsername(e.target.value);
              }}
            ></input>
          </label>
        </div>
        <div className="textalign padding">
          <label>
            Password:
            <input
              className="margin-left-10"
              type="password"
              value={password}
              onChange={(e) => {
                updatePassword(e.target.value);
              }}
            ></input>
          </label>
        </div>
        <div className="textalign padding">
          <button className="margin-left-10" onClick={Login} type="submit">
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;

interface UserLogin {
  username: string;
  password: string;
  filter: string;
}
