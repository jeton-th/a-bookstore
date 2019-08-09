import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import changeFilter from '../redux/actions/filter/changeFilter';
import BOOK_CATEGORIES from '../bookCategories';

const styles = {
  width: 285,
  height: 35,
  borderRadius: 4,
  border: '1px solid #eee',
  backgroundColor: '#fff',
  fontSize: 16,
};

const categories = BOOK_CATEGORIES.map(category => (
  <option key={category} value={category}>{category}</option>
));

const CategoryFilter = props => (
  <div style={{ textAlign: 'center', margin: '20px auto', fontSize: 16 }}>
    <span style={{ marginRight: 5 }}>Filter by category</span>
    <select style={styles} onChange={e => props.changeFilter(e.target.value)}>
      <option value="All">All</option>
      {categories}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default connect(null, { changeFilter })(CategoryFilter);
