import * as genresAPI from "./fakeGenreService";

const books = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Think and Grow Rich",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Self-help" },
    numberInStock: 6,
    author: "Napoleon Hill",
    publishDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "The 7 Habits Of Highly Effective People",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Self-help" },
    numberInStock: 5,
    author: "Stephen R. Covey",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Atomic Habits",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Research" },
    numberInStock: 8,
    author: "James Clear",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "The 4-Hour Work Week",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Management" },
    numberInStock: 7,
    author: "Timothy Ferriss",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Show Your Work",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Management" },
    numberInStock: 7,
    author: "Austin Kleon",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Steal Like an Artist",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Management" },
    numberInStock: 7,
    author: "Austin Kleon",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Start With Why",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Research" },
    numberInStock: 7,
    author: "Simon Sinek",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Rich Dad Poor Dad",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Research" },
    numberInStock: 4,
    author: "Robert T. Kiyosaki",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Power Of Habit",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Self-help" },
    numberInStock: 7,
    author: "Charles Duhigg",
  },
];

export function getBooks() {
  return books;
}

export function getBook(id) {
  return books.find((m) => m._id === id);
}

export function saveBook(book) {
  let bookInDb = books.find((m) => m._id === book._id) || {};
  bookInDb.name = book.name;
  bookInDb.genre = genresAPI.genres.find((g) => g._id === book.genreId);
  bookInDb.numberInStock = book.numberInStock;
  bookInDb.author = book.author;

  if (!bookInDb._id) {
    bookInDb._id = Date.now();
    books.push(bookInDb);
  }

  return bookInDb;
}

export function deleteBook(id) {
  let bookInDb = books.find((m) => m._id === id);
  books.splice(books.indexOf(bookInDb), 1);
  return bookInDb;
}
