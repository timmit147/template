fetch('https://api.open-meteo.com/v1/forecast?latitude=52.09&longitude=5.12&current=temperature_2m')
  .then(response => response.json())
  .then(data => {
    document.querySelector('#weather p').textContent = "Temperatuur "+ data.current.temperature_2m;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
