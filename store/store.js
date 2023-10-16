import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './categoriesSlice';

export default configureStore({
    reducer: {
        categories: categoriesSlice,
    },
});
