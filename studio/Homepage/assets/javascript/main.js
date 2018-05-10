var states = Array.from(document.querySelectorAll('.state'));
// var locationSpan = document.querySelector('.temp-location');
var degSpan = document.querySelector('.temp-deg');
var tempDiv = document.querySelector('.temp');


states.forEach(function(state) {
  state.addEventListener('mouseover', function() {
    var zip = state.dataset.zip
    tempDiv.style.opacity=1

    fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + zip + '&APPID=3ff5ccf77982ee84f36e9c8253113ba2&units=imperial')
      .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
      })
      .then(function(jsonData) {
        // log the data
        console.log(jsonData);

        // change the document
        degSpan.innerText = jsonData.main.temp
        // locationSpan.innerText = jsonData.name
      });

  });
    state.addEventListener('mouseout', function() {
      tempDiv.style.opacity=0
    });
});
