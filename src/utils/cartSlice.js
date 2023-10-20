import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: JSON.parse(localStorage.getItem("items")) || [],
    },
    reducers: {
        addItem: (state, action) => {
            // mutating the state here
            state.items.push(action.payload);
            let userData = JSON.stringify(current(state.items))
            localStorage.setItem('items', userData)
        },
        removeItem: (state, action) => {
            const itemIdToRemove = action.payload;
            state.items = state.items.filter((item) => item.card.info.id !== itemIdToRemove);

            localStorage.setItem('items', JSON.stringify(state.items))
        },
        clearCart: (state) => {
            state.items.length = 0;
            localStorage.removeItem("items");
        },
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;