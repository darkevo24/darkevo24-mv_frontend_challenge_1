import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    money : 0
}
export const Slice = createSlice({
 // createSlice a function that accepts object full of reducer functions and 
//automatically generates action creators and action types 
  name: 'money',
  initialState,
  reducers: {
      deposit(state,action){
        state.money = state.money + parseInt(action.payload);  
      },
      withdraw(state,action){
        state.money = state.money - parseInt(action.payload); 
      }
  },
})

export const { deposit,withdraw } = Slice.actions

export default Slice.reducer