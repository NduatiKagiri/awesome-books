/* eslint-disable class-methods-use-this */
export default class Sections {
  constructor() {
    return null;
  }

  sections() {
    const listLink = document.getElementById('list-link');
    const addLink = document.getElementById('add-link');
    const contactLink = document.getElementById('contact-link');

    const listSec = document.getElementById('list');
    const addSec = document.getElementById('add-book');
    const contactSec = document.getElementById('contact');

    listLink.addEventListener('click', () => {
      listLink.classList.add('clicked');
      if (addLink.classList.contains('clicked')) {
        addLink.classList.remove('clicked');
      }
      if (contactLink.classList.contains('clicked')) {
        contactLink.classList.remove('clicked');
      }
      listSec.style.display = 'block';
      addSec.style.display = 'none';
      contactSec.style.display = 'none';
    });

    addLink.addEventListener('click', () => {
      addLink.classList.add('clicked');
      if (listLink.classList.contains('clicked')) {
        listLink.classList.remove('clicked');
      }
      if (contactLink.classList.contains('clicked')) {
        contactLink.classList.remove('clicked');
      }
      addSec.style.display = 'block';
      listSec.style.display = 'none';
      contactSec.style.display = 'none';
    });

    contactLink.addEventListener('click', () => {
      contactLink.classList.add('clicked');
      if (listLink.classList.contains('clicked')) {
        listLink.classList.remove('clicked');
      }
      if (addLink.classList.contains('clicked')) {
        addLink.classList.remove('clicked');
      }
      contactSec.style.display = 'flex';
      listSec.style.display = 'none';
      addSec.style.display = 'none';
    });
  }
}
