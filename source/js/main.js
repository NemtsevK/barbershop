//если включён js
const noJsContainers = document.querySelectorAll('.no-js');

noJsContainers.forEach(function (container) {
  container.classList.remove('no-js');
})

//меню
const headerButton = document.querySelector('.nav__toggle');

const onHeaderButtonClick = () => {
  headerButton.classList.toggle('nav__toggle--toggled');
}

headerButton.addEventListener('click', onHeaderButtonClick);

// Модальное окно
const loginButton = document.querySelector('.user-list__login');
const modalCloseButtons = document.querySelectorAll('.modal__close');
const modalWrapper = document.querySelector('.modal__wrapper');
const modalLogin = document.querySelector('.modal__login');

const onLoginClick = (event) => {
  event.preventDefault();
  modalWrapper.classList.add('modal--open');
  modalLogin.classList.add('modal--open');
}

loginButton?.addEventListener('click', onLoginClick);

const onModalClick = () => {
  const modals = document.querySelectorAll('.modal--open');
  modals.forEach(function (modal) {
    modal.classList.remove('modal--open');
  })
}

modalCloseButtons.forEach(function (button) {
  button.addEventListener('click', onModalClick);
})
