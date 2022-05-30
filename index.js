import Sections from './modules/sections.js';
import { Display } from './modules/display.js';
import { Remove } from './modules/remove.js';
import { Form } from './modules/form.js';
import { DateTime } from './modules/luxon.min.js';

const sections = new Sections();
const remove = new Remove();
const display = new Display();
const form = new Form();

const deleteBook = () => {
  const delBtns = document.querySelectorAll('.remove');
  delBtns.forEach((delBtn) => {
    delBtn.addEventListener('click', () => {
      remove.removeBook(delBtn.getAttribute('id').slice(4));
    });
  });
};

const showTime = () => {
  const localDatetime = DateTime.local().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  document.querySelector('.time').innerHTML = `
    <h4>${localDatetime}</h4>
  `;
};

showTime();
display.displayBooks();
sections.sections();
form.form();
deleteBook();
