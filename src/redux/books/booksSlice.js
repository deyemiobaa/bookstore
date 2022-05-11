import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const appId = 'IGqCjYSRuuahNBqX1j4U';

export const loadBooks = createAsyncThunk(
  'bookstore/books/LOAD_BOOKS', async () => {
    const response = await fetch(`${baseURL}/${appId}/books`);
    const books = await response.json();
    const formatedBooksObject = [Object.keys(books).map((key) => ({
      id: key,
      ...books[key][0],
    }))];

    return formatedBooksObject;
  },
);

export const addBook = createAsyncThunk(
  'bookstore/books/ADD_BOOK', async ({ title, author, category }, thunkAPI) => {
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    await fetch(`${baseURL}/${appId}/books`, {
      method: 'POST',
      body: JSON.stringify(newBook),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => thunkAPI.dispatch(loadBooks()));
    const books = thunkAPI.getState().allBooks;
    return books;
  },
);

export const deleteBook = createAsyncThunk(
  'bookstore/books/DELETE_BOOK', async (bookId, thunkAPI) => {
    await fetch(`${baseURL}/${appId}/books/${bookId}`, {
      method: 'DELETE',
    }).then(() => thunkAPI.dispatch(loadBooks()));
    const books = thunkAPI.getState().allBooks;
    return books;
  },
);

export const BookstoreSlice = createSlice({
  name: 'bookstore/books',
  initialState: [],
  reducers: {},
  extraReducers: {
    [loadBooks.fulfilled]: (state, action) => action.payload[0],
    [addBook.fulfilled]: (state, action) => action.payload,
    [deleteBook.fulfilled]: (state, action) => action.payload,
  },
});

// selectors
export const selectAllBooks = (state) => state.allBooks;

export default BookstoreSlice.reducer;
