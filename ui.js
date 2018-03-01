class UI {
  constructor() {
    this.location = document.querySelector('#w-location');
    this.desc = document.querySelector('#w-desc');
    this.string = document.querySelector('#w-string');
    this.details = document.querySelector('#w-details');
    this.icon = document.querySelector('#w-icon');
    this.humidity = document.querySelector('#w-humidity');
    this.feelsLike = document.querySelector('#w-feels-like');
    this.dewpoint = document.querySelector('#w-dewpoint');
    this.wind = document.querySelector('#w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.display_location.full;
    this.desc.textContent = weather.weather;
    this.string.textContent = weather.temperature_string;
    this.icon.setAttribute('src', weather.icon_url);
    this.humidity.textContent = `Relative Humidity: ${weather.relative_humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.feelslike_string}`;
    this.dewpoint.textContent = `Feels Like: ${weather.dewpoint_string}`;
    this.wind.textContent = `Feels Like: ${weather.wind_string}`;

  }
}
