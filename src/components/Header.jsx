import React from "react";
import backgroundImage from "../images/background.png";
import { para } from "../productImage";

export default function Header() {
  const divContainerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <header>
      <div className="div-container container" style={divContainerStyle}>
        <div>
          <h1>We are timeless</h1>
        </div>
        <div>
          <p>{para}</p>
        </div>
      </div>
    </header>
  );
}
