import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrementBonus, incremenrBonus } from "./actions/bonus";
const Bonus = () => {
    const amount = useSelector(state=>state.account.amount)
    const bonus = useSelector(state=>state.points.bonus)
    const dispatch = useDispatch()

  return (
    <div className="account_container">
      <h1>Amount ::{amount}</h1>
      <h1>Bonus :: {bonus}</h1>
      <div className="feature">
        <button onClick={()=>dispatch(incremenrBonus())}>Intcrement Bonus + </button>
        <div>
        </div>
        <button onClick={()=>dispatch(decrementBonus())}>Decrement Bonus - </button>
      </div>
    </div>
  );
};

export default Bonus;
