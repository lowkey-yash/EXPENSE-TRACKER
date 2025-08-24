import React, { useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const Transaction = ({ trans }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = trans.amount < 0 ? "-" : "+";
  return (
    <li className={trans.amount < 0 ? "minus" : "plus"}>
      {trans.text}{" "}
      <span>
        {sign}${Math.abs(trans.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(trans._id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
