// Miami
function myFunction(){

var temp = document.getElementById("temp1");
temp.style.visibility = "visible";
temp.style.zIndex = "1";

  console.log('hello world')

  // Insert your actual API request URL below
  fetch('http://api.openweathermap.org/data/2.5/weather?zip=33101&APPID=3ff5ccf77982ee84f36e9c8253113ba2&units=imperial')
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
  var weatherVaneWrapper = document.querySelector('.weather-vane-wrapper')
  var weatherVane = document.querySelector('.weather-vane')

  function render(data) {
    // log the data in it's entirety
    console.log(data);

    // log the current temperature
    console.log(data.main.temp);

    // insert the temperature
    tempSpan.innerText = data.main.temp
  }
}



// NYC
function myFunction2(){

var temp = document.getElementById("temp2");
temp.style.visibility = "visible";
temp.style.zIndex = "1";

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
  var weatherVaneWrapper = document.querySelector('.weather-vane-wrapper')
  var weatherVane = document.querySelector('.weather-vane')

  function render(data) {
    // log the data in it's entirety
    console.log(data);

    // log the current temperature
    console.log(data.main.temp);

    // insert the temperature
    tempSpan.innerText = data.main.temp
  }
}



// Boston
function myFunction3(){

var temp = document.getElementById("temp3");
temp.style.visibility = "visible";
temp.style.zIndex = "1";

  console.log('hello world')

  // Insert your actual API request URL below
  fetch('http://api.openweathermap.org/data/2.5/weather?zip=02111&APPID=3ff5ccf77982ee84f36e9c8253113ba2&units=imperial')
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
  var weatherVaneWrapper = document.querySelector('.weather-vane-wrapper')
  var weatherVane = document.querySelector('.weather-vane')

  function render(data) {
    // log the data in it's entirety
    console.log(data);

    // log the current temperature
    console.log(data.main.temp);

    // insert the temperature
    tempSpan.innerText = data.main.temp
  }
}




// Washington DC
function myFunction4(){

var temp = document.getElementById("temp4");
temp.style.visibility = "visible";
temp.style.zIndex = "1";

  console.log('hello world')

  // Insert your actual API request URL below
  fetch('http://api.openweathermap.org/data/2.5/weather?zip=20001&APPID=3ff5ccf77982ee84f36e9c8253113ba2&units=imperial')
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
  var weatherVaneWrapper = document.querySelector('.weather-vane-wrapper')
  var weatherVane = document.querySelector('.weather-vane')

  function render(data) {
    // log the data in it's entirety
    console.log(data);

    // log the current temperature
    console.log(data.main.temp);

    // insert the temperature
    tempSpan.innerText = data.main.temp
  }
}


// Los Angeles
function myFunction5(){

var temp = document.getElementById("temp5");
temp.style.visibility = "visible";
temp.style.zIndex = "1";

  console.log('hello world')

  // Insert your actual API request URL below
  fetch('http://api.openweathermap.org/data/2.5/weather?zip=90001&APPID=3ff5ccf77982ee84f36e9c8253113ba2&units=imperial')
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
  var weatherVaneWrapper = document.querySelector('.weather-vane-wrapper')
  var weatherVane = document.querySelector('.weather-vane')

  function render(data) {
    // log the data in it's entirety
    console.log(data);

    // log the current temperature
    console.log(data.main.temp);

    // insert the temperature
    tempSpan.innerText = data.main.temp
  }
}



// New Mexico
function myFunction6(){

var temp = document.getElementById("temp6");
temp.style.visibility = "visible";
temp.style.zIndex = "1";

  console.log('hello world')

  // Insert your actual API request URL below
  fetch('http://api.openweathermap.org/data/2.5/weather?zip=87102&APPID=3ff5ccf77982ee84f36e9c8253113ba2&units=imperial')
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
  var weatherVaneWrapper = document.querySelector('.weather-vane-wrapper')
  var weatherVane = document.querySelector('.weather-vane')

  function render(data) {
    // log the data in it's entirety
    console.log(data);

    // log the current temperature
    console.log(data.main.temp);

    // insert the temperature
    tempSpan.innerText = data.main.temp
  }
}




// California
function myFunction7(){

var temp = document.getElementById("temp7");
temp.style.visibility = "visible";
temp.style.zIndex = "1";

  console.log('hello world')

  // Insert your actual API request URL below
  fetch('http://api.openweathermap.org/data/2.5/weather?zip=90003&APPID=3ff5ccf77982ee84f36e9c8253113ba2&units=imperial')
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
  var weatherVaneWrapper = document.querySelector('.weather-vane-wrapper')
  var weatherVane = document.querySelector('.weather-vane')

  function render(data) {
    // log the data in it's entirety
    console.log(data);

    // log the current temperature
    console.log(data.main.temp);

    // insert the temperature
    tempSpan.innerText = data.main.temp
  }
}



// Hawaii
function myFunction8(){

var temp = document.getElementById("temp8");
temp.style.visibility = "visible";
temp.style.zIndex = "1";

  console.log('hello world')

  // Insert your actual API request URL below
  fetch('http://api.openweathermap.org/data/2.5/weather?zip=96701&APPID=3ff5ccf77982ee84f36e9c8253113ba2&units=imperial')
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
  var weatherVaneWrapper = document.querySelector('.weather-vane-wrapper')
  var weatherVane = document.querySelector('.weather-vane')

  function render(data) {
    // log the data in it's entirety
    console.log(data);

    // log the current temperature
    console.log(data.main.temp);

    // insert the temperature
    tempSpan.innerText = data.main.temp
  }
}
