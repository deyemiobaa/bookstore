import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const author = e.target.elements.author.value;
    const title = e.target.elements.title.value;
    const category = e.target.elements.category.value;
    dispatch(addBook({ author, title, category }));
  };
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
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="author"
            placeholder="Author"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="category"
            placeholder="Category"
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
