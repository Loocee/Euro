import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../public/images/Eurosial.svg";
import { ReactComponent as Verizon } from "../../public/images/Logo.svg.svg";
import { ReactComponent as Paypal } from "../../public/images/paypal_logo.svg.svg";
import { ReactComponent as Mastercard } from "../../public/images/mastercard_symbol.svg.svg";
import { ReactComponent as Visa } from "../../public/images/visa_inc_logo.svg.svg";
import { ReactComponent as Verve } from "../../public/images/verve_direct_logo.png.svg";

import { para } from "../productImage";
import Legal from "./Legal";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <footer>
      <Logo />
      <hr />

      <div>
        <div>
          <p>{para}</p>
        </div>
        <div>
          <Legal />
        </div>
        <div>
          <Legal />
        </div>
        <div>
          <Legal />
        </div>
      </div>
      <div>
        <div>
          <p>All rights reserved &copy; {year}</p>
        </div>
        <div>
          <span>Trusted by</span>
          <Verizon />
          <Paypal />
          <Mastercard />
          <Visa />
          <Verve />
        </div>
      </div>
    </footer>
  );
}
