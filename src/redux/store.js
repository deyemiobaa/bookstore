import { createStore, combineReducers } from 'react-redux';
import BookReducer from './books/booksSlice';
import CategoryReducer from './categories/categoriesSlice';

const store = createStore(
  combineReducers({
    books: BookReducer,
    categories: CategoryReducer,
  }),
);

export default store;
