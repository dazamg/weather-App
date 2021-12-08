//Allow the user to choose for which city to display weather information - choices should be New York, NY, 
//Chicago, IL, and Miami, FL, with New York being the default

const initialState = {
    weathers: [],
    //default New York
    cityLog: 'New York',
    //modal
    modalStatus: false,
    setDay: {}
}

const weatherReducer = (state = initialState, action) => {
    switch(action.type){
        //transfer the location coordinates
        case "GET_WEATHER_SUCCESS":
            return {
                ...state,
                weathers: action.data
            }
        case "RECEIVE_DATA_ITEM":
            return{
                ...state, 
                cityLog: action.data.name
            }
        
        default:
            return state
    }
}

// export function weatherReducer(state = { items: []}, action){
//     switch(action.type){
//         case Types.GET_WEATHER_SUCCESS:
//             return { ...state, items: action.items}
//         default: 
//                 return state;
//     }
// }

export default weatherReducer;