export default (state = false, action) => {
  switch (action.type) {
    case 'FETCHING':
      return action.bool;
    default:
      return state;
  }
};
