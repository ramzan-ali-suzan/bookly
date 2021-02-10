import React, { Component } from "react";
import { getBooks } from "./../services/fakeBookService";

class Books extends Component {
  state = {
    books: getBooks(),
  };

  handleDelete = (book) => {
    const books = this.state.books.filter((m) => m._id !== book._id);
    this.setState({ books });
  };

  render() {
    const { length: count } = this.state.books;
    if (count === 0) return <p>There is no Books in the database!</p>;
    return (
      <React.Fragment>
        <p>Showing {count} books in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Author</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map((book) => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.genre.name}</td>
                <td>{book.numberInStock}</td>
                <td>{book.author}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(book)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Books;
