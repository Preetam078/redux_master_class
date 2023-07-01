import { INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT } from "../actions/amount";

const InitialState = {
    amount:1 
}
export function accountReducer(state = InitialState, action) {
    switch (action.type) {
      case INCREMENT:
        return { amount: state.amount + 1 };
      case DECREMENT:
        if(state.amount >= 1)
            return { amount: state.amount - 1 };
        else
            return state
      case INCREMENT_BY_AMOUNT:
        const sum = parseInt(state.amount) + parseInt(action.payload)
        return { amount:sum};
    //   case INIT:
    //     return { amount: action.payload };
    //   case GET_ACCOUNT_PENDING:
    //     return {amount:state.amount, pending:true}
    //   case GET_ACCOUNT_FULFILLED:
    //     return {amount:state.amount, pending:false}
    //   case GET_ACCOUNT_REJECTED:
    //     return {amount:state.amount, error:action.payload}
      default:
        return state;
    }
  }