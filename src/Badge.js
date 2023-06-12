import React, { useContext } from "react";

import StoreContext from "./store/context";

import "./badge.css";

const Badge = ({ name }) => {
  const { count } = useContext(StoreContext);
  return (
    <div className="badge" id={`${name}-count`}>
      {count[name]}
    </div>
  );
};

export default Badge;
