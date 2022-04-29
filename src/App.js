import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Categories from './pages/categories';
import Books from './pages/books';
import NavBar from './components/header/navigation';

class AppBody extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    );
  }
}

export default AppBody;
