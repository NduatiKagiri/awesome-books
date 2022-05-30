/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
import { Add } from './add.js';

const add = new Add();

export class Form {
  constructor() {
    return null;
  }

  form() {
    const form = document.getElementById('form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      let author = document.getElementById('author').value;
      let book = document.getElementById('bookName').value;

      if ((book.trim() !== '') && (author.trim() !== '')) {
        add.addBook(book, author);

        author = '';
        book = '';
      }
    });
  }
}
