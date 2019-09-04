import { elements } from './base';

export const clearError = () => {
  const errorDiv = document.querySelector(elements.errorDiv);
  const parent = document.querySelector(elements.searchDiv);

  if (errorDiv) parent.removeChild(errorDiv);
};

export const displayError = msg => {
  clearError();

  const newError = document.createElement('div');
  newError.setAttribute('class', 'error');
  newError.textContent = `ERROR: ${msg}!`;

  document.querySelector(elements.searchDiv).insertAdjacentElement('beforeend', newError);

  setTimeout(clearError, 5000);
};
