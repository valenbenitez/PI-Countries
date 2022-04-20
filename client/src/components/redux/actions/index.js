const axios = require("axios");

export const GET_ALL_COUNTRIES = "GET_ALL_HOUSES";
export const GET_COUNTRY = "GET_COUNTRY";
// export const
// export const

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

// export const getCountry = (id) => (dispatch) => {
//   return fetch(`http://localhost:3001/countries/:${id}`)
//     .then((countries) => countries.json())
//     .then((country) => dispatch({ type: GET_COUNTRY, payload: country.data }));
// };

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