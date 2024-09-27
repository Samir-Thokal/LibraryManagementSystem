# Library Management System

## **Deployed Website Link** :-  [Click Here](https://library-management-system-sigma-two.vercel.app/)

The Library Management System is a simple web application designed to facilitate the management of books in a library. It allows users to add, search, borrow, return, and remove books, providing a user-friendly interface for tracking available and borrowed books. The application is built using React and Vite, utilizing a component-based architecture and local state management. The development follows Test-Driven Development (TDD) practices, ensuring that all features are thoroughly tested before implementation.

## **Features**:-

1) **Add Books**: Users can add new books to the library by providing details such as ISBN, title, author, and publication year. Books are displayed in a list format, with new entries appearing below existing ones.<br>
2) **Borrow Books**: Users can borrow available books. Once a book is borrowed, it is moved from the "Library Books" Section to the "Borrowed Books" Section. A borrow button is provided for each book.<br>
3) **Return Books**: Borrowed books can be returned. Each book in the "Borrowed Books" Section has a return button that, when clicked, moves the book back to the "Library Books" Section.<br>
4) **Remove Books**: Users can remove books from the library. A remove button is available for each book in the "Library Books" Section.<br>
5) **Search Functionality**: Users can search for books by Title or ISBN.<br>
6) **Notifications**: Alerts notify users for various actions, such as successful addition, borrowing, returning, or removal of books.<br>

## Project Structure

```bash
LibraryManagementSystem/
│
├── public/                     # Static files served by the app
│
├── src/                        # Source files for the application
│   │
│   ├── utils/                  # Utility functions or classes
│   │   └── Library.jsx         # Library class handling core functionalities
│   │
│   ├── tests/                  # Test files for TDD
│   │   └── Library.test.jsx    # Unit tests for library functions
│   │
│   ├── App.css                 # Styles for App component
│   ├── App.jsx                 # Main App component
│   ├── index.css               # Global styles
│   ├── main.jsx                # Entry point for the app
│
├── .gitignore                  # Git ignore rules
├── index.html                 
├── package.json                # Dependencies and scripts
├── README.md                   # Project documentation
└── vite.config.js              # Vite config file

```

## **Technologies Used**:-

*JavaScript*,</br> *React*,</br> *Vite*,</br> *CSS*

## Test Report

<img width="650" alt="Test Report" src="https://github.com/Samir-Thokal/LibraryManagementSystem/blob/e3aa30787f884214067081221ef0783d267cdaec/TestCaseOutput.png">
