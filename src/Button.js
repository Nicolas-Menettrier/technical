import React, { useContext } from "react";

import { capitalize } from "./utils/capitalize";

import StoreContext from "./store/context";

import { MAP_PRICES } from "./hooks/useCount";

import "./button.css";

const Button = ({ name }) => {
  const { updateCount } = useContext(StoreContext);

  return (
    <button id={name} className="button" onClick={() => updateCount(name)}>
      <div>
        <span>{capitalize(name)}</span>
        <span>{MAP_PRICES[name]} yen</span>
      </div>
    </button>
  );
};

export default Button;
