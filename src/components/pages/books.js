import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../book/book-item';
import Form from '../form/book-submit';
import { selectAllBooks } from '../../redux/books/booksSlice';

const Books = () => {
  const allBooks = useSelector(selectAllBooks);
  return (
    <>
      <div className="book-container">
        <ul className="book-list">
          {allBooks.map((book) => (
            <Book
              id={book.id}
              key={book.id}
              author={book.author}
              title={book.title}
              category={book.category}
            />
          ))}
        </ul>
      </div>
      <Form />
    </>
  );
};

export default Books;
