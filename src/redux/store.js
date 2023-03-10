import { configureStore } from '@reduxjs/toolkit'
import settingsSlice from './settingsSlice';
import postSlice from './postSlice';
// note the professor named this import settingsReducer

export const store = configureStore({
    reducer: {
        settings: settingsSlice,
        posts: postSlice,
    }
})
