/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
import { Storage } from './storage.js';

const storage = new Storage();

export class Add {
  constructor() {
    return null;
  }

  addBook(book = null, author = null) {
    if (book && author) {
      const newBook = {
        book,
        author,
      };
      const storedBooks = storage.fetchBooks();
      storedBooks.push(newBook);
      storage.storeBooks(storedBooks);
      /* eslint-disable no-implied-eval */
      setTimeout('location.reload(true);', 0);
      /* eslint-enable no-implied-eval */
    }
  }
}
