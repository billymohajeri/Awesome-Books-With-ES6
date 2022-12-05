const form = document.querySelector('.add-book-form');
const bookList = document.querySelector('.books-list');
const contactInfo = document.querySelector('.contact-info');

const showList = () => {
  if (bookList.classList.contains('non-visible')) {
    bookList.classList.remove('non-visible');
    form.classList.add('non-visible');
    contactInfo.classList.add('non-visible');
  }
};

export default showList;
