import Books from "./modules/book.js";
import { showContact } from "./modules/contact.js";
import { showAdd } from "./modules/add.js";
import { showList } from "./modules/list.js";

const titles = document.getElementById("title");
const authors = document.getElementById("author");
const add = document.getElementById("add");

const book = new Books(titles.value, authors.value);

book.showBooks();

add.addEventListener("click", () => {
  book.book.title = titles.value;
  book.book.author = authors.value;
  book.book.id = book.allBooks.length + 1;
  if (book.book.title && book.book.author) {
    book.add();
  }
});

const listLi = document.getElementById("list-li");
const addLi = document.getElementById("add-li");
const contactLi = document.getElementById("contact-li");

listLi.addEventListener("click", showList);
addLi.addEventListener("click", showAdd);
contactLi.addEventListener("click", showContact);
