// Get users request for weather 
export const Types = {
    GET_WEATHER_REQUEST: 'weather/get_weather_request',
    GET_WEATHER_SUCCESS: 'weather/get_weather_success'
}

//export the action and return
export const getWeatherRequest = () => ({
    type: Types.GET_WEATHER_REQUEST
});

//Return the object from the API with the weather data
export const getWeatherSuccess = ({items}) => ({
    type: Types.GET_WEATHER_SUCCESS,
    payload: {
        items
    }
});
