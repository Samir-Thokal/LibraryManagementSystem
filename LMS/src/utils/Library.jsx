// src/utils/Library.jsx

class Library {
  constructor() {
    this.books = [];
  }
  //Implement Adding Books:

  addBook(book) {
    const newBook = { ...book, isBorrowed: false };
    this.books.push(newBook);
  }

  // Simulate user input for adding a book
  addBookFromInput(isbn, title, author, year) {
    const book = { isbn, title, author, year };
    this.addBook(book);
  }

  //Implement borrowing Books:
  borrowBook(isbn) {
    const book = this.books.find(b => b.isbn === isbn && !b.isBorrowed);
    if (book) {
      book.isBorrowed = true;
    } else {
      throw new Error('Book is not available');
    }
  }

  //Implement Available/View Books:
  getAvailableBooks() {
    return this.books.filter(book => !book.isBorrowed);
  }

  //Implement searching Book: 
  searchBook(query) {
    return this.books.filter(
      (book) =>
        book.isbn.includes(query) ||
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
  }

  //Implement return Book:
  returnBook(isbn) {
    const book = this.books.find(b => b.isbn === isbn && b.isBorrowed); // Fixed `b` instead of `book`
    if (book) {
      book.isBorrowed = false;
    } else {
      throw new Error(`Book with ISBN ${isbn} is not currently borrowed.`);
    }
  }
}

export default Library;
