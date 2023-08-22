import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore=configureStore({

    /**below reducer is for whole app and in that reducer 
    we have multiple reducers for each slice here cart is one slice 
    so cartSlice having its reducer in it's code 
    also if we have multiple slices like userSlice or themeSlice etc
    then also each slice will have their own reducers 
    and in our appStore reducer is for whole store where all the slice reducers are inside 
    
    IMPORTANT::::********

    when we write slice we create multiple reducers so in slice it is a "reducers:"
    and in store only one reducer for whole store so it is "reducer:"
    **/ 

    reducer: {
        cart: cartReducer,
    },

});

export default appStore;