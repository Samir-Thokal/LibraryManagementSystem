import React, { useState } from 'react';
import Library from './utils/Library';
import './App.css'; // Import CSS for styling

function App() {
  const [isbn, setIsbn] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('title');
  const [library] = useState(new Library());
  const [availableBooks, setAvailableBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const handleAddBook = () => {
    library.addBookFromInput(isbn, title, author, year);
    setAvailableBooks([...library.getAvailableBooks()]);
    setIsbn('');
    setTitle('');
    setAuthor('');
    setYear('');
  };

  const handleBorrowBook = (isbn) => {
    library.borrowBook(isbn);
    setAvailableBooks([...library.getAvailableBooks()]);
    setBorrowedBooks([...borrowedBooks, library.books.find(b => b.isbn === isbn)]);
  };

  const handleReturnBook = (isbn) => {
    library.returnBook(isbn);
    setAvailableBooks([...library.getAvailableBooks()]);
    setBorrowedBooks(borrowedBooks.filter(b => b.isbn !== isbn));
  };

  const handleRemoveBook = (isbn) => {
    setAvailableBooks(availableBooks.filter(book => book.isbn !== isbn));
    library.books = library.books.filter(book => book.isbn !== isbn); // Remove from actual library
  };

  const handleSearch = () => {
    if (searchType === 'isbn') {
      setAvailableBooks([...library.searchBook(searchQuery)]);
    } else {
      setAvailableBooks([...library.searchBook(searchQuery)]);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Library Management System</h1>
      </header>

      <div className="add-book-form">
        <input
          type="text"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select onChange={(e) => setSearchType(e.target.value)} value={searchType}>
          <option value="title">Search by Title</option>
          <option value="isbn">Search by ISBN</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Book and Borrowed Book lists in columns */}
      <div className="lists">
        <div className="books-list">
          <h3>Books</h3>
          <table>
            <thead>
              <tr>
                <th>ISBN</th>
                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
                <th>Borrow</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {availableBooks.map((book) => (
                <tr key={book.isbn}>
                  <td>{book.isbn}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.year}</td>
                  <td>
                    <button onClick={() => handleBorrowBook(book.isbn)}>Borrow</button>
                  </td>
                  <td>
                    <button onClick={() => handleRemoveBook(book.isbn)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="borrowed-books-list">
          <h3>Borrowed Books</h3>
          <table>
            <thead>
              <tr>
                <th>ISBN</th>
                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
                <th>Return</th>
              </tr>
            </thead>
            <tbody>
              {borrowedBooks.map((book) => (
                <tr key={book.isbn}>
                  <td>{book.isbn}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.year}</td>
                  <td>
                    <button onClick={() => handleReturnBook(book.isbn)}>Return</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
