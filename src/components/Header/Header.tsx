import "./Header.css";

function Header() {
  const LogOut = () => {
    sessionStorage.removeItem("employee");
  };
  return (
    <>
      <ul className="flex">
        <li>
          <a className="a" href="/home">
            Home
          </a>
        </li>
        {/* <li>
          <a className="disabled .a" href="/product">
            Product
          </a>
        </li> */}
        <li>
          <a className="a" href="/" onClick={LogOut}>
            Logout
          </a>
        </li>
      </ul>
    </>
  );
}

export default Header;
