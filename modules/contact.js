const form = document.querySelector(".add-book-form");
const bookList = document.querySelector(".books-list");
const contactInfo = document.querySelector(".contact-info");

export const showContact = () => {
  bookList.classList.add("non-visible");
  form.classList.add("non-visible");
  contactInfo.classList.remove("non-visible");
};
