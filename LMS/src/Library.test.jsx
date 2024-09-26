// src/tests/Library.test.js
import { describe, it } from 'vitest';
import Library from './Library';

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
});
