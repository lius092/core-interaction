console.log('hello world')

// Insert your actual API request URL below
fetch('http://api.openweathermap.org/data/2.5/weather?zip=10019&APPID=3ff5ccf77982ee84f36e9c8253113ba2&units=imperial')
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        render(jsonData);
    });

// Render Function Setup
// ---------------------
var tempSpan = document.querySelector('.temp')
var windSpeedSpan = document.querySelector('.wind-speed')
var windDirSpan = document.querySelector('.wind-dir')
var weatherVaneWrapper = document.querySelector('.weather-vane-wrapper')
var weatherVane = document.querySelector('.weather-vane')

function render(data) {
  // log the data in it's entirety
  console.log(data);

  // log the current temperature
  console.log(data.main.temp);

  // insert the temperature
  tempSpan.innerText = data.main.temp

  // log the wind speed
  console.log(data.wind.speed)

  // insert the wind speed
  windSpeedSpan.innerText = data.wind.speed

  // log the wind degree
  console.log(data.wind.deg)

  // insert the wind degree
  windDirSpan.innerText = data.wind.deg

  // set background color based on Temperature
  document.body.style.background = 'hsl(' + data.wind.deg + ',50%,50%)'

  // rotate the weather vane based on wind direction
  weatherVaneWrapper.style.transform = 'rotate('+ data.wind.deg + 'deg)'

  // set animation duration of weathervane based on wind speed
  weatherVane.style.animationDuration = 5 / data.wind.speed + 's'
}
