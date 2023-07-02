import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, fetchUserById } from "./Slices/accountSlice";

const Account = () => {
  const [value, setValue] = useState(0);

  const amount = useSelector((state) => state.account.amount);
  const bonus = useSelector((state) => state.points.bonus);
  const dispatch = useDispatch();

  return (
    <div className="account_container">
      <h1>Amount :: {amount}</h1>
      <h1>Bonus :: {bonus}</h1>
      <div className="feature">
        <button onClick={() => dispatch(increment())}>Increment Amount +</button>
        <div>
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          ></input>
          <button onClick={() => dispatch(incrementByAmount(value))}>
            Increment by Amount
          </button>
        </div>
        <button onClick={() => dispatch(decrement())}>Decrement Amount -</button>
        <button onClick={() => dispatch(fetchUserById(4))}>Fetch User</button>
      </div>
    </div>
  );
};

export default Account;
