import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import changeFilter from '../redux/actions/filter/changeFilter';
import BOOK_CATEGORIES from '../bookCategories';

const categories = BOOK_CATEGORIES.map(category => (
  <option key={category} value={category}>{category}</option>
));

const CategoryFilter = props => (
  <div className="filter-wrap">
    <span>Filter by category</span>
    <select className="filter" onChange={e => props.changeFilter(e.target.value)}>
      <option value="All">All</option>
      {categories}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default connect(null, { changeFilter })(CategoryFilter);
