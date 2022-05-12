import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Categories from '../components/pages/categories';
import Books from '../components/pages/books';
import NavBar from '../components/header/navigation';
import { loadBooks } from '../redux/books/booksSlice';
import './App.scss';

const AppBody = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBooks());
  },
  [dispatch]);
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
};

export default AppBody;
