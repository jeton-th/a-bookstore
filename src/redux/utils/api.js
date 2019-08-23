import axios from 'axios';

const fetchData = async (method, path, data) => {
  const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api'
    : 'https://rails-bookstore-api.herokuapp.com/api';
  const result = await axios[method](`${baseUrl}${path}`, data, {
    headers: { Accept: 'application/json' },
  });
  return result;
};

export default fetchData;
