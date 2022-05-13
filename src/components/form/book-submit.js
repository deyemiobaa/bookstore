import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/booksSlice';
import './book-submit.scss';

const Form = () => {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewBook({ ...newBook, [name]: value });
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(newBook));
    setNewBook({
      title: '',
      author: '',
      category: '',
    });
  };

  const { title, author, category } = newBook;
  return (
    <section>
      <div className="horizontal-divider" />
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="input"
          name="author"
          placeholder="Author"
          value={author}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="input"
          name="category"
          placeholder="Category"
          value={category}
          onChange={handleChange}
          required
        />
        <button type="submit" className="primary-button-big">
          ADD BOOK
        </button>
      </form>
    </section>
  );
};

export default Form;
