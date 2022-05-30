/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
import { Storage } from './storage.js';

const storage = new Storage();

export class Display {
  constructor() {
    return null;
  }

  displayBooks() {
    const myBooks = storage.fetchBooks();
    myBooks.forEach((element, index) => {
      const str = `"${element.book}" by ${element.author}`;
      document.querySelector('#all-books').innerHTML += `
      <tr>
        <td>${str}</td>
        <td><button type="button" id="book${index}" class="remove">Remove</button></td>
      </tr>
      `;
    });
  }
}
