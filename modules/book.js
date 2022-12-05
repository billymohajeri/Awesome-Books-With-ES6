import showAdd from './add.js';

const booksFromLocalStorage = JSON.parse(localStorage.getItem('books'));
const savedBooksSection = document.getElementById('saved-books');

export default class Books {
  constructor(title, author) {
    this.book = { id: this.allBooks.length + 1, title, author };
  }

  allBooks = booksFromLocalStorage || [];

  add() {
    this.allBooks.push(this.book);
    localStorage.setItem('books', JSON.stringify(this.allBooks));
    showAdd();
  }

  remove(bookId) {
    this.allBooks = this.allBooks.filter((book) => book.id !== bookId);
    localStorage.setItem('books', JSON.stringify(this.allBooks));
  }

  showBooks() {
    if (this.allBooks.length) {
      for (let index = 0; index < this.allBooks.length; index += 1) {
        const bookArticle = document.createElement('article');
        const titleP = document.createElement('p');
        titleP.innerText = `"${this.allBooks[index].title}`;
        titleP.innerText += `" by ${this.allBooks[index].author}`;
        const btnRemove = document.createElement('button');
        btnRemove.innerText = 'Remove';
        btnRemove.className = 'remove-button';
        btnRemove.addEventListener('click', () => {
          this.remove(this.allBooks[index].id);
          if (!this.allBooks.length) {
            savedBooksSection.innerText = 'The list is empty...';
          }
          btnRemove.parentElement.remove();
        });
        savedBooksSection.append(bookArticle);
        bookArticle.append(titleP, btnRemove);
      }
    } else {
      savedBooksSection.innerText = 'The list is empty...';
    }
  }
}
