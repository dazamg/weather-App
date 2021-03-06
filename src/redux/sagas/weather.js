import { takeLatest, call, fork, put } from 'redux-saga/effects';
import {GET_WEATHER_REQUEST,getWeatherSuccess, 
        REQUEST_DATA_ITEM, 
        receiveDataItem, 
        REQUEST_MODAL_DATA,
        receiveModalData} from '../actions/weather'
import {getWeatherData} from '../api/weather'

// Generator function
function* getWeather(action) {
    //fetch weather data 
    try {
        const data = yield call(getWeatherData, action.data);
        yield put(getWeatherSuccess(data));
    
    } catch(e){
        console.log(e)
    }
}


function* selectedCity(action) {
    yield put(receiveDataItem(action.data))
}

function* setModal(action){
    yield put(receiveModalData(action.data))
}


function* weatherSagas() {
    yield takeLatest(GET_WEATHER_REQUEST, getWeather)
}
    
function* dataItemSaga(){
    yield takeLatest(REQUEST_DATA_ITEM, selectedCity)
}

function* modalSaga(){
    yield takeLatest(REQUEST_MODAL_DATA, setModal)
}

// export weather Sagas
export default function* rootSaga(){
    yield fork(weatherSagas)
    yield fork(dataItemSaga)   
    yield fork(modalSaga)
}