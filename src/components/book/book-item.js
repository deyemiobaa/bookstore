import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { REMOVE_BOOK } from '../../redux/books/booksSlice';

const Book = ({
  author, title, category, id,
}) => {
  const dispatch = useDispatch();
  const handleClick = ({ target }) => {
    const { id } = target;
    dispatch(REMOVE_BOOK(id));
  };
  return (
    <li>
      <p>{author}</p>
      <p>{title}</p>
      <p>{category}</p>
      <button type="button" onClick={handleClick} id={id}>Remove Book</button>
    </li>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
