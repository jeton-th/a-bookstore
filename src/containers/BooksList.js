import React from 'react';

export default class BooksList extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </table>
    );
  }
}
