const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    id: 1, author: 'author 1', title: 'Book 1', category: 'Category 1',
  },
  {
    id: 2, author: 'author 2', title: 'Book 2', category: 'Category 2',
  },
  {
    id: 3, author: 'author 3', title: 'Book 3', category: 'Category 3',
  },
];
const BookReducer = (allBooks = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const id = allBooks.length + 1;
      const newBook = {
        ...action.payload,
        id,
      };
      return [...allBooks, newBook];
    }
    case REMOVE_BOOK: {
      return allBooks.filter((book) => book.id !== action.payload);
    }
    default: {
      return allBooks;
    }
  }
};

// action creators
export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });

// selectors
export const selectAllBooks = (state) => state.allBooks;

export default BookReducer;
