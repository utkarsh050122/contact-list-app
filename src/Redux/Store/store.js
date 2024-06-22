//for creating store
import { configureStore } from "@reduxjs/toolkit";

// importing the contact Reducers
import { contactReducer } from "../Reducers/contactReducer.js"

// creating store from reducers
export const store = configureStore({
    reducer:{
        contactReducer
    }
})