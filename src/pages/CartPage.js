import React from "react";
import { Navbar } from "../components/Nav";
import { CartHeading } from "../components/Heading";
import Footer from "../components/Footer";
import { Cart, CartList } from "../components/Cart";
import { cartProducts } from "../productImage";
import { PreviousButton, NextButton } from "../components/Control";
import { SimilarProduct } from "../components/Heading";
import { List } from "../components/ProductListing";
import { similarProducts } from "../productImage";

function createCart(prod) {
  return <CartList key={prod.id} img={prod.imgURL} />;
}

function createProduct(product) {
  return <List key={product.id} img={product.imgURL} />;
}

function CartPage() {
  const handlePreviousClick = () => {
    // Code to handle previous button click
  };

  const handleNextClick = () => {
    // Code to handle next button click
  };
  return (
    <div>
      <Navbar />
      <CartHeading />
      <div>
        {cartProducts.map(createCart)}
        <Cart />
      </div>
      <SimilarProduct />
      {similarProducts.map(createProduct)}

      <div>
        <PreviousButton onClick={handlePreviousClick} />
        <NextButton onClick={handleNextClick} />
      </div>

      <Footer />
    </div>
  );
}

export default CartPage;
