import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

//action name constant
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const INCREMENT_BY_AMOUNT = 'incrementByAmount';



//store
const store = createStore(reducer, applyMiddleware(logger.default )) //this is deprecated
const history = []

//initialized state
function reducer(state = { amount: 1 }, action) {
    switch (action.type) {
      case INCREMENT:
        return { amount: state.amount + 1 };
      case DECREMENT:
        return { amount: state.amount - 1 };
      case INCREMENT_BY_AMOUNT:
        return { amount: state.amount + action.payload };
      default:
        return state;
    }
  }
  

// //global state 
// console.log(store.getState())
//OR
store.subscribe(() => {
    history.push(store.getState())
    console.log(history);  //run automatically on state update
})

setInterval(() => {
    store.dispatch(incrementbyAmount(200))
}, 5000)

//Action creator
function incrementbyAmount(value) {
    return{type:INCREMENT_BY_AMOUNT, payload:value}
}
function increment() {
    return{type:INCREMENT}
}
function decrement() {
    return{type:DECREMENT}
}
