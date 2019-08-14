import axios from 'axios';

const fetchData = async (method, path, data) => {
  const baseUrl = 'https://rails-bookstore-api.herokuapp.com/api';
  const result = await axios[method](`${baseUrl}${path}`, data);
  return result;
};

export default fetchData;
