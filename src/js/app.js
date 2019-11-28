import '../scss/main.scss';

import errorHandler from './models/Error';
import Current from './models/Current';
import Forecast from './models/Forecast';
// import Chart from './models/Chart';

import {
  elements,
  clearUI,
  clearInput,
  smoothScrolling,
  setLoader,
  clearLoader,
} from './views/base';
import renderCurrentWeather from './views/currentView';
import renderForecasts from './views/forecastView';
import renderChart from './views/chartView';
import Search from './models/Search';
import { displayError } from './views/errorView';

const Chart = function Chart() {
  return import('./models/Chart');
};
let MyChart = null;

// managing the application state through the state obj.
const state = {};

// paint the UI
const populateUI = async currentWeather => {
  // 1. Render the current weather
  renderCurrentWeather(currentWeather);
  // 2. With the location name fetch the forecast and update the UI
  state.forecast = new Forecast(currentWeather.name);
  const forecastResp = await errorHandler(state.forecast.getForecast)();
  const forecasts = state.forecast.setForecast(forecastResp);
  const forecastActive = renderForecasts(forecasts);
  // 3. Draw the graph with the forecast
  if (!MyChart) {
    await Chart().then(resp => {
      MyChart = resp.default;
    });
  }
  state.chart = new MyChart();
  renderChart(state.chart.canvas);
  state.chart.updateChart(forecastActive);
};

// geting the location of the user [lat,long]
const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      throw Error("Your browser doesn't support geolocation, please update your browser!");
    }

    navigator.geolocation.getCurrentPosition(resolve, reject, {
      maximumAge: 0,
      enableHighAccuracy: true,
    });
  });
};

const currentController = async () => {
  clearUI();
  setLoader();
  // 1. Get the coordinates
  const position = await errorHandler(getLocation)();
  // 2. Fetch the weather based on the coords location and update the UI
  if (position) {
    const coords = {
      lat: position.coords.latitude,
      long: position.coords.longitude,
    };
    state.current = new Current(coords);
    const currentResp = await errorHandler(state.current.getWeather)();
    if (currentResp) {
      const currentWeather = state.current.setCurrentWeather(currentResp);
      populateUI(currentWeather);
    }
  }
  clearLoader();
};

// search controller
const searchController = async event => {
  event.preventDefault();
  // 1. Get the input value and if it is empty throw an error
  const input = event.target.children[0].value;
  if (input.trim() !== '') {
    clearUI();
    setLoader();
    // 2. Get the current waether
    state.search = new Search(input);
    const currentResp = await errorHandler(state.search.getWeather)();
    if (currentResp) {
      // eslint-disable-next-line no-var, vars-on-top
      var currentWeather = state.search.setCurrentWeather(currentResp);
      populateUI(currentWeather);
    }
    clearLoader();
    clearInput();
  } else {
    displayError('Please enter a valid city name!');
  }
};

// update controller
const updateController = (element, day) => {
  // 1. Get the forecast data from the database and update the chart
  const forecastData = state.forecast.get(day);
  state.chart.updateChart(forecastData);

  // 2. Select all forecast and change the active state accordingly where the click happened
  const days = Array.from(document.querySelectorAll(elements.forecastDay));

  days.forEach(current => {
    current.classList.remove('active');

    if (current === element) {
      element.classList.add('active');
    } else if (current === element.target) {
      element.target.classList.add('active');
    }
  });
};

// EVENT LISTENERS
window.addEventListener('load', currentController);
document.querySelector(elements.searchForm).addEventListener('submit', searchController);
document.querySelector(elements.container).addEventListener('click', e => {
  if (e.target.matches('div.forecast__day')) {
    updateController(e, e.target.dataset.day);
  } else if (e.target.matches('div.forecast__day > *')) {
    updateController(e.target.parentElement, e.target.parentElement.dataset.day);
  } else if (e.target.matches('div.forecast__day *')) {
    updateController(
      e.target.parentElement.parentElement,
      e.target.parentElement.parentElement.dataset.day,
    );
  }

  if (e.target.closest('div.forecast__day')) {
    smoothScrolling(elements.chart, 400);
  }
});
