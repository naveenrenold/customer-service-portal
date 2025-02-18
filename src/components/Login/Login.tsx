import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const Login = () => {
    Navigate("/home");
    return true;
  };
  const Navigate = useNavigate();
  return (
    <>
      <label>
        UserName:
        <input type="text"></input>
      </label>
      <label>
        Password:
        <input type="password"></input>
      </label>
      <button onClick={Login} type="submit">
        Login
      </button>
    </>
  );
}

export default Login;
