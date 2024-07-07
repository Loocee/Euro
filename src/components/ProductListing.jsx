import React from "react";
import { ReactComponent as Like } from "../images/Vector (4).svg";
import { ReactComponent as Shop } from "../images/cart.svg";
import Images from "./Images";

export function List(props) {
  return (
    <div className="card">
      <div className="top">
        <Like />
        <Images img={props.img} />
      </div>
      <hr />
      <div className="bottom">
        <div>
          <h3>Herness Black tint</h3>
          <p>1700 USD</p>
        </div>
        <button>
          <Shop />
        </button>
      </div>
    </div>
  );
}

export function cartList(props) {
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
