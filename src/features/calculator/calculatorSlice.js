import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 77,
  leftValue: '',
  operator: '',
  rightValue: '',
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    value: (state,action) => {
        console.log('action---->',action.payload);
        console.log('state---->',state);
        console.log('before state.value',state.value);
        console.log('before state.leftValue',state.leftValue);
        console.log('before state.operator',state.operator);
        console.log('before state.right',state.rightValue);
        if(state.operator === ''){
            state.leftValue += action.payload
        }else{
            state.rightValue += action.payload
        }

        console.log('after state.value',state.value);
        console.log('after state.leftValue',state.leftValue);
        console.log('after state.operator',state.operator);
        console.log('after state.right',state.rightValue);
        
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { value, decrement, incrementByAmount } = calculatorSlice.actions

export const selectCount = (state) => state.calculator.value;


export default calculatorSlice.reducer