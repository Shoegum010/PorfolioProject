import { configureStore } from '@reduxjs/toolkit'
import navReducer from './slices/navSlice';
import systemReducer from "./slices/systemSlice"

export const store= configureStore({
        reducer: {
        navigation: navReducer,
        system: systemReducer
    }
});