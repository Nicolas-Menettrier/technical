import React, { useContext } from "react";

import StoreContext from "./store/context";

import "./order.css";

const Order = () => {
  const { prices, totalCount } = useContext(StoreContext);

  return (
    <div className="card">
      Your bill
      <hr />
      Items ordered: <span id="count">{totalCount}</span>
      <br />
      Total Price: <span id="price">{prices}</span> yen
    </div>
  );
};

export default Order;
