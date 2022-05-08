import { legacy_createStore as createStore, combineReducers } from 'redux';
import BookReducer from './books/booksSlice';
import CategoryReducer from './categories/categoriesSlice';

const store = createStore(
  combineReducers({
    allBooks: BookReducer,
    categories: CategoryReducer,
  }),
);

export default store;
