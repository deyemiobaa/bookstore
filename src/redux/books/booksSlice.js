const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [];
const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return [...state, action.payload];
    }
    case REMOVE_BOOK: {
      return state.filter((book) => book.id !== action.payload);
    }
    default: {
      return state;
    }
  }
};

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });

export default BookReducer;
