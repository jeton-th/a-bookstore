export default (filter = 'All', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.category;
    default:
      return filter;
  }
};
