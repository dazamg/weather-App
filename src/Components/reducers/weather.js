import {Types} from '../actions/weather'

const initialState = {
    items: []
};

export function weather(state = initialState, action){
    switch(action.type){
        case Types.GET_WEATHER_SUCCESS:{
            return {
                items: action.payload.items
            }
        }
        default: {
            return state;
        }
    }
}