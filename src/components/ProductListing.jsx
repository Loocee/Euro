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
