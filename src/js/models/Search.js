import axios from 'axios';

export default class Search {
  constructor(city) {
    this.city = city;
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather() {
    return axios.get(
      `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=b276f410326feb1797d9d96f457c4e50`,
    );
  }

  setCurrentWeather(weather) {
    this.currentWeather = {
      name: `${weather.data.name}, ${weather.data.sys.country}`,
      icon: weather.data.weather[0].icon,
      temp: Math.ceil(weather.data.main.temp),
      desc: weather.data.weather[0].description,
    };

    return this.currentWeather;
  }
}
