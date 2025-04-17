function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY'; // Use your OpenWeather API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          document.getElementById('location').innerText = `${data.name}, ${data.sys.country}`;
          document.getElementById('temp').innerText = `Temperature: ${data.main.temp}°C`;
          document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
          document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
          document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
        } else {
          alert('City not found!');
        }
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }
  