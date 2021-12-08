// Get users request from weather Api
export const GET_WEATHER_REQUEST= 'WET_WEATHER_REQUEST';
export const GET_WEATHER_SUCCESS= 'GET_WEATHER_SUCCESS';

// Get selected cities
export const REQUEST_DATA_ITEM = "REQUEST_DATA_ITEM";
export const RECEIVE_DATA_ITEM = "RECEIVE_DATA_ITEM";

// Modal request 
export const REQUEST_MODAL_DATA = "REQUEST_MODAL_DATA"
export const RECEIVE_MODAL_DATA = "RECEIVE_MODAL_DATA"

//export the action and return data
export const getWeatherRequest = data => ({ type: GET_WEATHER_REQUEST, data });
export const getWeatherSuccess = data => ({ type: GET_WEATHER_SUCCESS, data });

export const requestDataItem = data => ({ type: REQUEST_DATA_ITEM, data });
export const receiveDataItem = data => ({ type: RECEIVE_DATA_ITEM, data });

export const requestModalData = data => ({type: REQUEST_MODAL_DATA, data })
export const receiveModalData = data => ({type: RECEIVE_MODAL_DATA, data })