import React from "react";
import { Navbar } from "../components/Nav";
import { CheckoutHeading } from "../components/Heading";
import Footer from "../components/Footer";
import TopLeft from "../components/Details";

function CheckoutPage() {
  return (
    <div>
      <Navbar />
      <CheckoutHeading />
      <TopLeft />
      <Footer />
    </div>
  );
}

export default CheckoutPage;
