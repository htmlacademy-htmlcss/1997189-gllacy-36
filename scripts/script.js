const feedbackLink = document.querySelector('.feedback-link');

const modalContainer = document.querySelector('.modal-container');

const modalCloseButton = document.querySelector('.modal-close-button');
console.log(modalCloseButton);

feedbackLink.addEventListener('click', (evt) => {
  evt.preventDefault();
modalContainer.classList.remove('modal-container-close');
});

modalCloseButton.addEventListener ('click', () => {
  modalContainer.classList.add ('modal-container-close');
});
