import React from "react";
import { useNavigate } from "react-router-dom";
import Images from "./Images";

export function Cart() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div>
      <div>
        <div className="top-div">
          <div>
            <h4>Total</h4>
            <h4>1700 USD</h4>
          </div>
          <div>
            <div>
              <span>Discount</span>
              <span>0 USD</span>
            </div>
            <div>
              <span>Tax</span>
              <span>7 USD</span>
            </div>
            <div>
              <h4>Subtotal</h4>
              <h4>3200 USD</h4>
            </div>
          </div>
        </div>
        <button onClick={handleCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export function CartList(props) {
  return (
    <div className="card">
      <div className="left">
        <Images img={props.img} />
      </div>
      <div className="right">
        <div>
          <div className="right-right">
            <div className="right-right-top">
              <h3>Herness Black Luxury watch</h3>
              <p>Black color</p>
            </div>
            <div className="right-right-bottom">
              <button>1</button>
            </div>
          </div>
          <div className="right-left">
            <div className="right-left-top">
              <p>1700</p>
            </div>
            <div className="right-left-bottom">
              <span>Edit</span>
              <button type="delete">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
