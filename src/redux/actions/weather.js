// Get users request from weather Api
export const GET_WEATHER_REQUEST= 'WET_WEATHER_REQUEST';
export const GET_WEATHER_SUCCESS= 'GET_WEATHER_SUCCESS';

// Get selected cities
export const REQUEST_DATA_ITEM = "REQUEST_DATA_ITEM";
export const RECEIVE_DATA_ITEM = "RECEIVE_DATA_ITEM";

//export the action and return data
export const getWeatherRequest = data => ({ type: GET_WEATHER_REQUEST, data });
export const getWeatherSuccess = data => ({ type: GET_WEATHER_SUCCESS, data });

export const requestDataItem = data => ({ type: REQUEST_DATA_ITEM, data });
export const receiveDataItem = data => ({ type: RECEIVE_DATA_ITEM, data });
