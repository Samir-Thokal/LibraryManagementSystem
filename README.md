# Library Management System

The Library Management System is a web application designed to facilitate the management of books in a library. It allows users to add, search, borrow, return, and remove books, providing a user-friendly interface for tracking available and borrowed books. The application is built using React and Vite, utilizing a component-based architecture and local state management.

Features

Add Books: Users can add new books to the library by providing details such as ISBN, title, author, and publication year. Books are displayed in a list format, with new entries appearing below existing ones.
Borrow Books: Users can borrow available books. Once a book is borrowed, it is moved from the "Library Books" Section to the "Borrowed Books" Section. A borrow button is provided for each book.
Return Books: Borrowed books can be returned. Each book in the "Borrowed Books" Section has a return button that, when clicked, moves the book back to the "Library Books" Section.
Remove Books: Users can remove books from the library. A remove button is available for each book in the "Library Books" Section.
Search Functionality: Users can search for books by Title or ISBN.
Notifications: Alerts notify users for various actions, such as successful addition, borrowing, returning, or removal of books.
Responsive Design: The application is responsive and displays the lists of books and borrowed books side by side in a column format.

Technologies Used:

React, Vite, JavaScript
CSS, Tailwind CSS
