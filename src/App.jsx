import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Checkoutpage from "./pages/CheckoutPage";

export default function App() {
  <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkoutpage />} />
      </Routes>
    </BrowserRouter>
  </div>;
}
