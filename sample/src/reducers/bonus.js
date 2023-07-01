import { DECREMENT_BONUS, INNCREMENT_BONUS } from "../actions/bonus";

const InitialState = {
    bonus:0
}

export function bonusReducer(state = InitialState, action) {
    switch(action.type) {
        case INNCREMENT_BONUS:
            return{bonus:state.bonus+1}
        case DECREMENT_BONUS:
            return{bonus:state.bonus-1}
        default:
            return state
    }
}