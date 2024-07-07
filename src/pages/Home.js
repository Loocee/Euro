import React from "react";
import { Navbar, Filter } from "../components/Nav";
import Header from "../components/Header";
import { NewProduct, AvailableProduct } from "../components/Heading";
import { newProducts, availableProducts } from "../productImage";
import { List } from "../components/ProductListing";
import Footer from "../components/Footer";
import { PreviousButton, NextButton } from "../components/Control";

function createProduct(product) {
  return <List key={product.id} img={product.imgURL} />;
}

export default function Home() {
  const handlePreviousClick = () => {
    // Code to handle previous button click
  };

  const handleNextClick = () => {
    // Code to handle next button click
  };

  return (
    <>
      <Navbar />
      <Header />
      <Filter />
      <NewProduct />
      {newProducts.map(createProduct)}
      <AvailableProduct />
      {availableProducts.map(createProduct)}
      <div>
        <PreviousButton onClick={handlePreviousClick} />
        <NextButton onClick={handleNextClick} />
      </div>
      <Footer />
    </>
  );
}
//       /* {cartProducts.map(createCart)} */
