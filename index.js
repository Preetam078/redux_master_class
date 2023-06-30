import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';

// Action name constants
const INCREMENT = 'account/increment';
const DECREMENT = 'account/decrement';
const INCREMENT_BY_AMOUNT = 'account/incrementByAmount';
const INIT = 'init';
const INCREMENT_BONUS = 'bonus/increment' ;
const GET_ACCOUNT_PENDING = 'account/pending';
const GET_ACCOUNT_FULFILLED = 'account/fulfilled';
const GET_ACCOUNT_REJECTED= 'account/Rejected';

// Store
const store = createStore(combineReducers({account:accountReducer, bonus:bonusReducer}), applyMiddleware(logger.default, thunk.default));
const history = [];

// Initialized state in the reducer
function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { amount: state.amount + 1 };
    case DECREMENT:
      return { amount: state.amount - 1 };
    case INCREMENT_BY_AMOUNT:
      return { amount: state.amount + action.payload };
    case INIT:
      return { amount: action.payload };
    case GET_ACCOUNT_PENDING:
      return {amount:state.amount, pending:true}
    case GET_ACCOUNT_FULFILLED:
      return {amount:state.amount, pending:false}
    case GET_ACCOUNT_REJECTED:
      return {amount:state.amount, error:action.payload}
    default:
      return state;
  }
}

function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case INCREMENT_BONUS:
      return { points: state.points + 1 };
    case DECREMENT:
      return { points: state.points - 1 };
    case INCREMENT_BY_AMOUNT:
      return { points: state.points + action.payload };
    case INIT:
      return { points: action.payload };
    default:
      return state;
  }
}

store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});

// Async API call using redux-thunk
function getUserAccount(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getUserAccountPending())
      const { data } = await axios.get(`http://localhost:3000/account/${id}`);
      dispatch(initializeUser(data.amount));
      dispatch(getUserAccountFulfilled())
    } catch (error) {
      dispatch(getUserAccountRejected(error.message))
      console.error('Error fetching user:', error);
    }
  };
}

//action creator
function initializeUser(value) {
  return { type: INIT, payload: value };
}

function incrementByAmount(value) {
  return { type: INCREMENT_BY_AMOUNT, payload: value };
}

function increment() {
  return { type: INCREMENT };
}

function decrement() {
  return { type: DECREMENT }
}
function getUserAccountPending() {
  return {type: GET_ACCOUNT_PENDING}
}
function getUserAccountFulfilled() {
  return {type: GET_ACCOUNT_FULFILLED}
}
function getUserAccountRejected(error) {
  return {type: GET_ACCOUNT_REJECTED, payload:error}
}

//actual program will going to execute from here.
setTimeout(() => {
  store.dispatch(getUserAccount(1));
}, 5000);
