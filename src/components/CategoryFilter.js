import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../redux/actions/index';
import BOOK_CATEGORIES from '../bookCategories';

const categories = BOOK_CATEGORIES.map(category => (
  <option key={category} value={category}>{category}</option>
));

const CategoryFilter = props => (
  <select onChange={e => props.changeFilter(e.target.value)}>
    <option value="All">All</option>
    {categories}
  </select>
);

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default connect(null, { changeFilter })(CategoryFilter);
