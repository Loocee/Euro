import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Nav";
import { CheckoutHeading } from "../components/Heading";
import { TopLeft, Details, Payment } from "../components/Details";
import { shipOption } from "../productImage";

function createShippingOptions(option) {
  return <TopLeft key={option.id} text={option.text} />;
}

function SuccessPage() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/shop");
  };

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
          <div>
            <h4>Congratulations, your order was Successful.</h4>
          </div>
          <button onClick={handleCheckout}>Back to Shopping</button>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
