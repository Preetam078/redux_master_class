import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrementAmount, incrementAmount, incrementByAmount } from "./actions/amount";
const Account = () => {
  const amount = useSelector(state=>state.account.amount)
  const bonus = useSelector(state=>state.points.bonus)
  const dispatch = useDispatch()

  const [value, setValue] = useState(0);
  return (
    <div className="account_container">
      <h1>Amount ::{amount}</h1>
      <h1>Bonus :: {bonus}</h1>
      <div className="feature">
        <button onClick={()=>dispatch(incrementAmount())}>Intcrement Amount + </button>
        <div>
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          ></input>
          <button onClick={()=>dispatch(incrementByAmount(value))}>Increment by Amount</button>
        </div>
        <button onClick={()=>dispatch(decrementAmount())}>Decrement Amount  - </button>
      </div>
    </div>
  );
};

export default Account;
