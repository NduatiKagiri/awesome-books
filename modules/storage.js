/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
export class Storage {
  constructor() {
    return null;
  }

  storeBooks(books) {
    localStorage.setItem('books', JSON.stringify(books));
  }

  fetchBooks() {
    const books = JSON.parse(localStorage.getItem('books'));
    if (books) return books;
    return [];
  }
}
