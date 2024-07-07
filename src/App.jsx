import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Filter } from "./components/Nav";
import Header from "./components/Header";
import { NewProduct, AvailableProduct } from "./components/Heading";
import { newProducts, availableProducts } from "./productImage";
import { List } from "./components/ProductListing";
import Footer from "./components/Footer";
import { PreviousButton, NextButton } from "./components/Control";
import { Cart } from "./components/Cart";

function createProduct(product) {
  return <List key={product.id} img={product.imgURL} />;
}

export default function App() {
  const handlePreviousClick = () => {
    // Code to handle previous button click
  };

  const handleNextClick = () => {
    // Code to handle next button click
  };

  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          {/* Set up routes for different pages */}
          <Route exact path="/cart" component={Cart} />
          {/* Add more routes as needed */}
        </Switch>
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
    </Router>
  );
}
//       /* {cartProducts.map(createCart)} */
