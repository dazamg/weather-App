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
        case "RECEIVE_MODAL_DATA":
            return {
                ...state,
                modalStatus: action.data.status,
                setDay: action.data.day
            }
        
        default:
            return state
    }
}

export default weatherReducer;