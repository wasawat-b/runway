import { configureStore } from '@reduxjs/toolkit';
import listSlice from './list-slice';
import uiSlice from './ui-slice';

const store = configureStore({
    reducer: { lists : listSlice.reducer, ui : uiSlice.reducer }
});

export default store;