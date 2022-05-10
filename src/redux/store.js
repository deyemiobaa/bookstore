import { configureStore } from '@reduxjs/toolkit';
import BookReducer from './books/booksSlice';
import CategoryReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    allBooks: BookReducer,
    categories: CategoryReducer,
  },
});

export default store;
