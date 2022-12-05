const form = document.querySelector(".add-book-form");
const bookList = document.querySelector(".books-list");
const contactInfo = document.querySelector(".contact-info");

export const showAdd = () => {
  bookList.classList.add("non-visible");
  form.classList.remove("non-visible");
  contactInfo.classList.add("non-visible");
};
