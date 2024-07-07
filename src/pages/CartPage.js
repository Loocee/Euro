import React from "react";
import { Navbar, Filter } from "../components/Nav";
import { CartHeading } from "../components/Heading";
import Footer from "../components/Footer";

function CartPage() {
  return (
    <div>
      <Navbar />
      <CartHeading />
      <Footer />
    </div>
  );
}

export default CartPage;
