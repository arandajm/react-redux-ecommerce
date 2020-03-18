import React from "react";
import BasketContainer from "./BasketContainer";
import CurrencySelectorContainer from "./CurrencySelectorContainer";

export default () => (
  <div className="header">
    <div>
      <h1>Super Electronics</h1>
    </div>
    <div>
      <CurrencySelectorContainer />
      <BasketContainer items={0} total={0.0} />
    </div>
  </div>
);
