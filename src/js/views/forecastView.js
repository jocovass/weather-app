import { elements } from './base';

// sort the temperature array for each day
const sortTemp = arr => {
  const newArr = [...arr];

  return newArr.sort((a, b) => {
    return a.temp - b.temp;
  });
};

// sort the icons
const pickIcon = icons => {
  let count = 0;
  let icon = '';

  for (let i = 0; i < icons.length; i += 1) {
    let sum = 0;
    for (let y = 1; y < icons.length; y += 1) {
      if (Number.parseInt(icons[i], 10) === Number.parseInt(icons[y], 10)) {
        sum += 1;

        if (sum > count) {
          count = sum;
          icon = Number.parseInt(icons[i], 0);
        }
      }
    }
  }
  return icon;
};

// set up each forecast element
const forecastMarkup = (key, value) => {
  const temp = sortTemp(value.temp);
  const icon = pickIcon(value.icon)
    .toString()
    .padStart(3, 0)
    .slice(-2);

  return `
        <div class="forecast__day" data-day="${key}">
            <div class="forecast__desc">
              <p class="forecast__date">${value.date}</p>
              <img class="forecast__img" src="img/${icon}d.png" alt="" />
            </div>
            <div class="forecast__temp">
                <p class="forecast__temp--day">
                    ${Math.ceil(temp[temp.length - 1].temp)}°C
                </p>
                <p class="forecast__temp--night">
                    ${Math.ceil(temp[0].temp)}°C
                </p>
            </div>
        </div>
    `;
};

export default forecasts => {
  let markup = '<div class="forecast">';

  // loop trough the forecast map and create the markup with each day
  const forecastsArr = Array.from(forecasts.entries());
  if (forecastsArr.length === 6) forecastsArr.shift();

  forecastsArr.forEach(forecast => {
    markup += forecastMarkup(forecast[0], forecast[1]);
  });

  markup += '</div>';

  // append the new forecast elements to the DOM
  document.querySelector(elements.weatherData).insertAdjacentHTML('beforeend', markup);

  // select the first forecast element and attach the active class on it
  const forecastActive = document.querySelector(elements.forecastDay);
  forecastActive.classList.add('active');

  return forecasts.get(forecastActive.dataset.day);
};
