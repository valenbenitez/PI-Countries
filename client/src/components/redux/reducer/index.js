//importar actions aca
import {
    GET_ALL_COUNTRIES,
    GET_COUNTRY,
    SEARCH_COUNTRY,
    GET_COUNTRY_QUERY,
    POST_ACTIVITY,
    ORDER_BY_POP,
    ORDER_BY_NAME,
    FILTER_BY_CONT,
    GET_ACTIVITIES,
    FILTER_BY_ACT,
    RESET_COUNTRY
} from "../actions/index"

const initialState = {
    countries: [],
    country: {},
    countriesCopy: [],
    activities: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                countriesCopy: action.payload
            }

        case GET_COUNTRY:
            return {
                ...state,
                country: action.payload
            }
        case SEARCH_COUNTRY:
            return {
                ...state,
                country: action.payload
            }
        case GET_COUNTRY_QUERY:
            return {
                ...state,
                country: action.payload
            }

        case POST_ACTIVITY:
            return {
                ...state
            }
        case ORDER_BY_POP:
            let orderByPp = action.payload === 'asc' ? state.countries.sort((a, b) => {
                if (a.poblacion > b.poblacion) {
                    return 1;
                }
                if (b.poblacion > a.poblacion) {
                    return -1;
                }
                return 0
            }) :
                state.countries.sort((a, b) => {
                    if (a.poblacion > b.poblacion) {
                        return -1;
                    }
                    if (b.poblacion > a.poblacion) {
                        return 1;
                    }
                    return 0
                })

            return {
                ...state,
                countries: orderByPp
            }

        case ORDER_BY_NAME:
            let orderByNm = action.payload === 'az' ? state.countries.sort((a, b) => {
                if (a.name < b.name) {
                    return -1
                }
                if (a.name > b.name) {
                    return 1
                }
                return 0;
            }) :
                state.countries.sort((a, b) => {
                    if (a.name < b.name) {
                        return 1
                    }
                    if (a.name > b.name) {
                        return -1
                    }
                    return 0;
                })
            return {
                ...state,
                countries: orderByNm
            }

        case FILTER_BY_CONT:
            var filterBycontinent = state.countriesCopy
            var continenteFiltrado = action.payload === 'All' ? filterBycontinent : filterBycontinent.filter(e => e.continent === action.payload)

            return {
                ...state,
                countries: continenteFiltrado
            }

        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }

        case FILTER_BY_ACT:
            var filterByAct = state.countriesCopy
            var actividadFiltrada = action.payload === 'All' ? filterByAct : filterByAct.filter(e => { return e.activities.find(e => { return e.name === action.payload }) })

            return {
                ...state,
                countries: actividadFiltrada
            }

        case RESET_COUNTRY:
            return{
                ...state,
                country:{}
            }

        default:
            return {
                ...state
            }
    }
}

export default rootReducer