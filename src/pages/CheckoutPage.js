import React from "react";
import { Navbar } from "../components/Nav";
import { CheckoutHeading } from "../components/Heading";
import Footer from "../components/Footer";
import {
  TopLeft,
  Details,
  Payment,
  ContinuePayment,
} from "../components/Details";
import { shipOption, checkoutProducts } from "../productImage";
import Images from "../components/Images";

function createShippingOptions(option) {
  return <TopLeft key={option.id} text={option.text} />;
}

function createCheckoutImages(image) {
  return <Images key={image.id} text={image.imgURL} />;
}

function CheckoutPage() {
  return (
    <div>
      <Navbar />
      <CheckoutHeading />
      <div>
        <div className="left">
          {shipOption.map(createShippingOptions)}
          <Details />
          <Payment />
        </div>
        <div className="right">
          <div>{checkoutProducts.map(createCheckoutImages)}</div>
          <ContinuePayment />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckoutPage;
