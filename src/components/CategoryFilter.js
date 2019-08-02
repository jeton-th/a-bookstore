import React from 'react';
import PropTypes from 'prop-types';
import { BOOK_CATEGORIES } from '../containers/BooksForm';

const styles = {
  width: 285,
  height: 45,
  borderRadius: 4,
  border: '1px solid #eee',
  backgroundColor: '#fff',
  fontSize: 16,
};

const categories = BOOK_CATEGORIES.map(category => (
  <option key={category} value={category}>{category}</option>
));

const CategoryFilter = ({ filterHandler }) => (
  <div style={{ textAlign: 'center', margin: '20px auto', fontSize: 16 }}>
    <span style={{ marginRight: 5 }}>Filter by category</span>
    <select style={styles} onChange={e => filterHandler(e.target.value)}>
      <option value="All">All</option>
      {categories}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
