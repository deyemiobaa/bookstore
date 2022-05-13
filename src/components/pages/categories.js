import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { STATUS } from '../../redux/categories/categoriesSlice';

const Categories = () => {
  const text = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <button className="primary-button" type="button" onClick={() => dispatch(STATUS())}>CHECK STATUS</button>
      <p>{text}</p>
    </div>
  );
};

export default Categories;
