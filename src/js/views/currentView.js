import { elements } from './base';

export default weather => {
  const markup = `
      <div  class="weather">
        <div class="current-weather">
          <div class="current-weather__header">
            <h2 class="heading-secondary">
              Current weather in <span class="location">${weather.name}</span>
            </h2>
          </div>

          <div class="current-weather__body">
            <div class="current-weather__img">
              <img src="./img/${weather.icon}.png" alt="${weather.desc}" />
            </div>

            <div class="current-weather__desc">
              <p class="current-weather__temp">
                ${weather.temp}°C
              </p>
              <p class="current-weather__cloud">
                ${weather.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
  `;

  document.querySelector(elements.weatherData).insertAdjacentHTML('beforeend', markup);
};
