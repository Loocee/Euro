import React from "react";
import { Navbar } from "../components/Nav";
import { CheckoutHeading } from "../components/Heading";
import Footer from "../components/Footer";
import { TopLeft, Details } from "../components/Details";
import { shipOption } from "../productImage";

function createShippingOptions(option) {
  return <TopLeft key={option.id} text={option.text} />;
}

function CheckoutPage() {
  return (
    <div>
      <Navbar />
      <CheckoutHeading />
      <div>
        {shipOption.map(createShippingOptions)}
        <Details />
      </div>
      <Footer />
    </div>
  );
}

export default CheckoutPage;
