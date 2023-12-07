const apiKey="2eee5fd6f2ffa16fe7c5c6c5920c779d";
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox=document.querySelector(".search input");
    const searchBtn=document.querySelector(".search button");


    async function checkWeather(city) {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

      if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
      }
      else{
        var data = await response.json();
      
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ '&deg;C';
        document.querySelector(".humidity").innerHTML=data.main.humidity +'%';
        document.querySelector(".wind").innerHTML=data.wind.speed + 'km/hr';

        if(data.weather[0].main == "Clouds"){
          document.querySelector(".weather-icon").src="images/clouds.png";
          document.querySelector(".weather-type").innerHTML="Clouds";
        }
        else if(data.weather[0].main == "Clear"){
          document.querySelector(".weather-icon").src="images/clear.png";
          document.querySelector(".weather-type").innerHTML="Clear";
        }
        else if(data.weather[0].main == "Rain"){
          document.querySelector(".weather-icon").src="images/rain.png";
          document.querySelector(".weather-type").innerHTML="Rain";
        }
        else if(data.weather[0].main == "Drizzle"){
          document.querySelector(".weather-icon").src="images/drizzle.png";
          document.querySelector(".weather-type").innerHTML="Drizzle";
        }
        else if(data.weather[0].main == "Mist"){
          document.querySelector(".weather-icon").src="images/mist.png";
          document.querySelector(".weather-type").innerHTML="Mist";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
      }
    }

    searchBtn.addEventListener("click", () => {
      checkWeather(searchBox.value);
    });