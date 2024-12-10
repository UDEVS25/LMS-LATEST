import React, { useState } from "react";
import "./Library.css";

const Library = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "JavaScript: The Good Parts", author: "Douglas Crockford", status: "Available" },
    { id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke", status: "Checked Out" },
    { id: 3, title: "Clean Code", author: "Robert C. Martin", status: "Available" },
    { id: 4, title: "You Don’t Know JS", author: "Kyle Simpson", status: "Available" },
    { id: 5, title: "Learning React", author: "Alex Banks", status: "Available" },
    { id: 6, title: "The Pragmatic Programmer", author: "Andrew Hunt", status: "Available" },
    { id: 7, title: "Design Patterns: Elements of Reusable Object-Oriented Software", author: "Erich Gamma", status: "Available" },
    { id: 8, title: "Introduction to Algorithms", author: "Thomas H. Cormen", status: "Available" },
    { id: 9, title: "The Clean Coder", author: "Robert C. Martin", status: "Available" },
    { id: 10, title: "The Mythical Man-Month", author: "Frederick P. Brooks Jr.", status: "Available" },
    { id: 11, title: "Python Crash Course", author: "Eric Matthes", status: "Available" },
    { id: 12, title: "The Art of Computer Programming", author: "Donald E. Knuth", status: "Available" },
    { id: 13, title: "The Algorithm Design Manual", author: "Steven S. Skiena", status: "Available" },
    { id: 14, title: "Data Science for Business", author: "Foster Provost", status: "Available" },
    { id: 15, title: "Refactoring: Improving the Design of Existing Code", author: "Martin Fowler", status: "Available" },
  ]);

  const [rentedBooks, setRentedBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  // Handle renting a book
  const rentBook = (bookId) => {
    if (rentedBooks.length >= 2) {
      alert("You cannot rent more than 2 books at a time.");
      return;
    }

    const bookToRent = books.find((book) => book.id === bookId);
    if (bookToRent.status === "Available") {
      const returnDate = new Date();
      returnDate.setDate(returnDate.getDate() + 7); // Set return date to 7 days from today

      const updatedBooks = books.map((book) =>
        book.id === bookId ? { ...book, status: "Checked Out" } : book
      );
      setBooks(updatedBooks);

      const rentedBook = {
        ...bookToRent,
        returnDate: returnDate.toDateString(),
      };
      setRentedBooks([...rentedBooks, rentedBook]);
      setSelectedBook(rentedBook);
    }
  };

  // Handle returning a rented book
  const returnBook = (bookId) => {
    const updatedBooks = books.map((book) =>
      book.id === bookId ? { ...book, status: "Available" } : book
    );
    setBooks(updatedBooks);
    setRentedBooks(rentedBooks.filter((book) => book.id !== bookId));
  };

  return (
    <div className="library-container">
      <h1 className="library-title">Library Section</h1>
      <table className="library-table">
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td className={book.status === "Available" ? "status-available" : "status-checkedout"}>
                {book.status}
              </td>
              <td>
                <button
                  className="rent-button"
                  onClick={() => rentBook(book.id)}
                  disabled={book.status !== "Available"}
                >
                  Rent
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Rented Books</h2>
      <div className="rented-books">
        {rentedBooks.length === 0 && <p>No books rented yet.</p>}
        {rentedBooks.map((book) => (
          <div key={book.id} className="rented-book">
            <p><strong>Title:</strong> {book.title}</p>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Return Date:</strong> {book.returnDate}</p>
            <button className="return-button" onClick={() => returnBook(book.id)}>
              Return Book
            </button>
          </div>
        ))}
      </div>

      {selectedBook && (
        <div className="rented-book-details">
          <h2>Rented Book Details</h2>
          <p><strong>Title:</strong> {selectedBook.title}</p>
          <p><strong>Author:</strong> {selectedBook.author}</p>
          <p><strong>Status:</strong> {selectedBook.status}</p>
          <p><strong>Return Date:</strong> {selectedBook.returnDate}</p>
        </div>
      )}
    </div>
  );
};

export default Library;
