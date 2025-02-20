import Header from "../Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Product from "../Product/Product";
import Home from "../Home/Home";
import { useState } from "react";
import "./App.css";

function App() {
  let [isLoggedIn, UpdateIsLoggedIn] = useState(
    sessionStorage.getItem("employee") != null
  );
  return (
    <>
      <div className="flex center mp0">
        <div className="font">Customer Service Portal</div>
      </div>
      <BrowserRouter>
        {isLoggedIn && <Header />}
        <Routes>
          <Route
            path="/"
            element={<Login UpdateIsLoggedIn={UpdateIsLoggedIn} />}
          ></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
