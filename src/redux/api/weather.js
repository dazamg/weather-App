import axios from 'axios';

//Calling the openweather OneCall Api
const baseUrl = "http://api.openweathermap.org/data/2.5/onecall?"

//API KEY
const keys = process.env.REACT_APP_API_KEY
console.log(keys)

export const getWeatherData = async (location) => {
    const {lat, lng} = location
    console.log('@@@@@Hit API@@@@')
      try {
        const response = await fetch(`${baseUrl}lat=${lat}&lon=${lng}&exclude=hourly,minutely&appid=${keys}`);
        const data = await response.json();
        return data;
      } catch (e) {
        console.log(e);
      }
    };
// I couldn't get to add a params field
// export function getWeather() {
//     return axios.request({
//       method: "get",
//       url: "http://api.openweathermap.org/data/2.5/onecall?"
//     });
//   }