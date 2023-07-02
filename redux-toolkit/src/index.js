import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Slices/accountSlice";
import bonusReducer from "./Slices/bonusSlice";
import { Provider } from "react-redux";
import rewardReducer from "./reducers/account";
import { adminApi } from "./api/adminSlice";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore(
  {
    reducer:{
      account:accountReducer,
      points:bonusReducer,
      reward:rewardReducer,
      [adminApi.reducerPath]:adminApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
  }
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
