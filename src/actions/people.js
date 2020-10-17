import Axios from "axios"
import { FAKE_DATA } from "./types"
import axios from 'axios';
import { connect } from "react-redux";

export const getFakeData = () => dispatch => {
    const fake_data = [{name: 'VVV', surname: '1234'},{name: 'VVV', surname: '1234'},{name: 'VVV', surname: '1234'}]
    dispatch({
        type: FAKE_DATA,
        payload:  fake_data
    })
}


export const getPeople = () => dispatch => {
    console.log('test')
    axios.get(`https://computing-networks.herokuapp.com/api/people`).then(res => {
        dispatch({
            type: 'GET_PEOPLE',
            payload: res.data
        })
    }) 
}

export const addPerson = (name) => dispatch => {
    const body = {name: name}

    axios.post(`https://computing-networks.herokuapp.com/api/people/`, body).then(res => {
        dispatch({
            type: 'ADD_PERSON',
            payload: res.data
        })
    })
}

export const deletePerson = (id) => dispatch => {
    axios.delete(`https://computing-networks.herokuapp.com/api/people/${id}/`).then(res => {
        dispatch({
            type: 'DELETE_PERSON',
            payload: id
        })
    })
}