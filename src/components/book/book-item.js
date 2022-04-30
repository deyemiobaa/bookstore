import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ author, title }) => (
  <li>
    {author}
    {' '}
    {title}
  </li>
);

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
