import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name: 'cart',

    //initialState is an object this object has an items here cart items.

    initialState: {
        items: []
    },
    
    //reducers modifies the state
    reducers: {
        addItems: (state,action)=>{
            //mutating the state here i.e we are modifying state here
            //we have to mutate the state in redux toolkit
            //redux toolkit uses Immer behind the scenes
            state.items.push(action.payload);
        },
        removeItem: (state)=>{
            state.items.pop();
        },
        clearCart: (state)=>{
            state.items.length=0;
    },
},
});

export const {addItems,removeItem,clearCart} = cartSlice.actions;


export default cartSlice.reducer;