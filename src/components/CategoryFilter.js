import React from 'react';
import PropTypes from 'prop-types';
import { BOOK_CATEGORIES } from '../containers/BooksForm';

const categories = BOOK_CATEGORIES.map(category => (
  <option key={category} value={category}>{category}</option>
));

const CategoryFilter = ({ filterHandler }) => (
  <select onChange={e => filterHandler(e.target.value)}>
    <option value="All">All</option>
    {categories}
  </select>
);

CategoryFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
