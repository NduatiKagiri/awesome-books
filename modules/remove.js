/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
import { Storage } from './storage.js';

const storage = new Storage();

export class Remove {
  constructor() {
    return null;
  }

  removeBook(id) {
    if (id != null) {
      const oldBooks = storage.fetchBooks();

      const newBooks = oldBooks.filter((book, index) => {
        if (index !== Number(id)) return true;
        return null;
      });

      storage.storeBooks(newBooks);
      /* eslint-disable no-implied-eval */
      setTimeout('location.reload(true);', 0);
      /* eslint-enable no-implied-eval */
    }
  }
}
