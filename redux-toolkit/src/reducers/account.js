import { createAction, createReducer } from "@reduxjs/toolkit";

//this is just for the demonstration purpose 
const increment = createAction('account/increment')
const initialState = {
    reward:100
}

const rewardReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(increment, (state) => {
        state.reward += 1 
    })
})

export default rewardReducer