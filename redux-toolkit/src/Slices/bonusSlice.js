import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  bonus: 10,
};

const incrementByAmount = createAction('account/incrementByAmount');

export const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    incrementBonus: (state) => {
      state.bonus += 1;
    },
    decrementBonus: (state) => {
      state.bonus -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementByAmount, (state, action) => {
      console.log(action.payload);
      if (action.payload >= 100) {
        state.bonus += 200;
      }
    });
  },
});

// Action creators
export const { incrementBonus, decrementBonus } = bonusSlice.actions;
export default bonusSlice.reducer;
