import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {},
    },
    reducers: {
        increment: (state, data) => {
            let art = data.payload;
            if (state.value[art] === undefined) state.value[art] = 0;
            state.value[art]++;
        },

        decrement: (state, data) => {
            let art = data.payload;
            (state.value[art] - 1) ?
                state.value[art]-- :
                delete state.value[art];
        },

        remove: (state, data) => {
            delete state.value[data.payload];
        },
    }
});

export const { increment, decrement, remove } = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;