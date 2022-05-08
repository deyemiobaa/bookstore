import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Book from '../../components/book/book-item';
import Form from '../../components/form/book-submit';
import { selectAllBooks } from './booksSlice';

const Books = () => {
  const allBooks = useSelector(selectAllBooks);
  useEffect(() => {
  }, []);
  return (
    <>
      <div className="book-list">
        <ul>
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
