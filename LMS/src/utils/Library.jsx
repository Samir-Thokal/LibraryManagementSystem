
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
    borrowBook(isbn) {
    }
 }
  
  export default Library;
  