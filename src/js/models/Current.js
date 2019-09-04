import axios from 'axios';

export default class Current {
  constructor(coords) {
    this.coords = coords;
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather() {
    return axios.get(
      `${process.env.PROXY}api.openweathermap.org/data/2.5/weather?lat=${this.coords.lat}&lon=${this.coords.long}&units=metric&APPID=b276f410326feb1797d9d96f457c4e50`,
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
