import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/booksSlice';

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
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="author"
            placeholder="Author"
            value={author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="category"
            placeholder="Category"
            value={category}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;
