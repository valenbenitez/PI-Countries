const axios = require("axios");

export const GET_ALL_COUNTRIES = "GET_ALL_HOUSES";
export const GET_COUNTRY = "GET_COUNTRY";
export const SEARCH_COUNTRY = "SEARCH_COUNTRY"
export const GET_COUNTRY_QUERY = "GET_COUNTRY_QUERY"
export const POST_ACTIVITY = "POST_ACTIVITY"
export const ORDER_BY_POP = "ORDER_BY_POP"
export const ORDER_BY_NAME = "ORDER_BY_NAME"
export const FILTER_BY_CONT = "FILTER_BY_CONT"
export const GET_ACTIVITIES = "GET_ACTIVITIES"
export const FILTER_BY_ACT = "FILTER_BY_ACT"


export const getAllCountries = () => {
  return function (dispatch) {
    axios.get("http://localhost:3001/countries")
      .then((countries) => {
        dispatch({
          type: GET_ALL_COUNTRIES,
          payload: countries.data,
        });
      });
  };
};

export function searchCountry(buscar) {
  return async function (dispatch) {
    try {
      var busqueda = await axios.get('http://localhost:3001/countries?name=' + buscar)
      return dispatch({
        type: SEARCH_COUNTRY,
        payload: busqueda.data[0]
      })
    } catch (error) {
      alert('not found :/')
      console.log(error)
    }
  }
}

export const getCountry = (id) => {
  return function (dispatch) {
    axios.get(`http://localhost:3001/countries/${id}`)
      .then((country) => {
        dispatch({
          type: GET_COUNTRY,
          payload: country.data,
        });
      });
  };
};

export const getCountryQuery = (id) => {
  return function (dispatch) {
    axios.get(`http://localhost:3001/countries?name=${id}`)
      .then((country) => {
        dispatch({
          type: GET_COUNTRY_QUERY,
          payload: country.data,
        });
      });
  };
};

export function postActivity(payload) {
  return async function (dispatch) {
    try {
      await axios.post('http://localhost:3001/act', payload)
      return dispatch({
        type: POST_ACTIVITY,
      })
    } catch (error) {
      alert('No se pudo realizar el post :/')
      console.log(error)
    }
  }
}

export function orderByPop(payload) {
  return {
    type: ORDER_BY_POP,
    payload
  }
}

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload
  }
}

export function filterByCont(payload) {
  return {
    type: FILTER_BY_CONT,
    payload
  }
}

export function getActivities() {
  return async function (dispatch) {
    const activitiesSave = (await axios.get('http://localhost:3001/activities')).data
    // const activitiesGuardadas = activitiesSave.data
    //  console.log(activitiesSave)
    dispatch({
      type: GET_ACTIVITIES,
      payload: activitiesSave
    })
  }
}

export function filterByAct(payload){
  return{
    type: FILTER_BY_ACT,
    payload
  }
}

// export const getCountry = (id) => (dispatch) => {
//   return fetch(`http://localhost:3001/countries/:${id}`)
//     .then((countries) => countries.json())
//     .then((country) => dispatch({ type: GET_COUNTRY, payload: country.data }));
// };