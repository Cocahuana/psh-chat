import React from "react";
import App from "../App";
import { Link, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      {/* 
      <Route path="/" element={<Home />} />
      <Route path="/categories/" element={<Categories />}>
        <Route path="desktops" element={<Desktops />} />
        <Route path="laptops" element={<Laptops />} />
      </Route>
      <Route path="/products" element={<Products />} /> 
      */}
    </Routes>
  );
}

export default Router;
