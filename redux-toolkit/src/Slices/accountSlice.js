import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    amount:100
}

export const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
      const { data } = await axios.get(`http://localhost:3000/account/${userId}`);
      return data
    }
  )

export const accountSlice = createSlice({
    name:"account",
    initialState, 
    reducers : {
        increment : (state) => {
            state.amount+= 1
        },
        decrement: (state) => {
            if(state.amount >= 1) {
                state.amount -= 1
            }
        },
        incrementByAmount: (state, action) => {
            const sum = parseInt(state.amount) + parseInt(action.payload)
            state.amount = sum
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            console.log(action.payload.amount);
            const sum = parseInt(state.amount) + parseInt(action.payload.amount)
            state.amount = sum 
        })
    }
})

//creating the action creator automatically via toolkit
export const {increment, decrement, incrementByAmount} = accountSlice.actions
export default accountSlice.reducer