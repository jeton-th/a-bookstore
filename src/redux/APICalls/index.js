import axios from 'axios';

const ENDPOINT = 'https://rails-bookstore-api.herokuapp.com/api/v1/books';

const getBooks = async () => {
  const response = await axios.get(ENDPOINT);
  return response;
};

const postBook = async ({ title, author, category }) => {
  const response = await axios.post(ENDPOINT, {
    title,
    author,
    category,
  });
  return response;
};

const deleteBook = async (id) => {
  await axios.delete(`${ENDPOINT}/${id}`);
};

const updateBook = async (id, { chapter }) => {
  const response = await axios.put(`${ENDPOINT}/${id}`, {
    chapter,
  });
  return response;
};

export {
  getBooks,
  postBook,
  deleteBook,
  updateBook,
};
