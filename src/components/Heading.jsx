import React from "react";
const headingTexts = ["New Products", "Available Products", "Cart"];

export function NewProduct() {
  return <h2>{headingTexts[0]}</h2>;
}

export function AvailableProduct() {
  return <h2>{headingTexts[1]}</h2>;
}

export function CartHeading() {
  return <h2>{headingTexts[2]}</h2>;
}
