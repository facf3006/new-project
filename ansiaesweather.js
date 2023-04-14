const latitude = 41.251111;
const longitude = -7.959167;

const weatherDiv = document.getElementById("weather");

fetch(` https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=fda8b9e3b269289d75f949c52be1db9d&units=metric&lang=pt`)
  .then(response => {
    
    if(response.ok) {
        
      return response.json();
       
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => { 
    // obter a temperatura 
    const temperature = data.main.temp; 
    // obter a URL do ícone do clima
    const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`; 
    // obter a descrição do clima
    const description = data.weather[0].description;
    const wind =data.wind.speed
    const humidity=data.main.humidity
    
    weatherDiv.innerHTML = `
      <div>
        <p>Latitude: ${latitude}</p> 
        <p>Longitude: ${longitude}</p>
        <img src="${iconUrl}" alt="Clima">
        <p>${description}</p>
        <p>${temperature} ºC</p>
        <p>${humidity} %</p>
        <p>${wind} km/h</p>
      </div>
    `;
  })
  .catch(error => {
    console.error('There was an error fetching weather data:', error);
  });




