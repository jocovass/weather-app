import axios from 'axios';

const convertUTCDateToLocalDate = t => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // convert the seconds into milliseconds and creat a new date
  const newTime = new Date(t * 1000);

  // get the date for the local time
  const date = `${days[newTime.getDay()]} ${newTime.getDate()} ${months[newTime.getMonth()]}`;

  // get the day for the local time
  const day = days[newTime.getDay()];

  // get the hours and the min of the local time
  const time = `${newTime
    .getHours()
    .toString()
    .padStart(3, 0)
    .slice(-2)}:${newTime
    .getMinutes()
    .toString()
    .padStart(3, 0)
    .slice(-2)}`;

  return {
    date: date,
    time: time,
    day: day,
  };
};

const renderForecast = arr => {
  const data = {};
  const map = new Map();

  // loop through the forecast array
  for (let i = 0; i < arr.length; i += 1) {
    const currentTime = convertUTCDateToLocalDate(arr[i].dt);
    // for each day I create an object where I store the date, icon, and temp
    if (!data[currentTime.day]) {
      data[currentTime.day] = {
        date: currentTime.date,
        icon: [],
        temp: [],
      };
    }

    const temp = {
      temp: arr[i].main.temp,
      time: currentTime.time,
    };

    data[currentTime.day].icon.push(arr[i].weather[0].icon);
    data[currentTime.day].temp.push(temp);

    // and I add all the forecasts to a Map, which makes it easier to render the forecasts in the right order
    map.set(currentTime.day, data[currentTime.day]);
  }
  return map;
};

// forecast class
export default class Forecast {
  constructor(city) {
    this.city = city;
    this.getForecast = this.getForecast.bind(this);
  }

  getForecast() {
    return axios.get(
      `${process.env.PROXY}api.openweathermap.org/data/2.5/forecast?q=${this.city}&units=metric&APPID=${process.env.APIKEY}`,
    );
  }

  setForecast(forecast) {
    this.forecasts = renderForecast(forecast.data.list);

    return this.forecasts;
  }

  get(day) {
    return this.forecasts.get(day);
  }
}
