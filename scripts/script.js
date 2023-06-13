const feedbackLink = document.querySelector('.feedback-link');
const modalContainer = document.querySelector('.modal-container');
const modalCloseButton = document.querySelector('.modal-close-button');

const next = document.querySelector('.next-button');
const prev = document.querySelector('.previous-button');
const sliderItemsTags = document.querySelectorAll('.slider-screen-item');
const bullits = document.querySelectorAll('.slider-dots-button');

const sliderScreenLinks = document.querySelectorAll('.slider-screen-item a');

const setFocuses = () => {
  sliderScreenLinks.forEach((link) => {
    link.tabIndex = -1;
  });

  document.querySelectorAll('.slider-screen-item-current a').forEach((link) => {
    link.tabIndex = 0;
  });
};

feedbackLink.addEventListener('click', (evt) => {
  evt.preventDefault();
modalContainer.classList.remove('modal-container-close');
});

modalCloseButton.addEventListener ('click', () => {
  modalContainer.classList.add ('modal-container-close');
});

const model = [true, false, false];

document.body.classList.add('theme-1');
setFocuses();

const renderActiveScreen = (index) => {
  document.querySelector('.slider-screen-item-current').classList.remove('slider-screen-item-current');
  const sliderItems = Array.from(sliderItemsTags);

  sliderItems[index].classList.add('slider-screen-item-current');
  sliderItems.slice(index).forEach((item, i) => {
    item.style.order = i;
  });

  sliderItems.slice(0, index).forEach((item, i) => {
    item.style.order = sliderItems.length - index + i;
  });

  document.body.classList.remove(...document.body.classList);
  document.body.classList.add(`theme-${index + 1}`);

  document.querySelector('.slider-dots-current').classList.remove('slider-dots-current');
  Array.from(bullits)[index].classList.add('slider-dots-current');

  setFocuses();
}

const getNextScreen = () => {
  let current = model.findIndex((item) => item === true);
  model[current] = false;
  current = current < model.length - 1 ? current + 1 : 0;
  model[current] = true;
  return current;
};

const getPrevScreen = () => {
  let current = model.findIndex((item) => item === true);
  model[current] = false;
  current = current > 0 ? current - 1 : model.length - 1;
  model[current] = true;
  return current;
};

const getActiveScreen = (index) => {
  let current = model.findIndex((item) => item === true);
  model[current] = false;
  current = index;
  model[current] = true;
  return current;
}

next.addEventListener('click', (evt) => {
  evt.preventDefault();
  renderActiveScreen(getNextScreen());
});

prev.addEventListener('click', (evt) => {
  evt.preventDefault();
  renderActiveScreen(getPrevScreen());
});

bullits.forEach((bullit, index) => {
  bullit.addEventListener('click', (evt) => {
    evt.preventDefault();
    renderActiveScreen(getActiveScreen(index));
  })
});
