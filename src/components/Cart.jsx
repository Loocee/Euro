import React from "react";
import { Navbar, Filter } from "./Nav";
import { CartHeading } from "./Heading";
import Footer from "./Footer";

export const Cart = () => {
  return (
    <div>
      <Navbar />
      <CartHeading />
      <Footer />
    </div>
  );
};
