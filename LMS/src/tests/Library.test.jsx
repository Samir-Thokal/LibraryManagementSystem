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

  });

  
  it('should allow a user to borrow a book', () => {
    const library = new Library();
    const book = { isbn: '123', title: 'Test Book', author: 'Author', year: 2020 };
    library.addBook(book);
    library.borrowBook('123');

  });
});
