import React from "react";
import { para } from "../productImage";

export default function Header() {
  return (
    <header>
      <div className="header-container">
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
