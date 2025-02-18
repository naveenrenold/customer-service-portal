import "./Header.css";

function Header() {
  const LogOut = () => {
    sessionStorage.removeItem("employee");
  };
  return (
    <>
      <ul className="flex">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/product">Product</a>
        </li>
        <li>
          <a href="/" onClick={LogOut}>
            Logout
          </a>
        </li>
      </ul>
    </>
  );
}

export default Header;
