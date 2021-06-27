import axios from 'axios';
export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_FAILED = 'FETCH_SMURF_FAILED'
export const ADD_NEW_SMURF = 'ADD_NEW_SMURF'
export const SET_ERROR = 'SET_ERROR'

export const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: FETCH_SMURF_START });
    axios.get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
      })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_SMURF_FAILED, payload: err });
    })
  }

export const addNewSmurf = (smurf) => {
    return ({type: ADD_NEW_SMURF, payload: smurf})
}

export const setError = (error) => {
    return ({type: SET_ERROR, payload: error})
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.