import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';

// Action name constants
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const INCREMENT_BY_AMOUNT = 'incrementByAmount';
const INIT = 'init';

// Store
const store = createStore(reducer, applyMiddleware(logger.default, thunk.default));
const history = [];

// Initialized state
function reducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { amount: state.amount + 1 };
    case DECREMENT:
      return { amount: state.amount - 1 };
    case INCREMENT_BY_AMOUNT:
      return { amount: state.amount + action.payload };
    case INIT:
      return { amount: action.payload };
    default:
      return state;
  }
}

store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});

// Async API call using redux-thunk
function getUser(id) {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/account/${id}`);
      dispatch(initializeUser(data.amount));
    } catch (error) {
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
  return { type: DECREMENT };
}

setTimeout(() => {
  store.dispatch(getUser(2));
}, 5000);
