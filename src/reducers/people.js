import { FAKE_DATA } from "../actions/types";

const initialState = {
    fake_data: [],
    people: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FAKE_DATA:
            return {
                ...state,
                fake_data: action.payload
            };
        case 'GET_PEOPLE':
            return {
                ...state,
                people: action.payload
            };
        case 'ADD_PERSON':
            return {
                ...state,
                people: [...state.people, action.payload]
            };
        case 'DELETE_PERSON':
            return{
                ...state,
                people: state.people.filter(item => item.id != action.payload)
            }
        default:
            return state;
    }
}