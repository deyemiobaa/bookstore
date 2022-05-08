import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { status } from './categoriesSlice';

const Categories = () => {
  const text = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <button type="button" onClick={() => dispatch(status())}>Check status</button>
      <p>{text}</p>
    </div>
  );
};
export default Categories;
