import React from 'react';
import Book from '../components/book/book-item';
import NavBar from '../components/header/navigation';
import Form from '../components/form/book-submit';

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
