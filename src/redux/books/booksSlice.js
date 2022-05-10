import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: uuidv4(), author: 'author 1', title: 'Book 1', category: 'Category 1',
  },
  {
    id: uuidv4(), author: 'author 2', title: 'Book 2', category: 'Category 2',
  },
  {
    id: uuidv4(), author: 'author 3', title: 'Book 3', category: 'Category 3',
  },
];

const BookstoreSlice = createSlice({
  name: 'bookstore/books',
  initialState,
  reducers: {
    ADD_BOOK: (state, action) => {
      const id = uuidv4();
      state.push({
        ...action.payload,
        id,
      });
    },
    REMOVE_BOOK: (state, action) => {
      const bookToRemove = state.findIndex((book) => book.id === action.payload);
      state.splice(bookToRemove, 1);
    },
  },
});

// action creators
export const { ADD_BOOK, REMOVE_BOOK } = BookstoreSlice.actions;

// selectors
export const selectAllBooks = (state) => state.allBooks;

export default BookstoreSlice.reducer;
