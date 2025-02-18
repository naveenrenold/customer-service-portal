import Header from "../Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Product from "../Product/Product";
import Home from "../Home/Home";

function App() {
  return (
    <>
      <p>Customer Service Portal</p>
      <hr />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
