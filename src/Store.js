import React from "react";

import Button from "./Button";
import Badge from "./Badge";
import Order from "./Order";

import "./store.css";

const Store = () => {
  return (
    <div className="container">
      <div className="button-list">
        {["coffee", "tea", "milk", "coke", "beer"].map((name) => (
          <div className="node">
            <Button name={name} />
            <Badge name={name} />
          </div>
        ))}
      </div>
      <Order />
    </div>
  );
};

export default Store;
