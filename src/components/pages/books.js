import React from 'react';
import Book from '../book/book-item';
import NavBar from '../header/navigation';
import Form from '../form/book-submit';

const Books = () => (
  <div className="container">
    <NavBar />
    <div className="book-list">
      <ul>
        <Book
          author="J.K. Rowling"
          title="Harry Potter and the Chamber of Secrets"
        />
      </ul>
    </div>
    <Form />
  </div>
);

export default Books;
