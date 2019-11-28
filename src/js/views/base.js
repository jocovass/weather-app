export const elements = {
  errorDiv: '.error',
  searchDiv: '.search',
  weatherData: '.weather-data',
  forecastDiv: '.forecast',
  forecastDay: '.forecast__day',
  searchForm: '.search__form',
  input: '.search__input',
  container: '.container',
  loader: '.loader',
  chart: '.chart-container',
};

export const setLoader = () => {
  const markup = `<div class="loader"></div>`;
  const prevLoader = document.querySelector(elements.loader);
  if (prevLoader) {
    prevLoader.parentElement.removeChild(prevLoader);
  }

  document.querySelector(elements.container).insertAdjacentHTML('beforeend', markup);
};

export const clearLoader = () => {
  const loader = document.querySelector(elements.loader);

  loader.parentElement.removeChild(loader);
};

export const clearUI = () => {
  document.querySelector(elements.weatherData).innerHTML = null;
};

export const clearInput = () => {
  document.querySelector(elements.input).value = '';
};

export const smoothScrolling = (target, duration) => {
  const elementTarget = document.querySelector(target);
  const targetPosition = elementTarget.getBoundingClientRect().top || window.pageYOffset;
  const startPosition = window.pageYOffset;
  const easeInCubic = num => num * num * num;

  let startTime = 0;
  function animation(currentTime) {
    if (startTime === 0) startTime = currentTime;
    const runTime = currentTime - startTime;
    let progress = runTime / duration;
    progress = Math.min(progress, 1);

    const gotTo = startPosition + targetPosition * easeInCubic(progress);

    window.scrollTo(0, gotTo);
    if (runTime < duration) {
      requestAnimationFrame(animation);
    }
  }
  requestAnimationFrame(animation);
};
