// src/tests/Library.test.js

import { describe, it , expect} from 'vitest';
import Library from '../utils/Library';

// Tests for Adding Books:

describe('Library with simulated user input', () => {
  it('should add a book from user input', () => {
    const library = new Library();

    // Simulating user input
    const isbn = '123';
    const title = 'Test Book';
    const author = 'Author';
    const year = 2020;

    library.addBookFromInput(isbn, title, author, year);
    
    const availableBooks = library.getAvailableBooks();
    expect(availableBooks.some(b => b.isbn === isbn)).toBe(true);
  });

  // Test for borrowing Books:

  it('should allow a user to borrow a book', () => {
    const library = new Library();
    const book = { isbn: '123', title: 'Test Book', author: 'Author', year: 2020 };
    library.addBook(book);
    library.borrowBook('123');
    expect(library.getAvailableBooks().some(b => b.isbn === isbn)).toBe(false);
  });

  // Tests for View/Search Book by ISBN:

  it('should search a book by ISBN', () => {
    const library = new Library();

    library.addBookFromInput('123', 'JavaScript Basics', 'John Doe', 2021);
    library.addBookFromInput('456', 'React in Action', 'Jane Smith', 2020);

    const searchResults = library.searchBook('123');

    expect(searchResults.length).toBe(1);
    expect(searchResults[0].title).toBe('JavaScript Basics');
  });

   // Tests for View/Search Book by title:

  it('should search books by title', () => {
    const library = new Library();

    library.addBookFromInput('123', 'JavaScript Basics', 'John Doe', 2021);
    library.addBookFromInput('456', 'React in Action', 'Jane Smith', 2020);

    const searchResults = library.searchBook('React');

    expect(searchResults.length).toBe(1);
    expect(searchResults[0].title).toBe('React in Action');
  });

   // Tests for View/Search Book by author:

  it('should search books by author', () => {
    const library = new Library();

    library.addBookFromInput('123', 'JavaScript Basics', 'John Doe', 2021);
    library.addBookFromInput('456', 'React in Action', 'Jane Smith', 2020);

    const searchResults = library.searchBook('Jane Smith');

    expect(searchResults.length).toBe(1);
    expect(searchResults[0].title).toBe('React in Action');
  });

     // Tests for View/Search Book if no matching found:

  it('should return empty array if no matching book is found', () => {
    const library = new Library();

    library.addBookFromInput('123', 'JavaScript Basics', 'John Doe', 2021);
    library.addBookFromInput('456', 'React in Action', 'Jane Smith', 2020);

    const searchResults = library.searchBook('Python');

    expect(searchResults.length).toBe(0);
  });

  // Tests for Return book:

  it('should return a borrowed book to the library', () => {
    const library = new Library();

    // Simulating user input
    const isbn = '123';
    const title = 'Test Book';
    const author = 'Author';
    const year = 2020;

    library.addBookFromInput(isbn, title, author, year);
    library.borrowBook(isbn);
    library.returnBook(isbn);

    expect(library.getAvailableBooks().some(b => b.isbn === isbn)).toBe(true);
  });
});
